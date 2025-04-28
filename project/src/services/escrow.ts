import { EscrowTransaction, PaymentDetails } from '../types';

/**
 * EscrowService - Handles secure payment transactions between clients and freelancers
 * 
 * The escrow system ensures fair payment handling by:
 * 1. Holding client funds securely until work is completed
 * 2. Releasing funds only when both parties agree
 * 3. Providing a dispute resolution process
 * 4. Ensuring transparency throughout the process
 */
export class EscrowService {
  private transactions: Map<string, EscrowTransaction> = new Map();
  
  /**
   * Creates a new escrow transaction between a client and freelancer
   */
  async createTransaction(
    clientId: string, 
    freelancerId: string, 
    projectId: string, 
    payment: PaymentDetails
  ): Promise<EscrowTransaction> {
    // Generate a unique transaction ID
    const id = `txn_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Create the transaction object
    const transaction: EscrowTransaction = {
      id,
      clientId,
      freelancerId,
      projectId,
      payment,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Store the transaction
    this.transactions.set(id, transaction);
    
    // In a real implementation, this would make an API call to a secure payment processor
    console.log(`Escrow transaction created: ${id}`);
    
    return transaction;
  }
  
  /**
   * Client funds the escrow transaction
   */
  async fundTransaction(transactionId: string): Promise<EscrowTransaction> {
    const transaction = this.getTransactionById(transactionId);
    
    if (!transaction) {
      throw new Error(`Transaction not found: ${transactionId}`);
    }
    
    if (transaction.status !== 'pending') {
      throw new Error(`Cannot fund transaction in ${transaction.status} status`);
    }
    
    // Update transaction status
    transaction.status = 'funded';
    transaction.updatedAt = new Date();
    
    // Store updated transaction
    this.transactions.set(transactionId, transaction);
    
    // In a real implementation, this would make an API call to process the payment
    console.log(`Escrow transaction funded: ${transactionId}`);
    
    return transaction;
  }
  
  /**
   * Release funds to the freelancer after work is completed and approved
   */
  async releasePayment(transactionId: string): Promise<EscrowTransaction> {
    const transaction = this.getTransactionById(transactionId);
    
    if (!transaction) {
      throw new Error(`Transaction not found: ${transactionId}`);
    }
    
    if (transaction.status !== 'funded') {
      throw new Error(`Cannot release payment for transaction in ${transaction.status} status`);
    }
    
    // Update transaction status
    transaction.status = 'released';
    transaction.updatedAt = new Date();
    
    // Store updated transaction
    this.transactions.set(transactionId, transaction);
    
    // In a real implementation, this would make an API call to release the funds
    console.log(`Payment released to freelancer: ${transactionId}`);
    
    return transaction;
  }
  
  /**
   * File a dispute for the transaction
   */
  async disputeTransaction(transactionId: string, reason: string): Promise<EscrowTransaction> {
    const transaction = this.getTransactionById(transactionId);
    
    if (!transaction) {
      throw new Error(`Transaction not found: ${transactionId}`);
    }
    
    if (transaction.status !== 'funded') {
      throw new Error(`Cannot dispute transaction in ${transaction.status} status`);
    }
    
    // Update transaction status
    transaction.status = 'disputed';
    transaction.updatedAt = new Date();
    
    // Store updated transaction with dispute reason
    this.transactions.set(transactionId, {
      ...transaction,
      disputeReason: reason
    } as EscrowTransaction & { disputeReason: string });
    
    // In a real implementation, this would notify admins and both parties
    console.log(`Transaction disputed: ${transactionId}, Reason: ${reason}`);
    
    return transaction;
  }
  
  /**
   * Refund payment to the client
   */
  async refundPayment(transactionId: string): Promise<EscrowTransaction> {
    const transaction = this.getTransactionById(transactionId);
    
    if (!transaction) {
      throw new Error(`Transaction not found: ${transactionId}`);
    }
    
    if (transaction.status !== 'funded' && transaction.status !== 'disputed') {
      throw new Error(`Cannot refund transaction in ${transaction.status} status`);
    }
    
    // Update transaction status
    transaction.status = 'refunded';
    transaction.updatedAt = new Date();
    
    // Store updated transaction
    this.transactions.set(transactionId, transaction);
    
    // In a real implementation, this would process the refund
    console.log(`Payment refunded to client: ${transactionId}`);
    
    return transaction;
  }
  
  /**
   * Get transaction by ID
   */
  getTransactionById(transactionId: string): EscrowTransaction | undefined {
    return this.transactions.get(transactionId);
  }
  
  /**
   * Get all transactions for a client
   */
  getClientTransactions(clientId: string): EscrowTransaction[] {
    return Array.from(this.transactions.values())
      .filter(transaction => transaction.clientId === clientId);
  }
  
  /**
   * Get all transactions for a freelancer
   */
  getFreelancerTransactions(freelancerId: string): EscrowTransaction[] {
    return Array.from(this.transactions.values())
      .filter(transaction => transaction.freelancerId === freelancerId);
  }
}

// Export a singleton instance
export const escrowService = new EscrowService();
