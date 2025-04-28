import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";

/**
 * Project Management API for FairLance
 * 
 * These functions handle the core project workflow:
 * - Creating and managing projects (client)
 * - Submitting and managing proposals (freelancer)
 * - Project matching and selection
 * 
 * All functions implement fair practices:
 * - Skills-first matching instead of reputation-based
 * - Equal opportunity for newcomers
 * - Blind proposal reviews when enabled
 * - Fair payment protection
 */

// Create a new project
export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    clientId: v.id("users"),
    requiredSkills: v.array(v.id("skills")),
    budget: v.object({
      min: v.number(),
      max: v.number(),
      currency: v.string(),
    }),
    deadline: v.optional(v.number()),
    fairnessSettings: v.object({
      skillsFirstMatching: v.boolean(),
      blindProposalReview: v.boolean(),
      newcomerBoost: v.boolean(),
      fairPaymentPromise: v.boolean(),
    }),
    category: v.id("categories"),
    attachments: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    // Verify client exists
    const client = await ctx.db.get(args.clientId);
    if (!client || client.role !== "client") {
      throw new ConvexError("Invalid client");
    }

    // Create the project
    const projectId = await ctx.db.insert("projects", {
      title: args.title,
      description: args.description,
      clientId: args.clientId,
      requiredSkills: args.requiredSkills,
      budget: args.budget,
      deadline: args.deadline,
      status: "open",
      fairnessSettings: args.fairnessSettings,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      category: args.category,
      attachments: args.attachments || [],
    });

    // Update category project count
    const category = await ctx.db.get(args.category);
    if (category) {
      await ctx.db.patch(args.category, {
        projectCount: category.projectCount + 1,
      });
    }

    // Create notification for matching freelancers
    // In a real implementation, we would query matching freelancers
    // and create notifications for them

    return { projectId };
  },
});

// Get project details
export const getProject = query({
  args: {
    projectId: v.id("projects"),
  },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    // Get client details
    const client = await ctx.db.get(project.clientId);

    // Get category details
    const category = await ctx.db.get(project.category);

    // Get required skills
    const skills = await Promise.all(
      project.requiredSkills.map(async (skillId) => {
        const skill = await ctx.db.get(skillId);
        return skill;
      })
    );

    // Get proposals count
    const proposals = await ctx.db
      .query("proposals")
      .withIndex("by_projectId", (q) => q.eq("projectId", args.projectId))
      .collect();

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
      skills,
      proposalCount: proposals.length,
    };
  },
});

// Get projects by client
export const getClientProjects = query({
  args: {
    clientId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_clientId", (q) => q.eq("clientId", args.clientId))
      .collect();

    return projects;
  },
});

// Get all open projects
export const getOpenProjects = query({
  args: {
    categoryId: v.optional(v.id("categories")),
    skillIds: v.optional(v.array(v.id("skills"))),
    limit: v.optional(v.number()),
    cursor: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let query = ctx.db
      .query("projects")
      .withIndex("by_status", (q) => q.eq("status", "open"));

    // Filter by category if provided
    if (args.categoryId) {
      query = ctx.db
        .query("projects")
        .withIndex("by_category", (q) => q.eq("category", args.categoryId))
        .filter((q) => q.eq(q.field("status"), "open"));
    }

    // Apply pagination
    if (args.cursor) {
      query = query.paginate({ cursor: args.cursor });
    }

    // Apply limit
    if (args.limit) {
      query = query.take(args.limit);
    } else {
      query = query.take(20); // Default limit
    }

    const result = await query.collect();

    // Filter by skills if provided
    // Note: This is not efficient for large datasets
    // In a real implementation, we would use a more efficient approach
    let filteredProjects = result;
    if (args.skillIds && args.skillIds.length > 0) {
      filteredProjects = result.filter((project) => {
        return args.skillIds!.some((skillId) =>
          project.requiredSkills.includes(skillId)
        );
      });
    }

    // Enhance projects with additional data
    const enhancedProjects = await Promise.all(
      filteredProjects.map(async (project) => {
        // Get client
        const client = await ctx.db.get(project.clientId);

        // Get category
        const category = await ctx.db.get(project.category);

        // Get proposal count
        const proposals = await ctx.db
          .query("proposals")
          .withIndex("by_projectId", (q) => q.eq("projectId", project._id))
          .collect();

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
          proposalCount: proposals.length,
        };
      })
    );

    return {
      projects: enhancedProjects,
      cursor: result.continueCursor,
    };
  },
});

