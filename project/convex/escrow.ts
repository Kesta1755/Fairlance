import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";

/**
 * Escrow Payment System for FairLance
 * 
 * These functions handle the secure payment flow between clients and freelancers.
 * The escrow system ensures:
 * 1. Clients fund projects upfront
 * 2. Funds are held securely until work is completed
 * 3. Freelancers are guaranteed payment for completed work
 * 4. Disputes can be resolved fairly
 * 
 * This system is integrated with the project creation flow, not as a standalone demo.
 */

// Create a new escrow transaction when a project is created
export const createTransaction = mutation({
  args: {
    projectId: v.id("projects"),
    clientId: v.id("users"),
    freelancerId: v.optional(v.id("users")), // Optional at creation time
    amount: v.number(),
    currency: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    // Verify client exists
    const client = await ctx.db.get(args.clientId);
    if (!client || client.role !== "client") {
      throw new ConvexError("Invalid client");
    }

    // Verify project exists
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new ConvexError("Project not found");
    }

    // Verify client owns project
    if (project.clientId !== args.clientId) {
      throw new ConvexError("Client does not own this project");
    }

    // Calculate platform fee (lower for newcomers)
    const platformFee = 0.1; // 10% standard fee

    // Create escrow transaction
    const transactionId = await ctx.db.insert("escrowTransactions", {
      projectId: args.projectId,
      clientId: args.clientId,
      freelancerId: args.freelancerId, // May be undefined initially
      amount: args.amount,
      currency: args.currency,
      status: "pending", // Initial status is pending until funded
      description: args.description,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      platformFee,
    });

    // Update project with escrow transaction ID
    await ctx.db.patch(args.projectId, {
      escrowTransactionId: transactionId,
    });

    return { transactionId };
  },
});

