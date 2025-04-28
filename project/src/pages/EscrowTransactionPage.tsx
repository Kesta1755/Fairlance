import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { useQuery, useMutation } from 'convex/react';
// import { api } from '../convex/_generated/api';
import { DollarSign, Shield, Clock, CheckCircle, AlertCircle, ArrowRight, Lock, Unlock, FileText, CreditCard, User, X } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/ui/Loading';

const EscrowTransactionPage: React.FC = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const { user, isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState<'fund' | 'release' | 'dispute' | null>(null);
  const [disputeReason, setDisputeReason] = useState('');

  // Mock transaction data (in a real app, this would come from the Convex backend)
  const transaction = {
    id: transactionId,
    projectId: '123',
    projectTitle: 'Modern E-commerce Website Development',
    clientId: 'client123',
    client: {
      name: 'TechSolutions Inc.',
    },
    freelancerId: 'freelancer456',
    freelancer: {
      name: 'Jane Smith',
    },
    amount: 3000,
    currency: 'USD',
    status: 'funded', // pending, funded, released, disputed, refunded, cancelled
    description: 'Payment for e-commerce website development project',
    createdAt: new Date().getTime() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
    updatedAt: new Date().getTime() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
    platformFee: 0.1, // 10%
  };

  // Calculate fees and amounts
  const platformFeeAmount = transaction.amount * transaction.platformFee;
  const freelancerAmount = transaction.amount - platformFeeAmount;

  const handleAction = (action: 'fund' | 'release' | 'dispute') => {
    setConfirmationAction(action);
    setShowConfirmation(true);
  };

  const handleConfirmAction = async () => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // In a real implementation, we would call the appropriate Convex mutation
      // based on the action (fund, release, dispute)
      
      // Mock successful action
      setTimeout(() => {
        if (confirmationAction === 'fund') {
          setSuccess('Escrow has been successfully funded!');
        } else if (confirmationAction === 'release') {
          setSuccess('Payment has been successfully released to the freelancer!');
        } else if (confirmationAction === 'dispute') {
          if (!disputeReason) {
            throw new Error('Please provide a reason for the dispute');
          }
          setSuccess('Dispute has been successfully filed. Our team will review it shortly.');
        }
        
        setIsSubmitting(false);
        setShowConfirmation(false);
        setConfirmationAction(null);
        setDisputeReason('');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge color="gray" icon={Clock}>Pending</Badge>;
      case 'funded':
        return <Badge color="blue" icon={Lock}>Funded</Badge>;
      case 'released':
        return <Badge color="green" icon={CheckCircle}>Released</Badge>;
      case 'disputed':
        return <Badge color="red" icon={AlertCircle}>Disputed</Badge>;
      case 'refunded':
        return <Badge color="red" icon={ArrowRight}>Refunded</Badge>;
      case 'cancelled':
        return <Badge color="red" icon={X}>Cancelled</Badge>;
      default:
        return <Badge color="gray">{status}</Badge>;
    }
  };

  if (!transaction) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50 pt-24">
          <Loading message="Loading transaction details..." />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Escrow Transaction</h1>
              {getStatusBadge(transaction.status)}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Link to={`/projects/${transaction.projectId}`} className="text-blue-600 hover:text-blue-500">
                {transaction.projectTitle}
              </Link>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              Created on {formatDate(transaction.createdAt)}
            </div>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-md">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Escrow Protection
                </h2>
                
                <p className="text-gray-600 mb-4">
                  Our escrow system protects both clients and freelancers by holding funds securely until work is completed and approved.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="text-md font-medium text-blue-800 mb-2">How It Works</h3>
                  <ol className="text-sm text-blue-700 space-y-2 pl-5 list-decimal">
                    <li><strong>Fund:</strong> Client deposits funds into the escrow account.</li>
                    <li><strong>Work:</strong> Freelancer completes the project with confidence.</li>
                    <li><strong>Approve:</strong> Client reviews and approves the completed work.</li>
                    <li><strong>Release:</strong> Funds are released to the freelancer.</li>
                  </ol>
                </div>
                
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Transaction Status</h3>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-between">
                      <div className={`flex flex-col items-center ${transaction.status !== 'pending' ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${transaction.status !== 'pending' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          <DollarSign className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-xs font-medium">Funded</span>
                      </div>
                      
                      <div className={`flex flex-col items-center ${transaction.status === 'released' || transaction.status === 'disputed' || transaction.status === 'refunded' ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${transaction.status === 'released' || transaction.status === 'disputed' || transaction.status === 'refunded' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          <FileText className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-xs font-medium">Reviewed</span>
                      </div>
                      
                      <div className={`flex flex-col items-center ${transaction.status === 'released' ? 'text-green-600' : transaction.status === 'disputed' ? 'text-yellow-600' : transaction.status === 'refunded' ? 'text-red-600' : 'text-gray-400'}`}>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${transaction.status === 'released' ? 'bg-green-100' : transaction.status === 'disputed' ? 'bg-yellow-100' : transaction.status === 'refunded' ? 'bg-red-100' : 'bg-gray-100'}`}>
                          {transaction.status === 'released' ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : transaction.status === 'disputed' ? (
                            <AlertCircle className="h-5 w-5" />
                          ) : transaction.status === 'refunded' ? (
                            <ArrowRight className="h-5 w-5" />
                          ) : (
                            <Unlock className="h-5 w-5" />
                          )}
                        </div>
                        <span className="mt-2 text-xs font-medium">
                          {transaction.status === 'released' ? 'Released' : 
                           transaction.status === 'disputed' ? 'Disputed' : 
                           transaction.status === 'refunded' ? 'Refunded' : 'Released'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                  Payment Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Project Amount</span>
                    <span className="text-gray-900 font-medium">{transaction.amount.toFixed(2)} {transaction.currency}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Platform Fee ({(transaction.platformFee * 100).toFixed(0)}%)</span>
                    <span className="text-gray-900 font-medium">-{platformFeeAmount.toFixed(2)} {transaction.currency}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 text-lg">
                    <span className="font-medium text-gray-900">Freelancer Receives</span>
                    <span className="font-bold text-green-600">{freelancerAmount.toFixed(2)} {transaction.currency}</span>
                  </div>
                </div>
              </Card>

              {isAuthenticated && (
                <Card>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Transaction Actions</h2>
                  
                  <div className="space-y-4">
                    {user?.role === 'client' && transaction.status === 'pending' && (
                      <div>
                        <p className="text-gray-600 mb-3">
                          Fund the escrow to start the project. This will secure the payment for the freelancer.
                        </p>
                        <Button
                          variant="primary"
                          icon={CreditCard}
                          onClick={() => handleAction('fund')}
                        >
                          Fund Escrow
                        </Button>
                      </div>
                    )}
                    
                    {user?.role === 'client' && transaction.status === 'funded' && (
                      <div>
                        <p className="text-gray-600 mb-3">
                          Once you've reviewed and approved the work, release the payment to the freelancer.
                        </p>
                        <div className="flex space-x-4">
                          <Button
                            variant="primary"
                            icon={Unlock}
                            onClick={() => handleAction('release')}
                          >
                            Release Payment
                          </Button>
                          <Button
                            variant="secondary"
                            icon={AlertCircle}
                            onClick={() => handleAction('dispute')}
                          >
                            Dispute
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {user?.role === 'freelancer' && transaction.status === 'funded' && (
                      <div>
                        <p className="text-gray-600 mb-3">
                          The client has funded the escrow. Complete the work to receive payment.
                        </p>
                        <div className="flex space-x-4">
                          <Button
                            variant="secondary"
                            icon={AlertCircle}
                            onClick={() => handleAction('dispute')}
                          >
                            Report Issue
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {transaction.status === 'released' && (
                      <div className="bg-green-50 p-4 rounded-md">
                        <p className="text-green-700">
                          This transaction has been completed. The payment has been released to the freelancer.
                        </p>
                      </div>
                    )}
                    
                    {transaction.status === 'disputed' && (
                      <div className="bg-yellow-50 p-4 rounded-md">
                        <p className="text-yellow-700">
                          This transaction is currently under dispute. Our team will review it and contact you soon.
                        </p>
                      </div>
                    )}
                    
                    {transaction.status === 'refunded' && (
                      <div className="bg-red-50 p-4 rounded-md">
                        <p className="text-red-700">
                          This transaction has been refunded to the client.
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Transaction Summary</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Transaction ID</h3>
                    <p className="mt-1 text-sm text-gray-900">{transaction.id}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {transaction.amount.toFixed(2)} {transaction.currency}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                    <div className="mt-1">{getStatusBadge(transaction.status)}</div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Created</h3>
                    <p className="mt-1 text-gray-900">{formatDate(transaction.createdAt)}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                    <p className="mt-1 text-gray-900">{formatDate(transaction.updatedAt)}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Parties</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Client</h3>
                      <p className="text-gray-600">{transaction.client.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Freelancer</h3>
                      <p className="text-gray-600">{transaction.freelancer.name}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h2>
                
                <p className="text-gray-600 mb-4">
                  If you have any questions or issues with this transaction, our support team is here to help.
                </p>
                
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => window.location.href = '/support'}
                >
                  Contact Support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {confirmationAction === 'fund' && 'Fund Escrow'}
              {confirmationAction === 'release' && 'Release Payment'}
              {confirmationAction === 'dispute' && 'File a Dispute'}
            </h3>
            
            {confirmationAction === 'fund' && (
              <p className="text-gray-600 mb-4">
                You are about to fund the escrow account with {transaction.amount.toFixed(2)} {transaction.currency}. This amount will be held securely until you approve the completed work.
              </p>
            )}
            
            {confirmationAction === 'release' && (
              <p className="text-gray-600 mb-4">
                You are about to release {transaction.amount.toFixed(2)} {transaction.currency} to the freelancer. This action cannot be undone.
              </p>
            )}
            
            {confirmationAction === 'dispute' && (
              <>
                <p className="text-gray-600 mb-4">
                  You are about to file a dispute for this transaction. Please provide a reason for the dispute:
                </p>
                <textarea
                  value={disputeReason}
                  onChange={(e) => setDisputeReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4"
                  rows={4}
                  placeholder="Explain the reason for your dispute in detail..."
                  required
                ></textarea>
              </>
            )}
            
            <div className="flex justify-end space-x-4">
              <Button
                variant="secondary"
                onClick={() => {
                  setShowConfirmation(false);
                  setConfirmationAction(null);
                  setDisputeReason('');
                }}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleConfirmAction}
                disabled={isSubmitting || (confirmationAction === 'dispute' && !disputeReason)}
              >
                {isSubmitting ? 'Processing...' : 'Confirm'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EscrowTransactionPage;
