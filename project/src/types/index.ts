import { ReactNode, ReactElement } from 'react';
import { LucideIcon } from 'lucide-react';

// Home component types
export interface CategoryCardProps {
  icon: ReactElement | LucideIcon;
  title: string;
  count: number;
  color: string;
}

export interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating?: number;
  experience?: string;
  featureBenefit?: string;
}

// Component Library types
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: LucideIcon;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  border?: boolean;
  shadow?: boolean;
}

export interface BadgeProps {
  children: ReactNode;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray';
  size?: 'sm' | 'md';
  icon?: LucideIcon;
  className?: string;
}

// Escrow payment system types
export interface PaymentDetails {
  amount: number;
  currency: string;
  description: string;
}

export interface EscrowTransaction {
  id: string;
  clientId: string;
  freelancerId: string;
  projectId: string;
  payment: PaymentDetails;
  status: 'pending' | 'funded' | 'released' | 'disputed' | 'refunded';
  createdAt: Date;
  updatedAt: Date;
}

// Placeholder for the future Escrow Service
export interface EscrowServiceProps {
  createTransaction: (clientId: string, freelancerId: string, projectId: string, payment: PaymentDetails) => Promise<EscrowTransaction>;
  fundTransaction: (transactionId: string) => Promise<EscrowTransaction>;
  releasePayment: (transactionId: string) => Promise<EscrowTransaction>;
  disputeTransaction: (transactionId: string, reason: string) => Promise<EscrowTransaction>;
  refundPayment: (transactionId: string) => Promise<EscrowTransaction>;
  getTransactionById: (transactionId: string) => Promise<EscrowTransaction>;
  getClientTransactions: (clientId: string) => Promise<EscrowTransaction[]>;
  getFreelancerTransactions: (freelancerId: string) => Promise<EscrowTransaction[]>;
}
