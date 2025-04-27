import React, { useState } from 'react';
import { Menu, X, Users, Briefcase, User, LogIn } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-xl">FairLance</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              <span>Projects</span>
            </Link>
            <Link href="/freelancers" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>Freelancers</span>
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600 flex items-center">
              <LogIn className="h-4 w-4 mr-1" />
              <span>Log In</span>
            </Link>
            <Link 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link 
              href="/projects" 
              className="block py-2 text-gray-700 hover:text-blue-600 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="h-4 w-4 mr-2" />
              <span>Projects</span>
            </Link>
            <Link 
              href="/freelancers" 
              className="block py-2 text-gray-700 hover:text-blue-600 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="h-4 w-4 mr-2" />
              <span>Freelancers</span>
            </Link>
            <Link 
              href="/login" 
              className="block py-2 text-gray-700 hover:text-blue-600 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              <span>Log In</span>
            </Link>
            <Link 
              href="/signup" 
              className="block py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;