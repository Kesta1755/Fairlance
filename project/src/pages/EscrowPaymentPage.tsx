import React from 'react';
import EscrowPayment from '../components/payments/EscrowPayment';

const EscrowPaymentPage: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Secure Payments</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our escrow system ensures fair, secure payments for both clients and freelancers.
          </p>
        </div>
        
        <EscrowPayment 
          clientId="client_12345"
          freelancerId="freelancer_67890"
          projectId="project_12345"
          projectTitle="E-commerce Website Development"
          amount={1500}
          currency="USD"
        />
      </div>
    </div>
  );
};

export default EscrowPaymentPage;
