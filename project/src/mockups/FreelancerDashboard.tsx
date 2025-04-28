import React from 'react';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  MessageSquare, 
  CheckCircle, 
  Bell, 
  Briefcase, 
  Award, 
  Star, 
  Clock, 
  ArrowUp, 
  Zap,
  Target,
  DollarSign
} from 'lucide-react';

const FreelancerDashboard: React.FC = () => {
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
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Proposals
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
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
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Welcome back, Alex!
                </h2>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Briefcase className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    Web Developer
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Star className="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-400" />
                    4.9 Rating (27 reviews)
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    Member since Jan 2025
                  </div>
                </div>
              </div>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block ml-3">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Update Profile
                  </button>
                </span>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Fairness Score Section */}
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Your Fairness Indicators</h3>
                <p className="text-sm text-gray-500 mb-6">These metrics show how FairLance is working to provide you with fair opportunities and compensation.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Target className="h-10 w-10 text-blue-600" />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Opportunity Score</h4>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-blue-700">94%</span>
                          <span className="flex items-center ml-2 text-green-600 text-sm">
                            <ArrowUp className="h-4 w-4" /> +5%
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Projects you're matched with based on skills, not just experience</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-10 w-10 text-purple-600" />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Fair Pay Index</h4>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-purple-700">96%</span>
                          <span className="flex items-center ml-2 text-green-600 text-sm">
                            <ArrowUp className="h-4 w-4" /> +12%
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Your earnings compared to market rate for your skill level</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Zap className="h-10 w-10 text-green-600" />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Growth Trajectory</h4>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-green-700">Rising Star</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Your skills and rates are growing faster than 75% of peers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Matches & Activity */}
            <div className="px-4 sm:px-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Matches */}
                <div className="lg:col-span-2">
                  <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">AI-Matched Projects</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                        Skill-Matched
                      </span>
                    </div>

                    <div className="space-y-6">
                      {/* Project 1 */}
                      <div className="border-b border-gray-200 pb-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">Full-Stack Developer for E-commerce Platform</h4>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <DollarSign className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              $45-60/hr · 3-6 months
                            </div>
                            <div className="mt-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 mr-2">
                                React
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 mr-2">
                                Node.js
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800">
                                MongoDB
                              </span>
                            </div>
                            <div className="mt-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                                <Target className="h-3 w-3 mr-1" /> 95% Skill Match
                              </span>
                            </div>
                          </div>
                          <button className="ml-6 bg-blue-600 px-3 py-1.5 text-sm text-white rounded hover:bg-blue-700">
                            Apply
                          </button>
                        </div>
                      </div>
                      
                      {/* Project 2 */}
                      <div className="border-b border-gray-200 pb-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">Frontend Developer for Travel App</h4>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <DollarSign className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              $40-50/hr · 2-3 months
                            </div>
                            <div className="mt-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 mr-2">
                                React
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 mr-2">
                                Tailwind
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800">
                                APIs
                              </span>
                            </div>
                            <div className="mt-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                                <Target className="h-3 w-3 mr-1" /> 89% Skill Match
                              </span>
                            </div>
                          </div>
                          <button className="ml-6 bg-blue-600 px-3 py-1.5 text-sm text-white rounded hover:bg-blue-700">
                            Apply
                          </button>
                        </div>
                      </div>
                      
                      {/* Project 3 */}
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">API Integration Specialist</h4>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <DollarSign className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              Fixed Price: $2,500 · 3 weeks
                            </div>
                            <div className="mt-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 mr-2">
                                REST APIs
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 mr-2">
                                JavaScript
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800">
                                Authentication
                              </span>
                            </div>
                            <div className="mt-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                                <Target className="h-3 w-3 mr-1" /> 82% Skill Match
                              </span>
                            </div>
                          </div>
                          <button className="ml-6 bg-blue-600 px-3 py-1.5 text-sm text-white rounded hover:bg-blue-700">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center justify-center">
                        View all matches <span aria-hidden="true" className="ml-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Stats & Activity */}
                <div className="lg:col-span-1">
                  <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">Weekly Activity</h3>
                    
                    <dl className="grid grid-cols-1 gap-5">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                          <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
                          Active Projects
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">3</dd>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                          <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
                          Unread Messages
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">7</dd>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                          <Users className="h-5 w-5 text-gray-400 mr-2" />
                          Interview Requests
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">2</dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">Earnings</h3>
                    <div className="flex items-baseline pb-6 border-b border-gray-200">
                      <p className="text-3xl font-bold text-gray-900">$3,240</p>
                      <p className="ml-2 text-sm font-medium text-gray-500">this month</p>
                    </div>
                    
                    <div className="pt-6 flex items-center">
                      <BarChart3 className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-500">47% higher than last month</span>
                    </div>
                    
                    <div className="mt-6">
                      <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        View earnings history
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Opportunities */}
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Growth Opportunities</h3>
                <p className="text-sm text-gray-500 mb-6">Based on your skills and goals, here are personalized opportunities to grow:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <Award className="h-8 w-8 text-amber-500 mb-2" />
                    <h4 className="text-base font-medium text-gray-900">Skill Certification</h4>
                    <p className="text-sm text-gray-500 mt-1">Get certified in React Advanced Patterns to boost your project matches by 30%</p>
                    <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">
                      Learn more
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <Users className="h-8 w-8 text-green-500 mb-2" />
                    <h4 className="text-base font-medium text-gray-900">Mentorship Program</h4>
                    <p className="text-sm text-gray-500 mt-1">Join our mentorship program to get guidance from senior developers</p>
                    <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">
                      Join program
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <Calendar className="h-8 w-8 text-purple-500 mb-2" />
                    <h4 className="text-base font-medium text-gray-900">Upcoming Workshops</h4>
                    <p className="text-sm text-gray-500 mt-1">3 workshops matched to your skills are scheduled this month</p>
                    <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">
                      View schedule
                    </button>
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

export default FreelancerDashboard;
