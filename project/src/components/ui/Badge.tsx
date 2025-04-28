import React from 'react';
import { BadgeProps } from '../../types';

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'blue', 
  size = 'md',
  icon: Icon,
  className = '' 
}) => {
  // Color variants
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
    purple: "bg-purple-100 text-purple-800",
    gray: "bg-gray-100 text-gray-800"
  };
  
  // Size variants
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm"
  };
  
  return (
    <span className={`inline-flex items-center font-medium rounded-full ${colorClasses[color]} ${sizeClasses[size]} ${className}`}>
      {Icon && <Icon className={`h-3.5 w-3.5 ${children ? 'mr-1' : ''}`} />}
      {children}
    </span>
  );
};

export default Badge;
