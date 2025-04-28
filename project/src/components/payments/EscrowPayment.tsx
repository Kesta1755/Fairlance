import React, { useState, useEffect } from 'react';
import { Shield, DollarSign, CheckCircle, AlertCircle, ArrowRight, Clock, CreditCard } from 'lucide-react';
import { Button, Card, Badge } from '../ui';
import { escrowService } from '../../services/escrow';
import { EscrowTransaction } from '../../types';

interface EscrowPaymentProps {
  clientId: string;
  freelancerId: string;
  projectId: string;
  projectTitle: string;
  amount: number;
  currency: string;
}

const EscrowPayment: React.FC<EscrowPaymentProps> = ({
  clientId,
  freelancerId,
  projectId,
  projectTitle,
  amount,
  currency
}) => {
  const [transaction, setTransaction] = useState<EscrowTransaction | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'client' | 'freelancer'>('client');

  // Toggle between client and freelancer view for demo purposes
  const toggleUserRole = () => {
    setUserRole(prev => prev === 'client' ? 'freelancer' : 'client');
  };

  // Create a new escrow transaction
  const createTransaction = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const newTransaction = await escrowService.createTransaction(
        clientId,
        freelancerId,
        projectId,
        {
          amount,
          currency,
          description: `Payment for project: ${projectTitle}`
        }
      );
      
      setTransaction(newTransaction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Fund the escrow transaction
  const fundTransaction = async () => {
    if (!transaction) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const updatedTransaction = await escrowService.fundTransaction(transaction.id);
      setTransaction(updatedTransaction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Release payment to freelancer
  const releasePayment = async () => {
    if (!transaction) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const updatedTransaction = await escrowService.releasePayment(transaction.id);
      setTransaction(updatedTransaction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Dispute the transaction
  const disputeTransaction = async () => {
    if (!transaction) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const updatedTransaction = await escrowService.disputeTransaction(
        transaction.id,
        'Work does not meet the agreed requirements'
      );
      setTransaction(updatedTransaction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge color="gray" icon={Clock}>Awaiting Funds</Badge>;
      case 'funded':
        return <Badge color="blue" icon={CreditCard}>Funded</Badge>;
      case 'released':
        return <Badge color="green" icon={CheckCircle}>Completed</Badge>;
      case 'disputed':
        return <Badge color="yellow" icon={AlertCircle}>Disputed</Badge>;
      case 'refunded':
        return <Badge color="red" icon={DollarSign}>Refunded</Badge>;
      default:
        return <Badge color="gray">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Secure Escrow Payment</h2>
        <Button 
          variant="outline" 
          onClick={toggleUserRole}
        >
          Switch to {userRole === 'client' ? 'Freelancer' : 'Client'} View
        </Button>
      </div>

      <Card className="mb-6">
        <div className="flex items-start mb-6">
          <Shield className="h-8 w-8 text-blue-600 mr-4" />
          <div>
            <h3 className="text-lg font-medium text-gray-900">Fair Payment Protection</h3>
            <p className="text-gray-600 mt-1">
              Our escrow system ensures that both clients and freelancers are protected throughout the payment process.
              Clients only pay when satisfied with the work, and freelancers are guaranteed payment for completed work.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-blue-50 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Client Deposits Funds</h4>
            </div>
            <div>
              <div className="bg-blue-50 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Work Completed & Reviewed</h4>
            </div>
            <div>
              <div className="bg-blue-50 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Funds Released to Freelancer</h4>
            </div>
          </div>
        </div>
      </Card>

      {transaction ? (
        <Card className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Transaction Details</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Transaction ID</p>
              <p className="font-medium text-gray-900">{transaction.id.substring(0, 12)}...</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <div className="mt-1">{getStatusBadge(transaction.status)}</div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Amount</p>
              <p className="font-medium text-gray-900">{transaction.payment.amount} {transaction.payment.currency}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Created</p>
              <p className="font-medium text-gray-900">{transaction.createdAt.toLocaleString()}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            {userRole === 'client' ? (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">Client Actions</h4>
                
                {transaction.status === 'pending' && (
                  <Button 
                    onClick={fundTransaction} 
                    disabled={loading}
                    icon={DollarSign}
                    className="w-full md:w-auto"
                  >
                    Fund Escrow
                  </Button>
                )}
                
                {transaction.status === 'funded' && (
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={releasePayment} 
                      disabled={loading}
                      icon={CheckCircle}
                    >
                      Release Payment
                    </Button>
                    <Button 
                      onClick={disputeTransaction} 
                      disabled={loading}
                      variant="outline"
                      icon={AlertCircle}
                    >
                      Dispute Transaction
                    </Button>
                  </div>
                )}
                
                {(transaction.status === 'released' || transaction.status === 'disputed' || transaction.status === 'refunded') && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600">
                      {transaction.status === 'released' 
                        ? 'Payment has been released to the freelancer. Thank you for your business!'
                        : transaction.status === 'disputed'
                        ? 'This transaction is currently under dispute. Our team will contact you soon.'
                        : 'This payment has been refunded to your account.'}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">Freelancer Status</h4>
                
                {transaction.status === 'pending' && (
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <p className="text-sm text-yellow-800">
                      Client has created the escrow but hasn't funded it yet. You'll be notified when funds are deposited.
                    </p>
                  </div>
                )}
                
                {transaction.status === 'funded' && (
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      Escrow has been funded! Complete the work and the client will release payment upon approval.
                    </p>
                  </div>
                )}
                
                {transaction.status === 'released' && (
                  <div className="bg-green-50 p-4 rounded-md">
                    <p className="text-sm text-green-800">
                      Payment has been released! Funds should appear in your account within 1-2 business days.
                    </p>
                  </div>
                )}
                
                {transaction.status === 'disputed' && (
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <p className="text-sm text-yellow-800">
                      This transaction is under dispute. Our team will contact you to resolve the issue.
                    </p>
                  </div>
                )}
                
                {transaction.status === 'refunded' && (
                  <div className="bg-red-50 p-4 rounded-md">
                    <p className="text-sm text-red-800">
                      This payment has been refunded to the client.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      ) : (
        <Card className="mb-6">
          <div className="text-center py-6">
            <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Start a Secure Transaction?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Create an escrow payment to ensure safe and fair exchange of work and compensation.
            </p>
            
            {error && (
              <div className="bg-red-50 text-red-800 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            {userRole === 'client' ? (
              <Button 
                onClick={createTransaction} 
                disabled={loading}
                size="lg"
                icon={Shield}
              >
                Create Escrow Transaction
              </Button>
            ) : (
              <div className="bg-gray-50 p-4 rounded-md inline-block">
                <p className="text-sm text-gray-600">
                  Waiting for client to create an escrow transaction.
                </p>
              </div>
            )}
          </div>
        </Card>
      )}

      <div className="bg-blue-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-blue-800 mb-2">About FairLance Escrow</h4>
        <p className="text-sm text-blue-700 mb-4">
          Our escrow system is designed to create trust and ensure fair treatment for both parties. 
          Client funds are securely held until work is completed and approved, providing protection 
          for everyone involved.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-blue-700">Funds are held securely by a trusted third party</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-blue-700">Fair dispute resolution if issues arise</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-blue-700">Freelancers are guaranteed payment for completed work</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-blue-700">Clients only pay when fully satisfied</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscrowPayment;
