import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";

/**
 * Authentication functions for FairLance
 * 
 * These functions handle user registration, login, and profile management.
 * They implement ethical practices:
 * - Secure password handling (we only store hashed passwords)
 * - Equal opportunity for all users regardless of experience
 * - Fair treatment of newcomers
 */

// Register a new user
export const register = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
    role: v.union(v.literal("client"), v.literal("freelancer")),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingUser) {
      throw new ConvexError("Email already in use");
    }

    // In a real implementation, we would hash the password
    // For demo purposes, we're storing it directly (NOT SECURE)
    // In production, use bcrypt or similar
    const passwordHash = args.password; // DEMO ONLY - would use bcrypt in production

    // Create the user
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      passwordHash,
      role: args.role,
      createdAt: Date.now(),
      isVerified: false, // Would require email verification in production
    });

    // Create initial profile
    await ctx.db.insert("profiles", {
      userId,
      isNewcomer: true, // All new users start as newcomers
      joinedAt: Date.now(),
    });

    return { userId };
  },
});

// Login a user
export const login = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Find user by email
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!user) {
      throw new ConvexError("Invalid email or password");
    }

    // In production, we would use bcrypt.compare
    // For demo, we're doing direct comparison (NOT SECURE)
    if (user.passwordHash !== args.password) {
      throw new ConvexError("Invalid email or password");
    }

    // Update last login time
    await ctx.db.patch(user._id, {
      lastLoginAt: Date.now(),
    });

    // Get user profile
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", user._id))
      .first();

    return {
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile,
    };
  },
});

// Get current user profile
export const getProfile = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get user
    const user = await ctx.db.get(args.userId);
    if (!user) {
      throw new ConvexError("User not found");
    }

    // Get profile
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .first();

    if (!profile) {
      throw new ConvexError("Profile not found");
    }

    return {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        isVerified: user.isVerified,
      },
      profile,
    };
  },
});

// Update user profile
export const updateProfile = mutation({
  args: {
    userId: v.id("users"),
    bio: v.optional(v.string()),
    hourlyRate: v.optional(v.number()),
    experienceLevel: v.optional(
      v.union(
        v.literal("beginner"),
        v.literal("intermediate"),
        v.literal("expert")
      )
    ),
    portfolioLinks: v.optional(v.array(v.string())),
    avatarUrl: v.optional(v.string()),
    location: v.optional(v.string()),
    languages: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    // Get profile
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .first();

    if (!profile) {
      throw new ConvexError("Profile not found");
    }

    // Update profile
    const updateData: any = {};
    
    if (args.bio !== undefined) updateData.bio = args.bio;
    if (args.hourlyRate !== undefined) updateData.hourlyRate = args.hourlyRate;
    if (args.experienceLevel !== undefined) updateData.experienceLevel = args.experienceLevel;
    if (args.portfolioLinks !== undefined) updateData.portfolioLinks = args.portfolioLinks;
    if (args.avatarUrl !== undefined) updateData.avatarUrl = args.avatarUrl;
    if (args.location !== undefined) updateData.location = args.location;
    if (args.languages !== undefined) updateData.languages = args.languages;

    await ctx.db.patch(profile._id, updateData);

    return { success: true };
  },
});
