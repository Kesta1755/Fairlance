import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { useQuery, useMutation } from 'convex/react';
// import { api } from '../convex/_generated/api';
import { Calendar, Shield, Users, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/ui/Loading';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { user, isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [proposedAmount, setProposedAmount] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [timeframeUnit, setTimeframeUnit] = useState<'days' | 'weeks' | 'months'>('days');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Mock project data (in a real app, this would come from the Convex backend)
  const project = {
    id: projectId,
    title: 'Modern E-commerce Website Development',
    description: `We're looking for an experienced developer to build a modern e-commerce website for our boutique clothing brand. The website should have a clean, minimalist design with excellent mobile responsiveness.

Requirements:
- React.js frontend with a modern UI library (preferably Tailwind CSS)
- Node.js backend with Express
- MongoDB for product and user data
- Stripe integration for payments
- User authentication and profiles
- Product catalog with filtering and search
- Shopping cart and checkout flow
- Order management for administrators
- Responsive design for all devices

The ideal candidate will have experience building e-commerce platforms and can provide examples of previous work.`,
    client: {
      id: '123',
      name: 'TechSolutions Inc.',
      joinedDate: new Date().getTime() - 365 * 24 * 60 * 60 * 1000, // 1 year ago
      completedProjects: 15,
    },
    budget: {
      min: 2000,
      max: 4000,
      currency: 'USD',
    },
    category: {
      id: '1',
      name: 'Development',
      color: 'border-blue-600',
    },
    requiredSkills: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    status: 'open',
    createdAt: new Date().getTime() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    deadline: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    proposalCount: 8,
    fairnessSettings: {
      skillsFirstMatching: true,
      blindProposalReview: true,
      newcomerBoost: true,
      fairPaymentPromise: true,
    },
  };

  // Check if the user has already submitted a proposal
  const hasSubmittedProposal = false; // This would be checked via the API in a real app

  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // Validate form
      if (!coverLetter || !proposedAmount || !timeframe) {
        throw new Error('Please fill in all required fields');
      }

      if (parseInt(proposedAmount) < project.budget.min || parseInt(proposedAmount) > project.budget.max) {
        throw new Error(`Please propose an amount between ${project.budget.min} and ${project.budget.max} ${project.budget.currency}`);
      }

      // In a real implementation, we would:
      // 1. Submit the proposal to the Convex backend
      // 2. Show a success message
      // 3. Hide the form

      // Mock successful submission
      setTimeout(() => {
        setSuccess('Your proposal has been submitted successfully!');
        setIsSubmitting(false);
        setShowProposalForm(false);
        
        // Reset form
        setCoverLetter('');
        setProposedAmount('');
        setTimeframe('');
        setTimeframeUnit('days');
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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50 pt-24">
          <Loading message="Loading project details..." />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
              {getStatusBadge(project.status)}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              Posted on {formatDate(project.createdAt)}
              <span className="mx-2">•</span>
              <Users className="h-4 w-4 mr-1" />
              {project.proposalCount} proposals
            </div>
          </div>

          {success && (
            <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-md">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Project Description</h2>
                <div className="prose prose-blue max-w-none">
                  {project.description.split('\n\n').map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph.startsWith('- ') ? (
                        <ul className="list-disc pl-5 mb-4">
                          {paragraph.split('\n').map((item, i) => (
                            <li key={i}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-4">{paragraph}</p>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {project.requiredSkills.map((skill) => (
                    <Badge key={skill} color="blue">{skill}</Badge>
                  ))}
                </div>
              </Card>

              {isAuthenticated && user?.role === 'freelancer' && project.status === 'open' && (
                <Card>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Submit a Proposal</h2>
                  
                  {hasSubmittedProposal ? (
                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="text-blue-700">You have already submitted a proposal for this project.</p>
                      <Link to="/dashboard" className="text-blue-600 hover:text-blue-500 font-medium mt-2 inline-block">
                        View your proposals
                      </Link>
                    </div>
                  ) : showProposalForm ? (
                    <form onSubmit={handleSubmitProposal}>
                      {error && (
                        <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">
                          {error}
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                            Cover Letter <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="coverLetter"
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Introduce yourself and explain why you're a good fit for this project. Highlight relevant experience and skills."
                            required
                          ></textarea>
                        </div>
                        
                        <div>
                          <label htmlFor="proposedAmount" className="block text-sm font-medium text-gray-700 mb-1">
                            Proposed Amount ({project.budget.currency}) <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500">$</span>
                            </div>
                            <input
                              id="proposedAmount"
                              type="number"
                              min={project.budget.min}
                              max={project.budget.max}
                              value={proposedAmount}
                              onChange={(e) => setProposedAmount(e.target.value)}
                              className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              placeholder={`${project.budget.min}-${project.budget.max}`}
                              required
                            />
                          </div>
                          <p className="mt-1 text-xs text-gray-500">
                            Client's budget: {project.budget.min}-{project.budget.max} {project.budget.currency}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                              Estimated Timeframe <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="timeframe"
                              type="number"
                              min="1"
                              value={timeframe}
                              onChange={(e) => setTimeframe(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g. 2"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="timeframeUnit" className="block text-sm font-medium text-gray-700 mb-1">
                              Unit
                            </label>
                            <select
                              id="timeframeUnit"
                              value={timeframeUnit}
                              onChange={(e) => setTimeframeUnit(e.target.value as 'days' | 'weeks' | 'months')}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="days">Days</option>
                              <option value="weeks">Weeks</option>
                              <option value="months">Months</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-4 pt-2">
                          <Button
                            type="button"
                            variant="secondary"
                            onClick={() => setShowProposalForm(false)}
                            disabled={isSubmitting}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
                          </Button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Interested in this project?</h3>
                      <p className="text-gray-600 mb-4">
                        Submit a proposal to let the client know you're the perfect fit for this job.
                      </p>
                      <Button
                        variant="primary"
                        icon={Send}
                        onClick={() => setShowProposalForm(true)}
                      >
                        Submit a Proposal
                      </Button>
                    </div>
                  )}
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Project Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Budget</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {project.budget.min}-{project.budget.max} {project.budget.currency}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Category</h3>
                    <p className="mt-1 flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 bg-${project.category.color.split('-')[1]}`}></span>
                      <span className="text-gray-900">{project.category.name}</span>
                    </p>
                  </div>
                  
                  {project.deadline && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Deadline</h3>
                      <p className="mt-1 text-gray-900">{formatDate(project.deadline)}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Posted</h3>
                    <p className="mt-1 text-gray-900">{formatDate(project.createdAt)}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Proposals</h3>
                    <p className="mt-1 text-gray-900">{project.proposalCount} received</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">About the Client</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Client</h3>
                    <p className="mt-1 text-gray-900">{project.client.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                    <p className="mt-1 text-gray-900">{formatDate(project.client.joinedDate)}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Projects Posted</h3>
                    <p className="mt-1 text-gray-900">{project.client.completedProjects}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Fair Opportunity Features
                </h2>
                
                <div className="space-y-3">
                  {project.fairnessSettings.skillsFirstMatching && (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Skills-First Matching</p>
                        <p className="text-xs text-gray-500">Prioritizes skill match over ratings</p>
                      </div>
                    </div>
                  )}
                  
                  {project.fairnessSettings.blindProposalReview && (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Blind Proposal Review</p>
                        <p className="text-xs text-gray-500">Hides freelancer identities initially</p>
                      </div>
                    </div>
                  )}
                  
                  {project.fairnessSettings.newcomerBoost && (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Newcomer Boost</p>
                        <p className="text-xs text-gray-500">Gives visibility to qualified newcomers</p>
                      </div>
                    </div>
                  )}
                  
                  {project.fairnessSettings.fairPaymentPromise && (
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Fair Payment Promise</p>
                        <p className="text-xs text-gray-500">Commits to fair compensation</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {isAuthenticated && user?.role === 'freelancer' && project.status === 'open' && !showProposalForm && !hasSubmittedProposal && (
                <div className="sticky top-6">
                  <Button
                    variant="primary"
                    icon={Send}
                    fullWidth
                    onClick={() => setShowProposalForm(true)}
                  >
                    Submit a Proposal
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
