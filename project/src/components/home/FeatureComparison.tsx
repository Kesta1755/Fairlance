import React from 'react';
import { Check, X } from 'lucide-react';

const FeatureComparison: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose FairLance</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            See how we compare to traditional freelance platforms.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-600">
              <tr>
                <th scope="col" className="px-6 py-5 text-left text-white font-medium uppercase tracking-wider w-1/3">
                  Features
                </th>
                <th scope="col" className="px-6 py-5 text-center text-white font-medium uppercase tracking-wider w-1/3">
                  FairLance
                </th>
                <th scope="col" className="px-6 py-5 text-center text-white font-medium uppercase tracking-wider w-1/3">
                  Traditional Platforms
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Visibility for new freelancers
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Blind bidding system
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Lower fees for beginners
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Fair opportunity rotation
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Mentorship program
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Verified skills testing
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Secure payment system
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;