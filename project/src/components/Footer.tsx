import React from 'react';
import Link from './ui/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github as GitHub, Shield, Users, Brain, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-blue-600 font-bold text-xl">FairLance</h3>
            <p className="mt-2 text-gray-600">
              A fair freelance marketplace where everyone gets a chance to succeed, regardless of experience level.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <GitHub className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold">For Freelancers</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Find Work
                </Link>
              </li>
              <li>
                <RouterLink to="/mockups/freelancer-dashboard" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Freelancer Dashboard
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/escrow-payment" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Secure Payments
                </RouterLink>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Newcomer Boost
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold">For Clients</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <RouterLink to="/mockups/client-project-creation" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Brain className="h-4 w-4 mr-1" />
                  Post a Project
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/mockups/smart-matching-results" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Sparkles className="h-4 w-4 mr-1" />
                  Find Talent
                </RouterLink>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  How It Works
                </Link>
              </li>
              <li>
                <RouterLink to="/escrow-payment" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Escrow Payments
                </RouterLink>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <RouterLink to="/mockups" className="text-gray-600 hover:text-blue-600">
                  Feature Demos
                </RouterLink>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Fair Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Equal Opportunity Commitment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <Shield className="h-4 w-4 mr-2" /> 
              Committed to fair opportunities for all freelancers
            </div>
          </div>
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} FairLance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;