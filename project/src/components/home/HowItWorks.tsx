import React from 'react';
import { Briefcase, Users, Award, BadgeCheck, Shield, Brain, Scale, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How FairLance Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our fair-focused approach ensures <span className="font-medium">every freelancer</span> — from newcomers to experts — gets an equal opportunity to succeed based on skill and fit, not just reputation or price.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Shield className="w-4 h-4 mr-1" /> Equitable opportunities
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <Scale className="w-4 h-4 mr-1" /> Fair pricing
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              <Zap className="w-4 h-4 mr-1" /> Newcomer boost
            </span>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <div className="text-center bg-white rounded-lg p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Smart Project Creation</h3>
              <p className="mt-2 text-gray-600">
                AI-guided project setup that helps define clear requirements and suggested fair pricing ranges.
              </p>
              <div className="mt-3 flex justify-center">
                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">For clients</span>
              </div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Intelligent Matching</h3>
              <p className="mt-2 text-gray-600">
                Our system finds the perfect match, with equal opportunities for new and experienced freelancers.
              </p>
              <div className="mt-3 flex justify-center">
                <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">Fair opportunities</span>
              </div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Skills-First Selection</h3>
              <p className="mt-2 text-gray-600">
                Blind initial matching based on skills and project fit, not just ratings or past work.
              </p>
              <div className="mt-3 flex justify-center">
                <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded">Merit-based</span>
              </div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Protected Payments</h3>
              <p className="mt-2 text-gray-600">
                Secure escrow, fair payment terms, and transparent fee structure with no hidden costs.
              </p>
              <div className="mt-3 flex justify-center">
                <span className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded">Secure & fair</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">For Freelancers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-blue-200 mt-1 mr-2 flex-shrink-0" />
                  <p>Equal visibility regardless of your experience level</p>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-blue-200 mt-1 mr-2 flex-shrink-0" />
                  <p>Newcomer Boost program to help you get your first clients</p>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-blue-200 mt-1 mr-2 flex-shrink-0" />
                  <p>AI-powered fair pricing suggestions based on your skills</p>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-blue-200 mt-1 mr-2 flex-shrink-0" />
                  <p>No punishment for declining invitations – find your perfect fit</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-8 md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">For Clients</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-green-200 mt-1 mr-2 flex-shrink-0" />
                  <p>Discover talented freelancers regardless of their ratings</p>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-green-200 mt-1 mr-2 flex-shrink-0" />
                  <p>Transparent pricing with regional cost-of-living calculations</p>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-green-200 mt-1 mr-2 flex-shrink-0" />
                  <p>AI-powered project requirements wizard for better matches</p>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-green-200 mt-1 mr-2 flex-shrink-0" />
                  <p>Quality work from fairly compensated, motivated professionals</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-8 text-center bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900">Ready to join the fairness revolution?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of freelancers and clients already making the most of FairLance's equitable platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-center text-lg"
              >
                Sign Up Now
              </a>
              <a 
                href="/learn-more" 
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium transition-colors duration-300 text-center text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;