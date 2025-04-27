import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Filter, Star, MapPin, Award, Briefcase } from 'lucide-react';

interface Freelancer {
  id: number;
  name: string;
  title: string;
  rating: number;
  hourlyRate: string;
  location: string;
  skills: string[];
  completedProjects: number;
  verified: boolean;
  isNewTalent: boolean;
  image: string;
}

const FreelancerCard: React.FC<{ freelancer: Freelancer }> = ({ freelancer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <img 
            src={freelancer.image} 
            alt={freelancer.name} 
            className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                {freelancer.name}
                {freelancer.verified && (
                  <Award className="h-4 w-4 text-blue-600 ml-1" title="Verified" />
                )}
              </h3>
              <p className="text-gray-600">{freelancer.title}</p>
            </div>
            <div className="flex items-center">
              {freelancer.isNewTalent && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full mr-2">
                  New Talent
                </span>
              )}
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-gray-700">{freelancer.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-2">
            {freelancer.skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
              <span>{freelancer.location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
              <span>{freelancer.completedProjects} projects completed</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="font-medium text-gray-900">{freelancer.hourlyRate}/hr</span>
            <a 
              href={`/freelancers/${freelancer.id}`} 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors duration-300"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FreelancersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample freelancer data
  const freelancers: Freelancer[] = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Full Stack Developer",
      rating: 4.9,
      hourlyRate: "$45",
      location: "United States",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      completedProjects: 87,
      verified: true,
      isNewTalent: false,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Jessica Chen",
      title: "UI/UX Designer",
      rating: 4.8,
      hourlyRate: "$35",
      location: "Canada",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      completedProjects: 42,
      verified: true,
      isNewTalent: false,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      title: "Content Writer",
      rating: 4.7,
      hourlyRate: "$25",
      location: "Mexico",
      skills: ["Blog Writing", "SEO", "Copywriting", "Technical Writing"],
      completedProjects: 63,
      verified: false,
      isNewTalent: false,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      name: "Emma Wilson",
      title: "Mobile App Developer",
      rating: 4.6,
      hourlyRate: "$40",
      location: "United Kingdom",
      skills: ["iOS", "Android", "React Native", "Flutter"],
      completedProjects: 29,
      verified: true,
      isNewTalent: false,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "David Singh",
      title: "WordPress Developer",
      rating: 4.9,
      hourlyRate: "$30",
      location: "India",
      skills: ["WordPress", "PHP", "CSS", "JavaScript"],
      completedProjects: 104,
      verified: true,
      isNewTalent: false,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      name: "Olivia Taylor",
      title: "Graphic Designer",
      rating: 4.5,
      hourlyRate: "$28",
      location: "Australia",
      skills: ["Photoshop", "Illustrator", "Branding", "Logo Design"],
      completedProjects: 3,
      verified: false,
      isNewTalent: true,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];
  
  const filteredFreelancers = freelancers.filter(freelancer => 
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Find Talented Freelancers</h1>
              <p className="mt-1 text-gray-600">
                Browse {freelancers.length} freelancers across various skills
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search freelancers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </h3>
                  
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900">Skill Categories</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="skill-development"
                          name="skill"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="skill-development" className="ml-2 text-gray-700">
                          Development
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="skill-design"
                          name="skill"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="skill-design" className="ml-2 text-gray-700">
                          Design
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="skill-writing"
                          name="skill"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="skill-writing" className="ml-2 text-gray-700">
                          Writing
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="skill-marketing"
                          name="skill"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="skill-marketing" className="ml-2 text-gray-700">
                          Marketing
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900">Freelancer Status</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="new-talent"
                          name="status"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="new-talent" className="ml-2 text-gray-700">
                          New Talent
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="verified"
                          name="status"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="verified" className="ml-2 text-gray-700">
                          Verified
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900">Hourly Rate</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="rate-low"
                          name="rate"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rate-low" className="ml-2 text-gray-700">
                          Under $25/hr
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="rate-medium"
                          name="rate"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rate-medium" className="ml-2 text-gray-700">
                          $25 - $50/hr
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="rate-high"
                          name="rate"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rate-high" className="ml-2 text-gray-700">
                          $50 - $100/hr
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="rate-very-high"
                          name="rate"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rate-very-high" className="ml-2 text-gray-700">
                          $100+/hr
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="space-y-4">
                {filteredFreelancers.length > 0 ? (
                  filteredFreelancers.map(freelancer => (
                    <FreelancerCard key={freelancer.id} freelancer={freelancer} />
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <p className="text-gray-600">No freelancers match your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreelancersPage;