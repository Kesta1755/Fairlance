import React from 'react';
import { Brain, Users, DollarSign, Globe, Sparkles, Target, Shield, BarChart, Clock } from 'lucide-react';

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
      </div>
    </div>
  );
};

export default SmartFeatures;