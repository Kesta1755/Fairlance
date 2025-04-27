import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import FeatureComparison from '../components/home/FeatureComparison';
import Categories from '../components/home/Categories';
import SmartFeatures from '../components/home/SmartFeatures';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SmartFeatures />
        <HowItWorks />
        <Categories />
        <Testimonials />
        <FeatureComparison />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;