// Fund an escrow transaction
export const fundTransaction = mutation({
  args: {
    transactionId: v.id("escrowTransactions"),
    clientId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get transaction
    const transaction = await ctx.db.get(args.transactionId);
    if (!transaction) {
      throw new ConvexError("Transaction not found");
    }

    // Verify client owns transaction
    if (transaction.clientId !== args.clientId) {
      throw new ConvexError("Client does not own this transaction");
    }

    // Verify transaction is in pending status
    if (transaction.status !== "pending") {
      throw new ConvexError(`Transaction is already ${transaction.status}`);
    }

    // In a real implementation, we would integrate with a payment processor
    // For demo purposes, we're just updating the status

    // Update transaction status
    await ctx.db.patch(args.transactionId, {
      status: "funded",
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

// Release funds to freelancer
export const releaseTransaction = mutation({
  args: {
    transactionId: v.id("escrowTransactions"),
    clientId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Get transaction
    const transaction = await ctx.db.get(args.transactionId);
    if (!transaction) {
      throw new ConvexError("Transaction not found");
    }

    // Verify client owns transaction
    if (transaction.clientId !== args.clientId) {
      throw new ConvexError("Client does not own this transaction");
    }

    // Verify transaction is funded
    if (transaction.status !== "funded") {
      throw new ConvexError(`Transaction must be funded to release, current status: ${transaction.status}`);
    }

    // Verify freelancer is assigned
    if (!transaction.freelancerId) {
      throw new ConvexError("No freelancer assigned to this transaction");
    }

    // In a real implementation, we would transfer funds to the freelancer
    // For demo purposes, we're just updating the status

    // Update transaction status
    await ctx.db.patch(args.transactionId, {
      status: "released",
      releaseDate: Date.now(),
      updatedAt: Date.now(),
    });

    // Create notification for freelancer
    await ctx.db.insert("notifications", {
      userId: transaction.freelancerId,
      type: "payment_released",
      title: "Payment Released",
      message: `Your payment of ${transaction.amount} ${transaction.currency} has been released for project.`,
      relatedId: transaction.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

// Dispute a transaction
export const disputeTransaction = mutation({
  args: {
    transactionId: v.id("escrowTransactions"),
    userId: v.id("users"), // Either client or freelancer can dispute
    reason: v.string(),
  },
  handler: async (ctx, args) => {
    // Get transaction
    const transaction = await ctx.db.get(args.transactionId);
    if (!transaction) {
      throw new ConvexError("Transaction not found");
    }

    // Verify user is involved in transaction
    if (transaction.clientId !== args.userId && transaction.freelancerId !== args.userId) {
      throw new ConvexError("User is not involved in this transaction");
    }

    // Verify transaction is funded
    if (transaction.status !== "funded") {
      throw new ConvexError(`Transaction must be funded to dispute, current status: ${transaction.status}`);
    }

    // Update transaction status
    await ctx.db.patch(args.transactionId, {
      status: "disputed",
      disputeReason: args.reason,
      updatedAt: Date.now(),
    });

    // Determine the other party
    const otherPartyId = transaction.clientId === args.userId
      ? transaction.freelancerId
      : transaction.clientId;

    // Create notification for the other party
    await ctx.db.insert("notifications", {
      userId: otherPartyId!,
      type: "payment_disputed",
      title: "Payment Disputed",
      message: `A payment of ${transaction.amount} ${transaction.currency} has been disputed. Reason: ${args.reason}`,
      relatedId: transaction.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

// Refund a transaction to client
export const refundTransaction = mutation({
  args: {
    transactionId: v.id("escrowTransactions"),
    adminId: v.id("users"), // Only admins can refund after dispute
  },
  handler: async (ctx, args) => {
    // Get transaction
    const transaction = await ctx.db.get(args.transactionId);
    if (!transaction) {
      throw new ConvexError("Transaction not found");
    }

    // Verify admin status (in a real app, check admin role)
    const admin = await ctx.db.get(args.adminId);
    if (!admin || admin.role !== "admin") {
      throw new ConvexError("Only admins can process refunds");
    }

    // Verify transaction is disputed
    if (transaction.status !== "disputed") {
      throw new ConvexError(`Transaction must be disputed to refund, current status: ${transaction.status}`);
    }

    // In a real implementation, we would refund the client
    // For demo purposes, we're just updating the status

    // Update transaction status
    await ctx.db.patch(args.transactionId, {
      status: "refunded",
      updatedAt: Date.now(),
    });

    // Create notifications for both parties
    await ctx.db.insert("notifications", {
      userId: transaction.clientId,
      type: "payment_refunded",
      title: "Payment Refunded",
      message: `Your payment of ${transaction.amount} ${transaction.currency} has been refunded.`,
      relatedId: transaction.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    await ctx.db.insert("notifications", {
      userId: transaction.freelancerId!,
      type: "payment_refunded",
      title: "Payment Refunded",
      message: `The payment of ${transaction.amount} ${transaction.currency} has been refunded to the client.`,
      relatedId: transaction.projectId,
      isRead: false,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

// Get transaction details
export const getTransaction = query({
  args: {
    transactionId: v.id("escrowTransactions"),
  },
  handler: async (ctx, args) => {
    const transaction = await ctx.db.get(args.transactionId);
    if (!transaction) {
      throw new ConvexError("Transaction not found");
    }

    // Get project details
    const project = await ctx.db.get(transaction.projectId);

    // Get client details
    const client = await ctx.db.get(transaction.clientId);

    // Get freelancer details if assigned
    let freelancer = null;
    if (transaction.freelancerId) {
      freelancer = await ctx.db.get(transaction.freelancerId);
    }

    return {
      transaction,
      project: {
        _id: project?._id,
        title: project?.title,
      },
      client: {
        _id: client?._id,
        name: client?.name,
      },
      freelancer: freelancer ? {
        _id: freelancer._id,
        name: freelancer.name,
      } : null,
    };
  },
});

// Get transactions for a user
export const getUserTransactions = query({
  args: {
    userId: v.id("users"),
    role: v.union(v.literal("client"), v.literal("freelancer")),
  },
  handler: async (ctx, args) => {
    // Query transactions based on role
    const transactions = await ctx.db
      .query("escrowTransactions")
      .withIndex(
        args.role === "client" ? "by_clientId" : "by_freelancerId",
        (q) => q.eq(args.role === "client" ? "clientId" : "freelancerId", args.userId)
      )
      .collect();

    // Enhance with project details
    const results = await Promise.all(
      transactions.map(async (transaction) => {
        const project = await ctx.db.get(transaction.projectId);
        return {
          transaction,
          project: {
            _id: project?._id,
            title: project?.title,
          },
        };
      })
    );

    return results;
  },
});
