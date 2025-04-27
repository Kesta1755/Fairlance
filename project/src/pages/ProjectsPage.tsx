import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Filter, Briefcase, Clock, DollarSign, Map } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  location: string;
  category: string;
  skills: string[];
  postedAt: string;
  proposals: number;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
          {project.category}
        </span>
      </div>
      
      <p className="mt-3 text-gray-600 line-clamp-3">{project.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-700">{project.budget}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-700">{project.deadline}</span>
        </div>
        <div className="flex items-center">
          <Map className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-700">{project.location}</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-700">{project.proposals} proposals</span>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs text-gray-500">Posted {project.postedAt}</span>
        <a 
          href={`/projects/${project.id}`} 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "WordPress Website Redesign",
      description: "Looking for an experienced WordPress developer to redesign our company website. The current site is outdated and needs a fresh, modern look with improved functionality.",
      budget: "$1,000 - $2,000",
      deadline: "2 weeks",
      location: "Remote",
      category: "Development",
      skills: ["WordPress", "PHP", "CSS", "JavaScript"],
      postedAt: "2 days ago",
      proposals: 12
    },
    {
      id: 2,
      title: "Logo Design for Tech Startup",
      description: "We're a new tech startup in the AI space and need a professional logo that represents innovation and cutting-edge technology. Looking for creative designers with tech industry experience.",
      budget: "$300 - $500",
      deadline: "1 week",
      location: "Remote",
      category: "Design",
      skills: ["Logo Design", "Branding", "Illustrator", "AI"],
      postedAt: "1 day ago",
      proposals: 24
    },
    {
      id: 3,
      title: "Content Writing for Blog",
      description: "We need a skilled content writer to create engaging blog posts for our digital marketing agency. Topics will include SEO, social media marketing, and content strategy.",
      budget: "$50 - $100 per article",
      deadline: "Ongoing",
      location: "Remote",
      category: "Writing",
      skills: ["Content Writing", "SEO", "Digital Marketing"],
      postedAt: "3 days ago",
      proposals: 18
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Looking for a mobile app developer to create a simple fitness tracking app for iOS and Android. The app should track workouts, calories, and provide personalized recommendations.",
      budget: "$3,000 - $5,000",
      deadline: "2 months",
      location: "Remote",
      category: "Development",
      skills: ["React Native", "iOS", "Android", "Firebase"],
      postedAt: "4 hours ago",
      proposals: 7
    },
    {
      id: 5,
      title: "Social Media Marketing Campaign",
      description: "We're launching a new product and need a social media marketing expert to plan and execute a campaign across Instagram, Facebook, and Twitter. Experience with paid ads is required.",
      budget: "$1,500 - $2,500",
      deadline: "1 month",
      location: "Remote",
      category: "Marketing",
      skills: ["Social Media", "Paid Advertising", "Campaign Management"],
      postedAt: "6 days ago",
      proposals: 15
    },
    {
      id: 6,
      title: "UI/UX Design for Web Application",
      description: "We need a UI/UX designer to create intuitive and visually appealing interfaces for our new web application. Experience with SaaS products is a plus.",
      budget: "$2,000 - $3,500",
      deadline: "3 weeks",
      location: "Remote",
      category: "Design",
      skills: ["UI/UX", "Figma", "Web Design", "Prototyping"],
      postedAt: "5 days ago",
      proposals: 21
    }
  ];
  
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Available Projects</h1>
              <p className="mt-1 text-gray-600">
                Browse {projects.length} projects across various categories
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/post-project" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                Post a Project
              </a>
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
                    placeholder="Search projects..."
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
                    <h4 className="font-medium text-gray-900">Categories</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="category-development"
                          name="category"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="category-development" className="ml-2 text-gray-700">
                          Development
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="category-design"
                          name="category"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="category-design" className="ml-2 text-gray-700">
                          Design
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="category-writing"
                          name="category"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="category-writing" className="ml-2 text-gray-700">
                          Writing
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="category-marketing"
                          name="category"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="category-marketing" className="ml-2 text-gray-700">
                          Marketing
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900">Budget</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="budget-low"
                          name="budget"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="budget-low" className="ml-2 text-gray-700">
                          Under $500
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-medium"
                          name="budget"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="budget-medium" className="ml-2 text-gray-700">
                          $500 - $2,000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-high"
                          name="budget"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="budget-high" className="ml-2 text-gray-700">
                          $2,000 - $5,000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-very-high"
                          name="budget"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="budget-very-high" className="ml-2 text-gray-700">
                          $5,000+
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="space-y-4">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <p className="text-gray-600">No projects match your search criteria.</p>
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

export default ProjectsPage;