// Submit a proposal for a project
export const submitProposal = mutation({
  args: {
    projectId: v.id("projects"),
    freelancerId: v.id("users"),
    coverLetter: v.string(),
    proposedBudget: v.object({
      amount: v.number(),
      currency: v.string(),
    }),
    estimatedTimeframe: v.object({
      duration: v.number(),
      unit: v.union(v.literal("days"), v.literal("weeks"), v.literal("months")),
    }),
    milestones: v.optional(v.array(v.object({
      title: v.string(),
      description: v.string(),
      dueDate: v.optional(v.number()),
      amount: v.number(),
      status: v.literal("pending"),
    }))),
  },
  handler: async (ctx, args) => {
    // Verify freelancer exists
    const freelancer = await ctx.db.get(args.freelancerId);
    if (!freelancer || freelancer.role !== "freelancer") {
      throw new ConvexError("Invalid freelancer");
    }

    // Verify project exists and is open
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    if (project.status !== "open") {
      throw new ConvexError("Project is not open for proposals");
    }

    // Check if freelancer already submitted a proposal
    const existingProposal = await ctx.db
      .query("proposals")
      .withIndex("by_project_and_status", (q) =>
        q
          .eq("projectId", args.projectId)
          .eq("freelancerId", args.freelancerId)
      )
      .first();

    if (existingProposal) {
      throw new ConvexError("You have already submitted a proposal for this project");
    }

    // Create the proposal
    const proposalId = await ctx.db.insert("proposals", {
      projectId: args.projectId,
      freelancerId: args.freelancerId,
      coverLetter: args.coverLetter,
      proposedBudget: args.proposedBudget,
      estimatedTimeframe: args.estimatedTimeframe,
      status: "pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      milestones: args.milestones || [],
    });

    // Create notification for client
    await ctx.db.insert("notifications", {
      userId: project.clientId,
      type: "new_proposal",
      title: "New Proposal",
      message: `You have received a new proposal for your project "${project.title}"`,
      relatedId: args.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    return { proposalId };
  },
});

// Get proposals for a project
export const getProjectProposals = query({
  args: {
    projectId: v.id("projects"),
    clientId: v.id("users"), // To verify client owns the project
  },
  handler: async (ctx, args) => {
    // Verify project exists
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    // Verify client owns project
    if (project.clientId !== args.clientId) {
      throw new ConvexError("You do not have permission to view these proposals");
    }

    // Get proposals
    const proposals = await ctx.db
      .query("proposals")
      .withIndex("by_projectId", (q) => q.eq("projectId", args.projectId))
      .collect();

    // Enhance proposals with freelancer data
    const enhancedProposals = await Promise.all(
      proposals.map(async (proposal) => {
        const freelancer = await ctx.db.get(proposal.freelancerId);
        
        // Get freelancer profile
        const profile = await ctx.db
          .query("profiles")
          .withIndex("by_userId", (q) => q.eq("userId", proposal.freelancerId))
          .first();

        // If blind review is enabled, hide freelancer identity
        const blindReview = project.fairnessSettings.blindProposalReview;

        return {
          proposal,
          freelancer: blindReview
            ? {
                experienceLevel: profile?.experienceLevel,
                isNewcomer: profile?.isNewcomer,
              }
            : {
                _id: freelancer?._id,
                name: freelancer?.name,
                experienceLevel: profile?.experienceLevel,
                isNewcomer: profile?.isNewcomer,
                avatarUrl: profile?.avatarUrl,
              },
        };
      })
    );

    return enhancedProposals;
  },
});

// Accept a proposal
export const acceptProposal = mutation({
  args: {
    proposalId: v.id("proposals"),
    clientId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get proposal
    const proposal = await ctx.db.get(args.proposalId);
    if (!proposal) {
      throw new ConvexError("Proposal not found");
    }

    // Get project
    const project = await ctx.db.get(proposal.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    // Verify client owns project
    if (project.clientId !== args.clientId) {
      throw new ConvexError("You do not have permission to accept this proposal");
    }

    // Verify project is open
    if (project.status !== "open") {
      throw new ConvexError("Project is not open");
    }

    // Update proposal status
    await ctx.db.patch(args.proposalId, {
      status: "accepted",
      updatedAt: Date.now(),
    });

    // Update project status
    await ctx.db.patch(proposal.projectId, {
      status: "in_progress",
      updatedAt: Date.now(),
    });

    // Update escrow transaction with freelancer ID if it exists
    if (project.escrowTransactionId) {
      await ctx.db.patch(project.escrowTransactionId, {
        freelancerId: proposal.freelancerId,
        updatedAt: Date.now(),
      });
    }

    // Reject all other proposals
    const otherProposals = await ctx.db
      .query("proposals")
      .withIndex("by_projectId", (q) => q.eq("projectId", proposal.projectId))
      .filter((q) => q.neq(q.field("_id"), args.proposalId))
      .collect();

    for (const otherProposal of otherProposals) {
      await ctx.db.patch(otherProposal._id, {
        status: "rejected",
        updatedAt: Date.now(),
      });

      // Notify rejected freelancers
      await ctx.db.insert("notifications", {
        userId: otherProposal.freelancerId,
        type: "proposal_rejected",
        title: "Proposal Rejected",
        message: `Your proposal for "${project.title}" was not selected.`,
        relatedId: proposal.projectId,
        isRead: false,
        createdAt: Date.now(),
      });
    }

    // Notify accepted freelancer
    await ctx.db.insert("notifications", {
      userId: proposal.freelancerId,
      type: "proposal_accepted",
      title: "Proposal Accepted",
      message: `Your proposal for "${project.title}" has been accepted! You can now start working on the project.`,
      relatedId: proposal.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

// Mark project as completed (freelancer)
export const markProjectCompleted = mutation({
  args: {
    projectId: v.id("projects"),
    freelancerId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get project
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    // Get accepted proposal
    const proposal = await ctx.db
      .query("proposals")
      .withIndex("by_project_and_status", (q) =>
        q
          .eq("projectId", args.projectId)
          .eq("status", "accepted")
      )
      .first();

    if (!proposal) {
      throw new ConvexError("No accepted proposal found for this project");
    }

    // Verify freelancer is assigned to the project
    if (proposal.freelancerId !== args.freelancerId) {
      throw new ConvexError("You are not assigned to this project");
    }

    // Verify project is in progress
    if (project.status !== "in_progress") {
      throw new ConvexError(`Project is ${project.status}, not in progress`);
    }

    // Update project status
    await ctx.db.patch(args.projectId, {
      status: "completed",
      updatedAt: Date.now(),
    });

    // Notify client
    await ctx.db.insert("notifications", {
      userId: project.clientId,
      type: "project_completed",
      title: "Project Completed",
      message: `The freelancer has marked "${project.title}" as completed. Please review and release payment.`,
      relatedId: args.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

// Get freelancer projects
export const getFreelancerProjects = query({
  args: {
    freelancerId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get all proposals by freelancer
    const proposals = await ctx.db
      .query("proposals")
      .withIndex("by_freelancerId", (q) => q.eq("freelancerId", args.freelancerId))
      .collect();

    // Get projects for accepted proposals
    const projectIds = proposals
      .filter((proposal) => proposal.status === "accepted")
      .map((proposal) => proposal.projectId);

    // Get project details
    const projects = await Promise.all(
      projectIds.map(async (projectId) => {
        const project = await ctx.db.get(projectId);
        const client = await ctx.db.get(project!.clientId);
        
        return {
          project,
          client: {
            _id: client?._id,
            name: client?.name,
          },
        };
      })
    );

    return projects;
  },
});

// Get freelancer proposals
export const getFreelancerProposals = query({
  args: {
    freelancerId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get all proposals by freelancer
    const proposals = await ctx.db
      .query("proposals")
      .withIndex("by_freelancerId", (q) => q.eq("freelancerId", args.freelancerId))
      .collect();

    // Enhance with project details
    const enhancedProposals = await Promise.all(
      proposals.map(async (proposal) => {
        const project = await ctx.db.get(proposal.projectId);
        
        return {
          proposal,
          project: {
            _id: project?._id,
            title: project?.title,
            status: project?.status,
          },
        };
      })
    );

    return enhancedProposals;
  },
});
