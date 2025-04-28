import React from 'react';
import { Code, Paintbrush, Pencil, LineChart, Camera, Megaphone, Globe, Server, Music, Lightbulb, HeartPulse, Wrench } from 'lucide-react';
import Link from '../ui/Link';

interface CategoryCardProps {
  icon: React.ReactElement;
  title: string;
  count: number;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, count, color }) => {
  return (
    <Link href={`/projects/category/${title.toLowerCase()}`} className="block">
      <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border-t-4 ${color}`}>
        <div className="flex items-center mb-2">
          {icon}
          <h3 className="ml-2 font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{count} projects available</p>
        <div className="mt-2">
          <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 rounded px-2 py-1">All skill levels welcome</span>
        </div>
      </div>
    </Link>
  );
};

const Categories: React.FC = () => {
  const categories: Array<{
    icon: React.ReactElement;
    title: string;
    count: number;
    color: string;
  }> = [
    {
      icon: <Code className="h-5 w-5 text-blue-600" />,
      title: "Development",
      count: 347,
      color: "border-blue-600"
    },
    {
      icon: <Paintbrush className="h-5 w-5 text-purple-600" />,
      title: "Design",
      count: 219,
      color: "border-purple-600"
    },
    {
      icon: <Pencil className="h-5 w-5 text-green-600" />,
      title: "Writing",
      count: 185,
      color: "border-green-600"
    },
    {
      icon: <LineChart className="h-5 w-5 text-red-600" />,
      title: "Marketing",
      count: 163,
      color: "border-red-600"
    },
    {
      icon: <Camera className="h-5 w-5 text-pink-600" />,
      title: "Photography",
      count: 97,
      color: "border-pink-600"
    },
    {
      icon: <Megaphone className="h-5 w-5 text-yellow-600" />,
      title: "Social Media",
      count: 142,
      color: "border-yellow-600"
    },
    {
      icon: <Globe className="h-5 w-5 text-indigo-600" />,
      title: "Translation",
      count: 73,
      color: "border-indigo-600"
    },
    {
      icon: <Server className="h-5 w-5 text-teal-600" />,
      title: "Data Science",
      count: 89,
      color: "border-teal-600"
    },
    {
      icon: <Music className="h-5 w-5 text-cyan-600" />,
      title: "Music & Audio",
      count: 118,
      color: "border-cyan-600"
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-amber-600" />,
      title: "Mentoring",
      count: 65,
      color: "border-amber-600"
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-rose-600" />,
      title: "Wellbeing",
      count: 54,
      color: "border-rose-600"
    },
    {
      icon: <Wrench className="h-5 w-5 text-slate-600" />,
      title: "Skilled Trades",
      count: 78,
      color: "border-slate-600"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Opportunities</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Find projects across a diverse range of categories, where talent of all experience levels is valued and fairly compensated.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Beginner-friendly</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Fair compensation</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Inclusive environment</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              count={category.count}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;