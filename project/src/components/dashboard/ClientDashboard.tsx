import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Briefcase, Plus, Clock, CheckCircle, AlertCircle, DollarSign, Users, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import Loading from '../ui/Loading';

interface ClientDashboardProps {
  user: any;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'escrow' | 'profile'>('projects');
  
  // In a real implementation, we would fetch projects from the Convex backend
  // For now, we'll use mock data
  const projects = [
    {
      id: '1',
      title: 'Modern E-commerce Website Development',
      status: 'open',
      budget: { min: 1000, max: 2000, currency: 'USD' },
      proposalCount: 5,
      createdAt: new Date().getTime() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
      category: { name: 'Development', color: 'border-blue-600' }
    },
    {
      id: '2',
      title: 'Logo Design for Tech Startup',
      status: 'in_progress',
      budget: { min: 300, max: 500, currency: 'USD' },
      proposalCount: 8,
      createdAt: new Date().getTime() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
      category: { name: 'Design', color: 'border-purple-600' },
      freelancer: { name: 'Sarah Johnson' }
    },
    {
      id: '3',
      title: 'Content Writing for Blog Posts',
      status: 'completed',
      budget: { min: 200, max: 400, currency: 'USD' },
      proposalCount: 12,
      createdAt: new Date().getTime() - 14 * 24 * 60 * 60 * 1000, // 14 days ago
      category: { name: 'Writing', color: 'border-green-600' },
      freelancer: { name: 'Michael Brown' }
    }
  ];

  // Mock escrow transactions
  const transactions = [
    {
      id: '1',
      projectId: '2',
      projectTitle: 'Logo Design for Tech Startup',
      amount: 400,
      currency: 'USD',
      status: 'funded',
      freelancer: { name: 'Sarah Johnson' },
      createdAt: new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    },
    {
      id: '2',
      projectId: '3',
      projectTitle: 'Content Writing for Blog Posts',
      amount: 350,
      currency: 'USD',
      status: 'released',
      freelancer: { name: 'Michael Brown' },
      createdAt: new Date().getTime() - 14 * 24 * 60 * 60 * 1000
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge color="blue" icon={Clock}>Open</Badge>;
      case 'in_progress':
        return <Badge color="yellow" icon={Clock}>In Progress</Badge>;
      case 'completed':
        return <Badge color="green" icon={CheckCircle}>Completed</Badge>;
      case 'cancelled':
        return <Badge color="red" icon={AlertCircle}>Cancelled</Badge>;
      default:
        return <Badge color="gray">{status}</Badge>;
    }
  };

  const getEscrowStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge color="gray" icon={Clock}>Pending</Badge>;
      case 'funded':
        return <Badge color="blue" icon={DollarSign}>Funded</Badge>;
      case 'released':
        return <Badge color="green" icon={CheckCircle}>Released</Badge>;
      case 'disputed':
        return <Badge color="yellow" icon={AlertCircle}>Disputed</Badge>;
      case 'refunded':
        return <Badge color="red" icon={DollarSign}>Refunded</Badge>;
      default:
        return <Badge color="gray">{status}</Badge>;
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>
        <Button 
          variant="primary" 
          icon={Plus}
          as={Link}
          to="/projects/create"
        >
          Post a New Project
        </Button>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'projects'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Briefcase className="inline-block h-5 w-5 mr-2" />
            My Projects
          </button>
          <button
            onClick={() => setActiveTab('escrow')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'escrow'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <DollarSign className="inline-block h-5 w-5 mr-2" />
            Escrow Payments
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Users className="inline-block h-5 w-5 mr-2" />
            Profile
          </button>
        </nav>
      </div>

      {activeTab === 'projects' && (
        <div>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Your Projects</h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/projects/${project.id}`} className="hover:text-blue-600">
                        {project.title}
                      </Link>
                    </h3>
                    <div className="mt-1 flex items-center space-x-2">
                      {getStatusBadge(project.status)}
                      <span className="text-sm text-gray-500">
                        Posted on {formatDate(project.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      Budget: {project.budget.min}-{project.budget.max} {project.budget.currency}
                    </div>
                    <div className="text-sm text-gray-500">
                      {project.proposalCount} proposals
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 bg-${project.category.color.split('-')[1]}`}></span>
                    <span className="text-sm text-gray-600">{project.category.name}</span>
                  </div>
                  
                  <div>
                    {project.status === 'open' && (
                      <Link to={`/projects/${project.id}/proposals`} className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        View Proposals
                      </Link>
                    )}
                    {project.status === 'in_progress' && (
                      <div className="text-sm text-gray-600">
                        Working with: {project.freelancer?.name}
                      </div>
                    )}
                    {project.status === 'completed' && (
                      <div className="text-sm text-gray-600">
                        Completed by: {project.freelancer?.name}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'escrow' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Escrow Payments</h2>
            <p className="text-gray-600">Manage your secure payments to freelancers</p>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/projects/${transaction.projectId}`} className="hover:text-blue-600">
                        {transaction.projectTitle}
                      </Link>
                    </h3>
                    <div className="mt-1 flex items-center space-x-2">
                      {getEscrowStatusBadge(transaction.status)}
                      <span className="text-sm text-gray-500">
                        Created on {formatDate(transaction.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-gray-900">
                      {transaction.amount} {transaction.currency}
                    </div>
                    <div className="text-sm text-gray-500">
                      Freelancer: {transaction.freelancer.name}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  {transaction.status === 'funded' && (
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={CheckCircle}
                      as={Link}
                      to={`/escrow/${transaction.id}/release`}
                    >
                      Release Payment
                    </Button>
                  )}
                  {transaction.status === 'pending' && (
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={DollarSign}
                      as={Link}
                      to={`/escrow/${transaction.id}/fund`}
                    >
                      Fund Escrow
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'profile' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Profile</h2>
            <p className="text-gray-600">Manage your client profile and account settings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell freelancers about yourself or your company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button variant="primary">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <Button variant="secondary" size="sm" fullWidth>
                      Change Password
                    </Button>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notifications
                    </label>
                    <Button variant="secondary" size="sm" fullWidth>
                      Manage Notifications
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add a payment method to fund your escrow transactions
                </p>
                <Button variant="secondary" size="sm" icon={Plus}>
                  Add Payment Method
                </Button>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
