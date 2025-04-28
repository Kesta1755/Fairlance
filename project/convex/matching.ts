import { v } from "convex/values";
import { query } from "./_generated/server";
import { ConvexError } from "convex/values";

/**
 * AI-Driven Matching Algorithm for FairLance
 * 
 * This module implements our fair matching system that:
 * 1. Prioritizes skills over reputation/experience
 * 2. Gives newcomers a fair chance
 * 3. Provides balanced opportunities across all experience levels
 * 4. Matches based on project requirements and freelancer capabilities
 * 
 * The algorithm uses a weighted scoring system that can be adjusted
 * based on the client's fairness settings.
 */

// Match freelancers to a project
export const matchFreelancersToProject = query({
  args: {
    projectId: v.id("projects"),
  },
  handler: async (ctx, args) => {
    // Get project details
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    // Get all freelancer profiles
    const profiles = await ctx.db
      .query("profiles")
      .collect();

    // Get user details for each profile
    const freelancers = await Promise.all(
      profiles.map(async (profile) => {
        const user = await ctx.db.get(profile.userId);
        
        // Only include freelancers
        if (!user || user.role !== "freelancer") {
          return null;
        }
        
        return {
          user,
          profile,
        };
      })
    );

    // Filter out non-freelancers
    const validFreelancers = freelancers.filter(f => f !== null) as Array<{
      user: any;
      profile: any;
    }>;

    // Calculate match scores
    const matches = await Promise.all(
      validFreelancers.map(async ({ user, profile }) => {
        // Calculate skill match
        let skillMatchScore = 0;
        let skillMatchCount = 0;
        
        if (profile.skills && profile.skills.length > 0) {
          // Count how many required skills the freelancer has
          for (const requiredSkillId of project.requiredSkills) {
            if (profile.skills.includes(requiredSkillId)) {
              skillMatchCount++;
            }
          }
          
          // Calculate percentage match
          skillMatchScore = project.requiredSkills.length > 0
            ? (skillMatchCount / project.requiredSkills.length) * 100
            : 0;
        }
        
        // Base weights
        let weights = {
          skillMatch: 0.6,      // 60% weight for skill match
          experience: 0.2,      // 20% weight for experience
          completedProjects: 0.1, // 10% weight for completed projects
          newcomerBoost: 0.1,   // 10% weight for newcomer boost
        };
        
        // Adjust weights based on fairness settings
        if (project.fairnessSettings.skillsFirstMatching) {
          // Increase skill weight, decrease experience weight
          weights.skillMatch = 0.8;
          weights.experience = 0.1;
          weights.completedProjects = 0.05;
          weights.newcomerBoost = 0.05;
        }
        
        if (project.fairnessSettings.newcomerBoost && profile.isNewcomer) {
          // Boost newcomers
          weights.newcomerBoost = 0.2;
          weights.experience = 0.1;
        }
        
        // Calculate experience score (0-100)
        let experienceScore = 0;
        if (profile.experienceLevel === "beginner") {
          experienceScore = 33;
        } else if (profile.experienceLevel === "intermediate") {
          experienceScore = 66;
        } else if (profile.experienceLevel === "expert") {
          experienceScore = 100;
        }
        
        // Calculate completed projects score (0-100)
        const completedProjectsScore = Math.min((profile.completedProjects || 0) * 5, 100);
        
        // Calculate newcomer boost score
        const newcomerBoostScore = profile.isNewcomer ? 100 : 0;
        
        // Calculate final weighted score
        const finalScore = 
          (skillMatchScore * weights.skillMatch) +
          (experienceScore * weights.experience) +
          (completedProjectsScore * weights.completedProjects) +
          (newcomerBoostScore * weights.newcomerBoost);
        
        return {
          freelancer: {
            _id: user._id,
            name: user.name,
            experienceLevel: profile.experienceLevel,
            isNewcomer: profile.isNewcomer,
            avatarUrl: profile.avatarUrl,
            hourlyRate: profile.hourlyRate,
            completedProjects: profile.completedProjects || 0,
          },
          match: {
            score: finalScore,
            skillMatchPercentage: skillMatchScore,
            skillMatchCount,
            totalRequiredSkills: project.requiredSkills.length,
            experienceScore,
            completedProjectsScore,
            newcomerBoostApplied: profile.isNewcomer && project.fairnessSettings.newcomerBoost,
          },
        };
      })
    );
    
    // Sort by match score (highest first)
    matches.sort((a, b) => b.match.score - a.match.score);
    
    return {
      project,
      matches: matches.slice(0, 10), // Return top 10 matches
      fairnessSettings: project.fairnessSettings,
    };
  },
});

