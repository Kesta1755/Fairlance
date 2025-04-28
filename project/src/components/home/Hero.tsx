import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from '../ui/Link';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Where <span className="text-blue-600">Fair Opportunity</span> Meets Talent
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              A freelance platform that gives everyone a fair shot. New talent gets visibility, 
              experienced pros find quality work, and clients discover the perfect match.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center"
              >
                Join as Freelancer
              </Link>
              <Link 
                href="/signup" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center"
              >
                Hire Talent
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Freelancers collaborating" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">New Talent Boost</h3>
              <p className="mt-2 text-gray-600">
                New freelancers automatically get higher visibility for their first projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Blind Bidding</h3>
              <p className="mt-2 text-gray-600">
                Clients evaluate proposals first, not star ratings, so quality ideas win.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Lower Beginner Fees</h3>
              <p className="mt-2 text-gray-600">
                We charge lower commissions for new freelancers to help them get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;