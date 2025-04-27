import React from 'react';
import { Code, Paintbrush, Pencil, LineChart, Camera, Megaphone, Globe, Server } from 'lucide-react';
import { Link } from '../ui/Link';

interface CategoryCardProps {
  icon: React.ReactNode;
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
      </div>
    </Link>
  );
};

const Categories: React.FC = () => {
  const categories = [
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
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find projects across a wide range of categories.
          </p>
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