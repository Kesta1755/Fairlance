import React from 'react';
import { Briefcase, Users, Award, BadgeCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How FairLance Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our fair-focused approach ensures everyone gets an equal opportunity to succeed.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Post Your Project</h3>
              <p className="mt-2 text-gray-600">
                Describe your project, set your budget, and specify the skills you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Receive Proposals</h3>
              <p className="mt-2 text-gray-600">
                Our fair algorithm ensures all qualified freelancers have a chance to bid.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Choose Your Talent</h3>
              <p className="mt-2 text-gray-600">
                Review proposals first, then see profiles. Blind selection ensures fair hiring.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                <BadgeCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Work & Pay Securely</h3>
              <p className="mt-2 text-gray-600">
                Collaborate, communicate, and pay through our secure platform.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg overflow-hidden shadow-xl">
          <div className="px-6 py-12 text-center sm:px-16">
            <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of freelancers and clients already using FairLance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center"
              >
                Sign Up Now
              </a>
              <a 
                href="/learn-more" 
                className="bg-transparent hover:bg-blue-700 text-white border border-white px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center"
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