import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Fairlance Schema
 * 
 * This schema defines the core data models for the Fairlance platform:
 * - Users: Basic user information and authentication
 * - Profiles: Detailed user profiles for freelancers and clients
 * - Projects: Client projects that need freelancers
 * - Proposals: Freelancer proposals for projects
 * - EscrowTransactions: Secure payment transactions between clients and freelancers
 * - Skills: Skills that freelancers can have and projects can require
 * - Reviews: Reviews for completed projects
 */

export default defineSchema({
  // Users table - core user information
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    role: v.union(v.literal("client"), v.literal("freelancer"), v.literal("admin")),
    createdAt: v.number(),
    lastLoginAt: v.optional(v.number()),
    isVerified: v.boolean(),
  }).index("by_email", ["email"]),

  // Profiles table - detailed user profiles
  profiles: defineTable({
    userId: v.id("users"),
    bio: v.optional(v.string()),
    skills: v.optional(v.array(v.id("skills"))),
    skillDescriptions: v.optional(v.array(v.string())),
    hourlyRate: v.optional(v.number()),
    experienceLevel: v.optional(v.union(
      v.literal("beginner"),
      v.literal("intermediate"),
      v.literal("expert")
    )),
    portfolioLinks: v.optional(v.array(v.string())),
    avatarUrl: v.optional(v.string()),
    location: v.optional(v.string()),
    languages: v.optional(v.array(v.string())),
    completedProjects: v.optional(v.number()),
    successRate: v.optional(v.number()),
    isNewcomer: v.boolean(), // Special flag for newcomer boost feature
    joinedAt: v.number(),
  }).index("by_userId", ["userId"]),

  // Projects table - client projects
  projects: defineTable({
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
    status: v.union(
      v.literal("draft"),
      v.literal("open"),
      v.literal("in_progress"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    fairnessSettings: v.object({
      skillsFirstMatching: v.boolean(), // Prioritize skills over reputation
      blindProposalReview: v.boolean(), // Hide freelancer identity during initial review
      newcomerBoost: v.boolean(), // Give visibility boost to newcomers
      fairPaymentPromise: v.boolean(), // Promise to pay fair rates
    }),
    escrowTransactionId: v.optional(v.id("escrowTransactions")),
    createdAt: v.number(),
    updatedAt: v.number(),
    category: v.id("categories"),
    attachments: v.optional(v.array(v.string())), // URLs to attached files
  })
    .index("by_clientId", ["clientId"])
    .index("by_status", ["status"])
    .index("by_category", ["category"]),

  // Proposals table - freelancer proposals for projects
  proposals: defineTable({
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
    status: v.union(
      v.literal("pending"),
      v.literal("accepted"),
      v.literal("rejected"),
      v.literal("withdrawn")
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
    milestones: v.optional(v.array(v.object({
      title: v.string(),
      description: v.string(),
      dueDate: v.optional(v.number()),
      amount: v.number(),
      status: v.union(
        v.literal("pending"),
        v.literal("in_progress"),
        v.literal("completed"),
        v.literal("approved"),
        v.literal("disputed")
      ),
    }))),
  })
    .index("by_projectId", ["projectId"])
    .index("by_freelancerId", ["freelancerId"])
    .index("by_project_and_status", ["projectId", "status"]),

  // EscrowTransactions table - secure payment transactions
  escrowTransactions: defineTable({
    projectId: v.id("projects"),
    clientId: v.id("users"),
    freelancerId: v.id("users"),
    amount: v.number(),
    currency: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("funded"),
      v.literal("released"),
      v.literal("disputed"),
      v.literal("refunded"),
      v.literal("cancelled")
    ),
    description: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
    disputeReason: v.optional(v.string()),
    releaseDate: v.optional(v.number()),
    platformFee: v.number(), // Platform fee percentage (lower for newcomers)
  })
    .index("by_projectId", ["projectId"])
    .index("by_clientId", ["clientId"])
    .index("by_freelancerId", ["freelancerId"]),

  // Skills table - skills for freelancers and projects
  skills: defineTable({
    name: v.string(),
    category: v.string(),
    description: v.optional(v.string()),
  }).index("by_name", ["name"]),

  // Categories table - project categories
  categories: defineTable({
    name: v.string(),
    description: v.string(),
    iconName: v.string(), // Name of the Lucide icon to use
    color: v.string(), // Tailwind color class
    projectCount: v.number(), // Number of projects in this category
  }).index("by_name", ["name"]),

  // Reviews table - project reviews
  reviews: defineTable({
    projectId: v.id("projects"),
    reviewerId: v.id("users"), // User writing the review
    revieweeId: v.id("users"), // User being reviewed
    rating: v.number(), // 1-5 star rating
    comment: v.string(),
    createdAt: v.number(),
    isPublic: v.boolean(),
    type: v.union(v.literal("client_to_freelancer"), v.literal("freelancer_to_client")),
  })
    .index("by_projectId", ["projectId"])
    .index("by_revieweeId", ["revieweeId"]),

  // Messages table - communication between users
  messages: defineTable({
    senderId: v.id("users"),
    receiverId: v.id("users"),
    projectId: v.optional(v.id("projects")),
    content: v.string(),
    createdAt: v.number(),
    isRead: v.boolean(),
    attachments: v.optional(v.array(v.string())),
  })
    .index("by_sender_receiver", ["senderId", "receiverId"])
    .index("by_project", ["projectId"]),

  // Notifications table - user notifications
  notifications: defineTable({
    userId: v.id("users"),
    type: v.string(), // Type of notification (e.g., "new_proposal", "message", etc.)
    title: v.string(),
    message: v.string(),
    relatedId: v.optional(v.string()), // ID of related entity (project, proposal, etc.)
    isRead: v.boolean(),
    createdAt: v.number(),
  }).index("by_userId", ["userId"]),
});
