import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Brain, ArrowRight, DollarSign, Zap } from 'lucide-react';

const FeaturesPromo: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Our Fair Platform</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how FairLance creates equal opportunities for freelancers of all experience levels
            through innovative features and fair practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Escrow Payments Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Escrow Payments</h3>
              <p className="text-gray-600 mb-6">
                Our escrow system ensures fair payment handling between clients and freelancers, 
                building trust and protecting both parties.
              </p>
              <Link to="/escrow-payment" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Try Escrow Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Freelancer Dashboard Card */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Freelancer Experience</h3>
              <p className="text-gray-600 mb-6">
                Explore our fair freelancer dashboard with opportunity scores, fair pay metrics, 
                and personalized growth recommendations.
              </p>
              <Link to="/mockups/freelancer-dashboard" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Client Project Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Project Creation</h3>
              <p className="text-gray-600 mb-6">
                See how our AI guides clients to create fair projects that evaluate freelancers
                based on skills rather than just experience.
              </p>
              <Link to="/mockups/client-project-creation" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                Create a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Matching Results Card */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Skills-First Matching</h3>
              <p className="text-gray-600 mb-6">
                Experience our revolutionary blind matching system that prioritizes skills over
                ratings, creating opportunities for talented newcomers.
              </p>
              <Link to="/mockups/smart-matching-results" className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium">
                View Matching Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* All Mockups Card */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Pricing System</h3>
              <p className="text-gray-600 mb-6">
                Our transparent pricing system ensures freelancers receive fair compensation
                based on skill level and project complexity.
              </p>
              <Link to="/mockups" className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium">
                Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPromo;
