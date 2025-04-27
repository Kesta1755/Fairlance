import React from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Github as GitHub } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-blue-600 font-bold text-xl">FairLance</h3>
            <p className="mt-2 text-gray-600">
              A fair freelance marketplace where everyone gets a chance to succeed.
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
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Skills Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Mentorship Program
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold">For Clients</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  How It Works
                </Link>
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
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Blog
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
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} FairLance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;