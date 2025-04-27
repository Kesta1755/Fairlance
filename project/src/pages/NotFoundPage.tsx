import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AlertTriangle } from 'lucide-react';
import { Link } from '../components/ui/Link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24 flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;