import React, { useState } from 'react';
import { 
  Brain, 
  Users, 
  Filter, 
  Star, 
  ArrowRight, 
  Target, 
  Check,
  Shield,
  Eye,
  EyeOff,
  Briefcase,
  Clock,
  BarChart
} from 'lucide-react';

const SmartMatchingResults: React.FC = () => {
  const [blindMode, setBlindMode] = useState(true);
  
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
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Projects
                </a>
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Talent Matches
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
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
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  Best Matches for Your Project
                </h1>
                <p className="mt-1 text-lg text-gray-600">
                  E-commerce Website Development
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* AI Insight Banner */}
            <div className="px-4 py-5 sm:px-0">
              <div className="bg-blue-50 rounded-lg shadow-sm p-4 border border-blue-100">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Smart Matching Activated</h3>
                    <p className="mt-2 text-sm text-blue-700">
                      Our AI has analyzed your project requirements and found 16 skilled freelancers. 
                      We're showing them based on skill match first, not just ratings or experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Section */}
            <div className="px-4 sm:px-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setBlindMode(!blindMode)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                      blindMode 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {blindMode ? (
                      <>
                        <EyeOff className="h-4 w-4 mr-2" />
                        Blind Mode
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        Standard Mode
                      </>
                    )}
                  </button>
                  <span className="text-sm text-gray-500">
                    {blindMode ? 'Evaluating based on skills first' : 'Showing all freelancer details'}
                  </span>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select
                    className="border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="skill-match"
                  >
                    <option value="skill-match">Best Skill Match</option>
                    <option value="experience">Experience Level</option>
                    <option value="ratings">Highest Rated</option>
                    <option value="price">Lowest Price</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Freelancer Cards */}
            <div className="px-4 sm:px-0">
              <div className="bg-white shadow rounded-lg overflow-hidden divide-y divide-gray-200">
                {/* Freelancer 1 - Experienced */}
                <div className="p-6">
                  <div className="flex items-start">
                    {!blindMode && (
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Freelancer" 
                        className="h-16 w-16 rounded-full mr-6 object-cover"
                      />
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {blindMode ? 'Freelancer #1342' : 'Michael Chen'}
                          </h3>
                          
                          <div className="mt-1 flex items-center">
                            {!blindMode ? (
                              <>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-500">5.0 (48 reviews)</span>
                              </>
                            ) : (
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                Skills-First Evaluation
                              </span>
                            )}
                          </div>
                          
                          {!blindMode && (
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              Senior Web Developer
                              <span className="mx-2">•</span>
                              <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              8+ years experience
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <div className="flex flex-col items-end">
                            <div className="flex items-center mb-1">
                              <Shield className="h-5 w-5 text-green-500 mr-1" />
                              <span className="text-sm font-medium text-green-700">Top Match</span>
                            </div>
                            
                            <div className="text-xl font-semibold text-gray-900">
                              $45/hr
                            </div>
                            
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Target className="h-4 w-4 mr-1 text-blue-500" />
                              96% skill match
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Skills & Expertise</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> React.js
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> Node.js
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> E-commerce
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> Responsive Design
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> Payment APIs
                          </span>
                        </div>
                      </div>
                      
                      {!blindMode && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900">About</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            Experienced web developer specializing in e-commerce solutions. I've built 20+ online stores with React and Node.js, integrating various payment gateways and shipping solutions.
                          </p>
                        </div>
                      )}
                      
                      <div className="mt-5 flex">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          View Full Profile
                        </button>
                        <button
                          type="button"
                          className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Freelancer 2 - Newcomer with strong skills */}
                <div className="p-6">
                  <div className="flex items-start">
                    {!blindMode && (
                      <img 
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Freelancer" 
                        className="h-16 w-16 rounded-full mr-6 object-cover"
                      />
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {blindMode ? 'Freelancer #2764' : 'Sarah Johnson'}
                          </h3>
                          
                          <div className="mt-1 flex items-center">
                            {!blindMode ? (
                              <>
                                <div className="flex items-center">
                                  {[...Array(4)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                  <Star className="h-4 w-4 text-gray-300" />
                                </div>
                                <span className="ml-2 text-sm text-gray-500">4.0 (3 reviews)</span>
                              </>
                            ) : (
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                Skills-First Evaluation
                              </span>
                            )}
                          </div>
                          
                          {!blindMode && (
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              Web Developer
                              <span className="mx-2">•</span>
                              <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              1 year experience
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <div className="flex flex-col items-end">
                            <div className="flex items-center mb-1">
                              <span className="text-sm font-medium text-blue-700 flex items-center">
                                <BarChart className="h-4 w-4 mr-1" />
                                Rising Talent
                              </span>
                            </div>
                            
                            <div className="text-xl font-semibold text-gray-900">
                              $35/hr
                            </div>
                            
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Target className="h-4 w-4 mr-1 text-blue-500" />
                              92% skill match
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Skills & Expertise</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> React.js
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> Node.js
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> MongoDB
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" /> Responsive Design
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                            Stripe API
                          </span>
                        </div>
                      </div>
                      
                      {!blindMode && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900">About</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            Front-end focused developer with a passion for creating intuitive user experiences. Coming from a design background, I bring strong UI/UX sensibilities to all my development work.
                          </p>
                        </div>
                      )}
                      
                      <div className="mt-5 flex">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          View Full Profile
                        </button>
                        <button
                          type="button"
                          className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fair Matching Explanation */}
            <div className="px-4 sm:px-0 mt-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-900">About Fair Matching</h3>
                <p className="mt-2 text-blue-700">
                  Our fair matching system prioritizes skills over reputation to create equal opportunities. Here's how it works:
                </p>
                <ul className="mt-4 space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Blind evaluation shows skills first before profiles or ratings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" />
                    <span>AI evaluates actual capability through skill assessments, not just work history</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Fair pricing recommendations prevent underbidding and race-to-bottom scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" />
                    <span>Newcomers with strong skills are boosted to earn their first reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SmartMatchingResults;
