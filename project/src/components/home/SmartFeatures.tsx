import React from 'react';
import { Brain, Users, DollarSign, Globe, Sparkles, Target, Shield, BarChart, Clock, Briefcase } from 'lucide-react';

const SmartFeatures: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart Matching & Fair Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered system ensures fair opportunities and pricing for everyone, creating a level playing field for both newcomers and experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">AI-Driven Smart Matching</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Target className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <span className="text-gray-600">Our intelligent system analyzes each project's needs and automatically recommends the top 5–10 most qualified freelancers</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <span className="text-gray-600"><span className="font-medium">No more spam applications or endless scrolling</span> — just the best fits, instantly</span>
              </li>
              <li className="flex items-start">
                <Globe className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <span className="text-gray-600">Considers skills, experience, timezone, and project compatibility</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">Fair Pricing Engine</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BarChart className="h-5 w-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-600">We calculate fair price ranges dynamically, considering project complexity, regional costs of living, and market conditions</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-600"><span className="font-medium">No race-to-the-bottom or unfair underbidding</span> — everyone earns what they deserve</span>
              </li>
              <li className="flex items-start">
                <Globe className="h-5 w-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-600">Currency and cost-of-living adjustments with anti-dumping protection</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">Equal Opportunity System</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-600">Every freelancer — beginner or expert — gets real visibility through transparent, skill-based matching</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-600"><span className="font-medium">Real work for real talent</span> — not just for the "top rated" few</span>
              </li>
              <li className="flex items-start">
                <Target className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-600">Opportunities based on skill fit, not "who bids faster" or "who charges less"</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">Smart Project Analysis</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BarChart className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <span className="text-gray-600">Our AI reads project scopes to understand complexity, urgency, and specific needs</span>
              </li>
              <li className="flex items-start">
                <Target className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <span className="text-gray-600"><span className="font-medium">Better matches = better results</span> for everyone</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <span className="text-gray-600">Ensures freelancers only see projects they are truly fit for, saving time for everyone</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How Our Smart System Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Project Analysis</h4>
              <p className="text-gray-600">AI analyzes project requirements and complexity</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Smart Matching</h4>
              <p className="text-gray-600">Matches with qualified freelancers based on skills and experience</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Fair Pricing</h4>
              <p className="text-gray-600">Suggests optimal price range based on market data</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How FairLance Works</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Our fair-focused approach ensures everyone gets an equal opportunity to succeed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Freelancer Experience
              </h4>
              
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-4">1</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Complete your profile</h5>
                    <p className="text-gray-600">Add your skills, portfolio, timezone, and experience level</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-4">2</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Set your preferred pricing</h5>
                    <p className="text-gray-600">Guided by our Fair Pricing suggestions based on your skills and location</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-4">3</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Get invited to relevant projects</h5>
                    <p className="text-gray-600">No more random bidding—only projects that match your skills</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-4">4</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Accept or pass on invitations</h5>
                    <p className="text-gray-600">No punishment for passing—we want the right fit for everyone</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-4">5</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Get hired based on skills and fit</h5>
                    <p className="text-gray-600">Not who underbids faster—fair rates for quality work</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                Client Experience
              </h4>
              
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold mr-4">1</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Create your project</h5>
                    <p className="text-gray-600">Guided by a friendly AI assistant that asks the right questions</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold mr-4">2</div>
                  <div>
                    <h5 className="font-medium text-gray-900">System analyzes and finds matches</h5>
                    <p className="text-gray-600">Our AI identifies the top 5-10 freelancers perfectly suited for your project</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold mr-4">3</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Review freelancer matches</h5>
                    <p className="text-gray-600">See skills, portfolio samples, and suggested fair pricing for each match</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold mr-4">4</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Choose your freelancer</h5>
                    <p className="text-gray-600">Or request a second matching round if you'd like more options</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold mr-4">5</div>
                  <div>
                    <h5 className="font-medium text-gray-900">Start your project with confidence</h5>
                    <p className="text-gray-600">Fair rates, qualified talent, and transparent processes</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Join the FairLance Revolution</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Where talent meets opportunity, fairly. No endless bidding wars. No race to the bottom.<br />
              Just quality work, fair pricing, and equal opportunity for all.  
            </p>
            <a 
              href="/signup" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-lg"
            >
              Sign Up and Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartFeatures;