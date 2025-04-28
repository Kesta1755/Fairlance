import React from 'react';
import { 
  Brain, 
  Users, 
  Edit, 
  FileText, 
  Check, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Calendar, 
  Star,
  Target,
  Sparkles,
  Shield,
  HelpCircle
} from 'lucide-react';

const ClientProjectCreation: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-blue-600 font-bold text-xl">FairLance</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Post a Project
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Projects
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Freelancers
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="ml-3 relative">
                <div>
                  <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Create a New Project
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Our AI will help you create a fair and comprehensive project that attracts the right talent.
            </p>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              {/* Steps Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600">Step 1</p>
                        <p className="text-sm font-bold">Project Details</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block w-24 border-t border-gray-300"></div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500">
                        <Target className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Step 2</p>
                        <p className="text-sm font-medium">Skills & Expertise</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block w-24 border-t border-gray-300"></div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Step 3</p>
                        <p className="text-sm font-medium">Budget & Timeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg overflow-hidden">
                {/* AI Assistant Banner */}
                <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-blue-800">AI Project Assistant</h3>
                    <p className="text-xs text-blue-600">I'll help you create a fair and detailed project description that ensures the right match.</p>
                  </div>
                  <button className="ml-auto text-sm text-blue-600 font-medium flex items-center">
                    <HelpCircle className="h-4 w-4 mr-1" /> How this works
                  </button>
                </div>
                
                {/* Form Content */}
                <div className="p-6">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Project Overview</h3>
                      
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Project Title
                          </label>
                          <div className="mt-1 relative">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="e.g., E-commerce Website Redesign"
                              defaultValue="Modern E-commerce Website Development"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <Check className="h-5 w-5 text-green-500" />
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-green-600 flex items-center">
                            <Sparkles className="h-4 w-4 mr-1" /> 
                            Clear and descriptive title that will attract qualified freelancers
                          </p>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Project Category
                          </label>
                          <div className="mt-1">
                            <select
                              id="category"
                              name="category"
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              defaultValue="web-development"
                            >
                              <option value="web-development">Web Development</option>
                              <option value="mobile-app">Mobile App Development</option>
                              <option value="design">Design</option>
                              <option value="writing">Content Writing</option>
                              <option value="marketing">Digital Marketing</option>
                              <option value="video">Video & Animation</option>
                              <option value="audio">Music & Audio</option>
                              <option value="business">Business</option>
                              <option value="lifestyle">Lifestyle</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="sm:col-span-6">
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Project Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={6}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              defaultValue="We need a modern e-commerce website for our boutique clothing store. The website should have a clean, responsive design with product catalog, shopping cart, user accounts, and payment integration."
                            ></textarea>
                          </div>
                          <div className="mt-3 bg-yellow-50 p-3 rounded-md border border-yellow-100">
                            <h4 className="text-sm font-medium text-yellow-800 flex items-center">
                              <Brain className="h-4 w-4 mr-2" /> AI Suggestions to Improve Description
                            </h4>
                            <ul className="mt-2 text-sm text-yellow-700 space-y-2">
                              <li className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 text-yellow-500 flex items-center justify-center">•</span>
                                <span className="ml-2">Consider adding details about specific features needed (product filtering, wishlists, etc.)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 text-yellow-500 flex items-center justify-center">•</span>
                                <span className="ml-2">Specify any design preferences or brand guidelines to follow</span>
                              </li>
                              <li className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 text-yellow-500 flex items-center justify-center">•</span>
                                <span className="ml-2">Mention which payment gateways you want to integrate</span>
                              </li>
                            </ul>
                            <button className="mt-3 text-sm font-medium text-yellow-700 hover:text-yellow-800 flex items-center">
                              Apply Suggestions <ArrowRight className="ml-1 h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Project Deliverables</h3>
                      
                      <div className="bg-white border border-gray-200 rounded-md overflow-hidden divide-y divide-gray-200">
                        <div className="p-4 flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 relative top-1">
                            <input
                              id="deliverable-1"
                              name="deliverable-1"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <label htmlFor="deliverable-1" className="block text-sm font-medium text-gray-700">Responsive website design</label>
                            <p className="text-xs text-gray-500 mt-1">Mobile, tablet, and desktop friendly layouts</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 relative top-1">
                            <input
                              id="deliverable-2"
                              name="deliverable-2"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <label htmlFor="deliverable-2" className="block text-sm font-medium text-gray-700">Shopping cart & checkout</label>
                            <p className="text-xs text-gray-500 mt-1">Secure shopping cart and checkout process</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 relative top-1">
                            <input
                              id="deliverable-3"
                              name="deliverable-3"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <label htmlFor="deliverable-3" className="block text-sm font-medium text-gray-700">User account management</label>
                            <p className="text-xs text-gray-500 mt-1">Registration, login, profile management, order history</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 relative top-1">
                            <input
                              id="deliverable-4"
                              name="deliverable-4"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <label htmlFor="deliverable-4" className="block text-sm font-medium text-gray-700">Payment gateway integration</label>
                            <p className="text-xs text-gray-500 mt-1">Integration with common payment processors</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 relative top-1">
                            <input
                              id="deliverable-5"
                              name="deliverable-5"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <label htmlFor="deliverable-5" className="block text-sm font-medium text-gray-700">Product search & filtering</label>
                            <p className="text-xs text-gray-500 mt-1">Advanced search functionality and product filtering options</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 relative top-1">
                            <input
                              id="deliverable-6"
                              name="deliverable-6"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <label htmlFor="deliverable-6" className="block text-sm font-medium text-gray-700">Admin dashboard</label>
                            <p className="text-xs text-gray-500 mt-1">Manage products, orders, customers, and content</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <button type="button" className="flex items-center text-sm text-blue-600 font-medium">
                          <Edit className="h-4 w-4 mr-2" /> Add custom deliverable
                        </button>
                      </div>
                    </div>
                    
                    {/* Fair Opportunity Settings */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4 flex items-center">
                        <Shield className="h-5 w-5 text-blue-500 mr-2" /> Fair Opportunity Settings
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        These settings help ensure your project provides fair opportunities to freelancers of all experience levels.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="fairMatch"
                              name="fairMatch"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="fairMatch" className="font-medium text-gray-700">Skills-First Matching</label>
                            <p className="text-gray-500">Match based on skills and quality, not just experience or ratings</p>
                          </div>
                        </div>
                        
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="blindProposals"
                              name="blindProposals"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="blindProposals" className="font-medium text-gray-700">Blind Proposal Review</label>
                            <p className="text-gray-500">Review proposals without seeing names or profile photos first</p>
                          </div>
                        </div>
                        
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="newcomerBoost"
                              name="newcomerBoost"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="newcomerBoost" className="font-medium text-gray-700">Newcomer Boost</label>
                            <p className="text-gray-500">Include qualified freelancers who are new to the platform</p>
                          </div>
                        </div>
                        
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="fairPayment"
                              name="fairPayment"
                              type="checkbox"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="fairPayment" className="font-medium text-gray-700">Fair Payment Promise</label>
                            <p className="text-gray-500">Commit to paying fairly based on skill level and project complexity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save as Draft
                    </button>
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Continue to Skills & Expertise <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* AI Insight Card */}
              <div className="mt-6 bg-blue-50 rounded-lg p-6 shadow-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">AI Project Insights</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>Based on your project description, here's what our AI suggests:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>This project might take 4-6 weeks with an experienced developer</li>
                        <li>Key skills needed: React.js, Node.js, payment API experience</li>
                        <li>Fair budget range: $3,000-$5,000 for quality work</li>
                        <li>Consider adding SEO optimization to your deliverables</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientProjectCreation;