// Get recommended projects for a freelancer
export const getRecommendedProjects = query({
  args: {
    freelancerId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get freelancer profile
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", args.freelancerId))
      .first();
    
    if (!profile) {
      throw new ConvexError("Freelancer profile not found");
    }
    
    // Get open projects
    const openProjects = await ctx.db
      .query("projects")
      .withIndex("by_status", (q) => q.eq("status", "open"))
      .collect();
    
    // Calculate match scores
    const matches = await Promise.all(
      openProjects.map(async (project) => {
        // Calculate skill match
        let skillMatchScore = 0;
        let skillMatchCount = 0;
        
        if (profile.skills && profile.skills.length > 0) {
          // Count how many required skills the freelancer has
          for (const requiredSkillId of project.requiredSkills) {
            if (profile.skills.includes(requiredSkillId)) {
              skillMatchCount++;
            }
          }
          
          // Calculate percentage match
          skillMatchScore = project.requiredSkills.length > 0
            ? (skillMatchCount / project.requiredSkills.length) * 100
            : 0;
        }
        
        // Get client details
        const client = await ctx.db.get(project.clientId);
        
        // Get category details
        const category = await ctx.db.get(project.category);
        
        return {
          project,
          client: {
            _id: client?._id,
            name: client?.name,
          },
          category: category ? {
            _id: category._id,
            name: category.name,
            iconName: category.iconName,
            color: category.color,
          } : null,
          match: {
            score: skillMatchScore,
            skillMatchPercentage: skillMatchScore,
            skillMatchCount,
            totalRequiredSkills: project.requiredSkills.length,
            newcomerBoostApplied: profile.isNewcomer && project.fairnessSettings.newcomerBoost,
          },
        };
      })
    );
    
    // Sort by match score (highest first)
    matches.sort((a, b) => b.match.score - a.match.score);
    
    return matches.slice(0, 10); // Return top 10 matches
  },
});

// Get similar freelancers (for clients)
export const getSimilarFreelancers = query({
  args: {
    freelancerId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get target freelancer profile
    const targetProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", args.freelancerId))
      .first();
    
    if (!targetProfile) {
      throw new ConvexError("Freelancer profile not found");
    }
    
    // Get all other freelancer profiles
    const profiles = await ctx.db
      .query("profiles")
      .collect();
    
    // Get user details for each profile
    const freelancers = await Promise.all(
      profiles.map(async (profile) => {
        // Skip the target freelancer
        if (profile._id === targetProfile._id) {
          return null;
        }
        
        const user = await ctx.db.get(profile.userId);
        
        // Only include freelancers
        if (!user || user.role !== "freelancer") {
          return null;
        }
        
        return {
          user,
          profile,
        };
      })
    );
    
    // Filter out non-freelancers and the target freelancer
    const validFreelancers = freelancers.filter(f => f !== null) as Array<{
      user: any;
      profile: any;
    }>;
    
    // Calculate similarity scores
    const similarFreelancers = validFreelancers.map(({ user, profile }) => {
      // Calculate skill similarity
      let skillSimilarityScore = 0;
      let sharedSkillCount = 0;
      
      if (targetProfile.skills && profile.skills && 
          targetProfile.skills.length > 0 && profile.skills.length > 0) {
        // Count shared skills
        for (const skill of targetProfile.skills) {
          if (profile.skills.includes(skill)) {
            sharedSkillCount++;
          }
        }
        
        // Calculate similarity percentage
        const totalUniqueSkills = new Set([
          ...targetProfile.skills,
          ...profile.skills
        ]).size;
        
        skillSimilarityScore = totalUniqueSkills > 0
          ? (sharedSkillCount / totalUniqueSkills) * 100
          : 0;
      }
      
      // Experience level similarity (0-100)
      const experienceSimilarity = 
        targetProfile.experienceLevel === profile.experienceLevel ? 100 : 
        (targetProfile.experienceLevel === "beginner" && profile.experienceLevel === "intermediate") ||
        (targetProfile.experienceLevel === "intermediate" && profile.experienceLevel === "beginner") ||
        (targetProfile.experienceLevel === "intermediate" && profile.experienceLevel === "expert") ||
        (targetProfile.experienceLevel === "expert" && profile.experienceLevel === "intermediate")
          ? 50 : 0;
      
      // Calculate final similarity score
      const finalScore = (skillSimilarityScore * 0.7) + (experienceSimilarity * 0.3);
      
      return {
        freelancer: {
          _id: user._id,
          name: user.name,
          experienceLevel: profile.experienceLevel,
          isNewcomer: profile.isNewcomer,
          avatarUrl: profile.avatarUrl,
          hourlyRate: profile.hourlyRate,
          completedProjects: profile.completedProjects || 0,
        },
        similarity: {
          score: finalScore,
          sharedSkillCount,
          skillSimilarityPercentage: skillSimilarityScore,
          experienceSimilarity,
        },
      };
    });
    
    // Sort by similarity score (highest first)
    similarFreelancers.sort((a, b) => b.similarity.score - a.similarity.score);
    
    return similarFreelancers.slice(0, 5); // Return top 5 similar freelancers
  },
});
