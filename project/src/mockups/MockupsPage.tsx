import React, { useState } from 'react';
import { FreelancerDashboard, ClientProjectCreation, SmartMatchingResults } from './index';

const MockupsPage: React.FC = () => {
  const [activeMockup, setActiveMockup] = useState<string>('freelancer');

  return (
    <div>
      {/* Navigation Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4">
            <h1 className="text-2xl font-bold text-gray-900">FairLance Mockups</h1>
            <div className="flex space-x-4">
              <button 
                className={`px-4 py-2 rounded-md ${activeMockup === 'freelancer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setActiveMockup('freelancer')}
              >
                Freelancer Dashboard
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeMockup === 'client' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setActiveMockup('client')}
              >
                Client Project Creation
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeMockup === 'matching' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setActiveMockup('matching')}
              >
                Smart Matching Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup Display */}
      <div>
        {activeMockup === 'freelancer' && <FreelancerDashboard />}
        {activeMockup === 'client' && <ClientProjectCreation />}
        {activeMockup === 'matching' && <SmartMatchingResults />}
      </div>
    </div>
  );
};

export default MockupsPage;
