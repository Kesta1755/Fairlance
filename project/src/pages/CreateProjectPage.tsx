import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { Briefcase, DollarSign, Calendar, Tag, Shield, Users, Brain, Sparkles, Info, Plus, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/ui/Loading';

const CreateProjectPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budgetMin, setBudgetMin] = useState('');
  const [budgetMax, setBudgetMax] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [deadline, setDeadline] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [fairnessSettings, setFairnessSettings] = useState({
    skillsFirstMatching: true,
    blindProposalReview: true,
    newcomerBoost: true,
    fairPaymentPromise: true,
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock categories for now
  const categories = [
    { id: '1', name: 'Development', iconName: 'Code', color: 'border-blue-600' },
    { id: '2', name: 'Design', iconName: 'Paintbrush', color: 'border-purple-600' },
    { id: '3', name: 'Writing', iconName: 'Pencil', color: 'border-green-600' },
    { id: '4', name: 'Marketing', iconName: 'LineChart', color: 'border-red-600' },
    { id: '5', name: 'Photography', iconName: 'Camera', color: 'border-pink-600' },
    { id: '6', name: 'Social Media', iconName: 'Megaphone', color: 'border-yellow-600' },
    { id: '7', name: 'Translation', iconName: 'Globe', color: 'border-indigo-600' },
    { id: '8', name: 'Data Science', iconName: 'Server', color: 'border-teal-600' },
  ];

  // Mock popular skills
  const popularSkills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript', 'UI/UX Design',
    'Graphic Design', 'Content Writing', 'SEO', 'Data Analysis',
    'Python', 'Mobile Development', 'WordPress'
  ];

  // Redirect if not authenticated or not a client
  useEffect(() => {
    if (isAuthenticated && user?.role !== 'client') {
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleAddPopularSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments([...attachments, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...attachments];
    newFiles.splice(index, 1);
    setAttachments(newFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate form
      if (!title || !description || !category || !budgetMin || !budgetMax) {
        throw new Error('Please fill in all required fields');
      }

      if (parseInt(budgetMin) > parseInt(budgetMax)) {
        throw new Error('Minimum budget cannot be greater than maximum budget');
      }

      if (skills.length === 0) {
        throw new Error('Please add at least one required skill');
      }

      // In a real implementation, we would:
      // 1. Upload attachments to storage
      // 2. Create the project in the database
      // 3. Create an escrow transaction for the project
      // 4. Redirect to the project page

      // Mock successful submission
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsSubmitting(false);
    }
  };

  // AI suggestions for project description
  const getAISuggestions = () => {
    const suggestions = [
      "Consider specifying the exact deliverables you expect from this project.",
      "Mention your preferred communication style and frequency.",
      "Include any specific technologies or methodologies that should be used.",
      "Specify if you have any examples or references that can guide the freelancer."
    ];

    return (
      <div className="mt-2 bg-blue-50 p-3 rounded-md">
        <h4 className="text-sm font-medium text-blue-800 flex items-center">
          <Brain className="h-4 w-4 mr-1" />
          AI Suggestions to Improve Your Project
        </h4>
        <ul className="mt-2 text-xs text-blue-700 space-y-1">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <Sparkles className="h-3 w-3 text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
              <span>{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Fair pricing guidance
  const getFairPricingGuidance = () => {
    let guidance = '';
    
    if (budgetMin && budgetMax) {
      const min = parseInt(budgetMin);
      const max = parseInt(budgetMax);
      const avg = (min + max) / 2;
      
      if (avg < 100) {
        guidance = "This budget is on the lower end. Consider if it's fair compensation for the work required.";
      } else if (avg < 500) {
        guidance = "This budget is reasonable for smaller tasks or projects.";
      } else if (avg < 1000) {
        guidance = "This budget is fair for medium-sized projects requiring specialized skills.";
      } else {
        guidance = "This budget is competitive for larger or complex projects.";
      }
    }
    
    return guidance ? (
      <div className="mt-2 text-sm text-blue-700 flex items-start">
        <Info className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
        <span>{guidance}</span>
      </div>
    ) : null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Post a New Project</h1>
            <p className="text-gray-600">
              Create a project with fair opportunity settings to find the perfect freelancer
            </p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                  Project Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. Modern E-commerce Website Development"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your project in detail. What are the goals, requirements, and deliverables?"
                      required
                    ></textarea>
                    
                    {description.length > 50 && getAISuggestions()}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Required Skills <span className="text-red-500">*</span>
                    </label>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skills.map((skill) => (
                        <Badge key={skill} color="blue" className="flex items-center">
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-1 text-blue-700 hover:text-blue-900"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. JavaScript"
                      />
                      <button
                        type="button"
                        onClick={handleAddSkill}
                        className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Popular skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {popularSkills.map((skill) => (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => handleAddPopularSkill(skill)}
                            className={`text-xs px-2 py-1 rounded-full ${
                              skills.includes(skill)
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                  Budget & Timeline
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="budgetMin" className="block text-sm font-medium text-gray-700 mb-1">
                        Minimum Budget <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          id="budgetMin"
                          type="number"
                          min="1"
                          value={budgetMin}
                          onChange={(e) => setBudgetMin(e.target.value)}
                          className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Min"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="budgetMax" className="block text-sm font-medium text-gray-700 mb-1">
                        Maximum Budget <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          id="budgetMax"
                          type="number"
                          min="1"
                          value={budgetMax}
                          onChange={(e) => setBudgetMax(e.target.value)}
                          className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Max"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                        Currency
                      </label>
                      <select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                      </select>
                    </div>
                  </div>
                  
                  {getFairPricingGuidance()}

                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                      Deadline (Optional)
                    </label>
                    <input
                      id="deadline"
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Fair Opportunity Settings
                </h2>
                
                <p className="text-sm text-gray-600 mb-4">
                  These settings help ensure all freelancers get a fair chance, regardless of their experience level.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="skillsFirstMatching"
                        type="checkbox"
                        checked={fairnessSettings.skillsFirstMatching}
                        onChange={(e) => setFairnessSettings({
                          ...fairnessSettings,
                          skillsFirstMatching: e.target.checked
                        })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="skillsFirstMatching" className="font-medium text-gray-700">Skills-First Matching</label>
                      <p className="text-gray-500">Prioritize skill match over ratings and experience when matching freelancers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="blindProposalReview"
                        type="checkbox"
                        checked={fairnessSettings.blindProposalReview}
                        onChange={(e) => setFairnessSettings({
                          ...fairnessSettings,
                          blindProposalReview: e.target.checked
                        })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="blindProposalReview" className="font-medium text-gray-700">Blind Proposal Review</label>
                      <p className="text-gray-500">Hide freelancer identities during initial proposal review to reduce bias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="newcomerBoost"
                        type="checkbox"
                        checked={fairnessSettings.newcomerBoost}
                        onChange={(e) => setFairnessSettings({
                          ...fairnessSettings,
                          newcomerBoost: e.target.checked
                        })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="newcomerBoost" className="font-medium text-gray-700">Newcomer Boost</label>
                      <p className="text-gray-500">Give visibility boost to qualified newcomers to help them get started</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="fairPaymentPromise"
                        type="checkbox"
                        checked={fairnessSettings.fairPaymentPromise}
                        onChange={(e) => setFairnessSettings({
                          ...fairnessSettings,
                          fairPaymentPromise: e.target.checked
                        })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="fairPaymentPromise" className="font-medium text-gray-700">Fair Payment Promise</label>
                      <p className="text-gray-500">Commit to paying fair rates for quality work regardless of freelancer location or experience</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Plus className="h-5 w-5 mr-2 text-blue-600" />
                  Additional Files (Optional)
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Attach files (max 5 files, 10MB each)
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      multiple
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-medium
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                      disabled={attachments.length >= 5}
                    />
                  </div>

                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                          <span className="text-sm text-gray-700 truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate('/dashboard')}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Project...' : 'Create Project'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProjectPage;
