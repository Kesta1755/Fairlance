import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Briefcase, Plus, Clock, CheckCircle, AlertCircle, DollarSign, Users, Search, Star, Sparkles, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import Loading from '../ui/Loading';

interface FreelancerDashboardProps {
  user: any;
}

const FreelancerDashboard: React.FC<FreelancerDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'proposals' | 'escrow' | 'profile'>('projects');
  
  // Mock active projects
  const projects = [
    {
      id: '1',
      title: 'Logo Design for Tech Startup',
      status: 'in_progress',
      budget: { amount: 400, currency: 'USD' },
      client: { name: 'John Smith' },
      createdAt: new Date().getTime() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
      category: { name: 'Design', color: 'border-purple-600' },
      deadline: new Date().getTime() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
    },
    {
      id: '2',
      title: 'Content Writing for Blog Posts',
      status: 'completed',
      budget: { amount: 350, currency: 'USD' },
      client: { name: 'Emily Johnson' },
      createdAt: new Date().getTime() - 14 * 24 * 60 * 60 * 1000, // 14 days ago
      category: { name: 'Writing', color: 'border-green-600' },
      completedAt: new Date().getTime() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
    }
  ];

  // Mock proposals
  const proposals = [
    {
      id: '1',
      projectId: '3',
      projectTitle: 'Modern E-commerce Website Development',
      coverLetter: 'I have extensive experience building e-commerce websites with React and Node.js...',
      proposedBudget: { amount: 1500, currency: 'USD' },
      status: 'pending',
      createdAt: new Date().getTime() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
      client: { name: 'Robert Davis' },
      category: { name: 'Development', color: 'border-blue-600' }
    },
    {
      id: '2',
      projectId: '4',
      projectTitle: 'Mobile App UI Design',
      coverLetter: 'I specialize in creating clean, intuitive mobile app interfaces...',
      proposedBudget: { amount: 800, currency: 'USD' },
      status: 'rejected',
      createdAt: new Date().getTime() - 10 * 24 * 60 * 60 * 1000, // 10 days ago
      client: { name: 'Sarah Wilson' },
      category: { name: 'Design', color: 'border-purple-600' }
    }
  ];

  // Mock escrow transactions
  const transactions = [
    {
      id: '1',
      projectId: '1',
      projectTitle: 'Logo Design for Tech Startup',
      amount: 400,
      currency: 'USD',
      status: 'funded',
      client: { name: 'John Smith' },
      createdAt: new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    },
    {
      id: '2',
      projectId: '2',
      projectTitle: 'Content Writing for Blog Posts',
      amount: 350,
      currency: 'USD',
      status: 'released',
      client: { name: 'Emily Johnson' },
      createdAt: new Date().getTime() - 14 * 24 * 60 * 60 * 1000,
      releasedAt: new Date().getTime() - 2 * 24 * 60 * 60 * 1000
    }
  ];

  // Mock recommended projects
  const recommendedProjects = [
    {
      id: '5',
      title: 'Frontend Developer for SaaS Dashboard',
      budget: { min: 2000, max: 4000, currency: 'USD' },
      client: { name: 'Tech Innovations Inc.' },
      createdAt: new Date().getTime() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
      category: { name: 'Development', color: 'border-blue-600' },
      match: { score: 95, skillMatchPercentage: 95 }
    },
    {
      id: '6',
      title: 'WordPress Website Customization',
      budget: { min: 500, max: 1000, currency: 'USD' },
      client: { name: 'Local Business Solutions' },
      createdAt: new Date().getTime() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
      category: { name: 'Development', color: 'border-blue-600' },
      match: { score: 85, skillMatchPercentage: 85 }
    },
    {
      id: '7',
      title: 'UI/UX Design for Mobile App',
      budget: { min: 1000, max: 2000, currency: 'USD' },
      client: { name: 'StartupX' },
      createdAt: new Date().getTime() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
      category: { name: 'Design', color: 'border-purple-600' },
      match: { score: 80, skillMatchPercentage: 80 }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
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

  const getProposalStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge color="blue" icon={Clock}>Pending</Badge>;
      case 'accepted':
        return <Badge color="green" icon={CheckCircle}>Accepted</Badge>;
      case 'rejected':
        return <Badge color="red" icon={AlertCircle}>Rejected</Badge>;
      case 'withdrawn':
        return <Badge color="gray">Withdrawn</Badge>;
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
          <h1 className="text-2xl font-bold text-gray-900">Freelancer Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>
        <Button 
          variant="primary" 
          icon={Search}
          as={Link}
          to="/projects/find"
        >
          Find Projects
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
            Active Projects
          </button>
          <button
            onClick={() => setActiveTab('proposals')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'proposals'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Target className="inline-block h-5 w-5 mr-2" />
            My Proposals
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
            Payments
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
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Active Projects</h2>
            <p className="text-gray-600">Projects you're currently working on</p>
          </div>

          {projects.length > 0 ? (
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
                          Started on {formatDate(project.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium text-gray-900">
                        {project.budget.amount} {project.budget.currency}
                      </div>
                      <div className="text-sm text-gray-500">
                        Client: {project.client.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 bg-${project.category.color.split('-')[1]}`}></span>
                      <span className="text-sm text-gray-600">{project.category.name}</span>
                    </div>
                    
                    <div>
                      {project.status === 'in_progress' && (
                        <div className="flex space-x-2">
                          <span className="text-sm text-gray-600">
                            Deadline: {formatDate(project.deadline)}
                          </span>
                          <Button 
                            variant="primary" 
                            size="sm"
                            icon={CheckCircle}
                            as={Link}
                            to={`/projects/${project.id}/complete`}
                          >
                            Mark Complete
                          </Button>
                        </div>
                      )}
                      {project.status === 'completed' && (
                        <span className="text-sm text-gray-600">
                          Completed on {formatDate(project.completedAt)}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Projects</h3>
              <p className="text-gray-600 mb-4">You don't have any active projects at the moment.</p>
              <Button 
                variant="primary"
                icon={Search}
                as={Link}
                to="/projects/find"
              >
                Find Projects
              </Button>
            </Card>
          )}

          <div className="mt-8">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Recommended Projects</h2>
              <Link to="/projects/find" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recommendedProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/projects/${project.id}`} className="hover:text-blue-600">
                            {project.title}
                          </Link>
                        </h3>
                        <Badge color="purple" icon={Sparkles} className="ml-2">
                          {project.match.skillMatchPercentage}% Match
                        </Badge>
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        Posted on {formatDate(project.createdAt)} by {project.client.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        Budget: {project.budget.min}-{project.budget.max} {project.budget.currency}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 bg-${project.category.color.split('-')[1]}`}></span>
                      <span className="text-sm text-gray-600">{project.category.name}</span>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      size="sm"
                      as={Link}
                      to={`/projects/${project.id}/apply`}
                    >
                      Submit Proposal
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'proposals' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Proposals</h2>
            <p className="text-gray-600">Track the status of your project proposals</p>
          </div>

          {proposals.length > 0 ? (
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        <Link to={`/projects/${proposal.projectId}`} className="hover:text-blue-600">
                          {proposal.projectTitle}
                        </Link>
                      </h3>
                      <div className="mt-1 flex items-center space-x-2">
                        {getProposalStatusBadge(proposal.status)}
                        <span className="text-sm text-gray-500">
                          Submitted on {formatDate(proposal.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium text-gray-900">
                        {proposal.proposedBudget.amount} {proposal.proposedBudget.currency}
                      </div>
                      <div className="text-sm text-gray-500">
                        Client: {proposal.client.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 bg-${proposal.category.color.split('-')[1]}`}></span>
                      <span className="text-sm text-gray-600">{proposal.category.name}</span>
                    </div>
                    
                    <div>
                      {proposal.status === 'pending' && (
                        <Button 
                          variant="secondary" 
                          size="sm"
                          as={Link}
                          to={`/proposals/${proposal.id}/edit`}
                        >
                          Edit Proposal
                        </Button>
                      )}
                      {proposal.status === 'rejected' && (
                        <span className="text-sm text-gray-600">
                          This proposal was not selected
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Your Proposal</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {proposal.coverLetter}
                    </p>
                    {proposal.coverLetter.length > 150 && (
                      <button className="text-xs text-blue-600 hover:text-blue-500 mt-1">
                        Read More
                      </button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Proposals Yet</h3>
              <p className="text-gray-600 mb-4">You haven't submitted any proposals yet.</p>
              <Button 
                variant="primary"
                icon={Search}
                as={Link}
                to="/projects/find"
              >
                Find Projects
              </Button>
            </Card>
          )}
        </div>
      )}

      {activeTab === 'escrow' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Payment History</h2>
            <p className="text-gray-600">Track your secure payments through our escrow system</p>
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
                      Client: {transaction.client.name}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  {transaction.status === 'released' && (
                    <span className="text-sm text-gray-600">
                      Released on {formatDate(transaction.releasedAt)}
                    </span>
                  )}
                  
                  {transaction.status === 'funded' && (
                    <Button 
                      variant="secondary" 
                      size="sm"
                      icon={AlertCircle}
                      as={Link}
                      to={`/escrow/${transaction.id}/dispute`}
                    >
                      Report Issue
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
            <p className="text-gray-600">Manage your freelancer profile and skills</p>
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
                    Professional Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Developer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hourly Rate (USD)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell clients about yourself, your experience, and your expertise"
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
                <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge color="blue">React</Badge>
                    <Badge color="blue">TypeScript</Badge>
                    <Badge color="blue">Node.js</Badge>
                    <Badge color="blue">UI/UX Design</Badge>
                    <Badge color="blue">Tailwind CSS</Badge>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Add Skill
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="e.g. JavaScript"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add links to your best work to showcase your skills
                </p>
                <Button variant="secondary" size="sm" icon={Plus}>
                  Add Portfolio Item
                </Button>
              </Card>
              
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelancerDashboard;
