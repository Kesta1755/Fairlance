import React from 'react';
import { Star, ArrowRight, Award, BadgeCheck, Users, Zap, ShieldCheck, Target } from 'lucide-react';
import Link from '../ui/Link';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating?: number;
  experience?: string;
  featureBenefit?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image, rating = 5, experience, featureBenefit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-blue-500">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
          {experience && (
            <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
              {experience}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-3">"{quote}"</p>
      
      {featureBenefit && (
        <div className="mt-3 text-sm bg-blue-50 p-2 rounded-md">
          <span className="font-medium text-blue-700 flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1" /> Feature benefit: {featureBenefit}
          </span>
        </div>
      )}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "As a new freelancer, I struggled to get noticed on other platforms. FairLance's New Talent Boost feature gave me the visibility I needed to land my first clients.",
      name: "Sarah Johnson",
      role: "Web Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      experience: "New freelancer",
      featureBenefit: "Equal Opportunity System"
    },
    {
      quote: "The blind bidding system is brilliant. My proposals get evaluated on merit, not just on how many years I've been in the industry. It's truly a fair opportunity.",
      name: "Michael Chen",
      role: "Graphic Designer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      experience: "Career changer",
      featureBenefit: "Skills-First Selection"
    },
    {
      quote: "As a client, I've discovered amazing talent I might have overlooked on other platforms. The focus on skills over ratings has helped me find the perfect match every time.",
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
      experience: "Small business owner",
      featureBenefit: "AI-Driven Smart Matching"
    },
    {
      quote: "The transparent pricing system means I'm paid fairly for my expertise, not based on where I live. This has been game-changing for my freelance career.",
      name: "David Okafor",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      experience: "5+ years experience",
      featureBenefit: "Fair Pricing Engine"
    },
    {
      quote: "I was hesitant to hire someone with limited portfolio work, but FairLance's skill verification gave me confidence. My project turned out better than I expected!",
      name: "Jennifer Tran",
      role: "Startup Founder",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      experience: "First-time client",
      featureBenefit: "Smart Project Analysis"
    },
    {
      quote: "The mentorship connection feature helped me improve my skills while earning. Most platforms only care about experienced pros, but FairLance invests in newcomers.",
      name: "Carlos Mendez",
      role: "Video Editor",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      experience: "Recent graduate",
      featureBenefit: "Newcomer Boost"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Fair Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our users are proof that a fair platform creates more success stories for <span className="font-medium">everyone</span>, not just those with existing advantages.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Zap className="w-4 h-4 mr-1" /> First-time freelancers
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <Target className="w-4 h-4 mr-1" /> Career changers
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <Users className="w-4 h-4 mr-1" /> Underrepresented groups
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              <Award className="w-4 h-4 mr-1" /> Experienced professionals
            </span>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              experience={testimonial.experience}
              featureBenefit={testimonial.featureBenefit}
            />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900">Your Success Story Starts Here</h3>
          <p className="mt-4 text-blue-700 max-w-2xl mx-auto">
            Join thousands of freelancers and clients who are building success together on the world's fairest freelance platform.
          </p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="mt-6 flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-800">10k+</span>
              <span className="text-sm text-blue-600">Freelancers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-800">94%</span>
              <span className="text-sm text-blue-600">Satisfaction Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-800">$15M+</span>
              <span className="text-sm text-blue-600">Paid to Freelancers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;