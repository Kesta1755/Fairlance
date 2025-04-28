import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = true,
  border = true,
  shadow = true
}) => {
  const baseClasses = "bg-white rounded-lg";
  const paddingClasses = padding ? "p-6" : "";
  const borderClasses = border ? "border border-gray-200" : "";
  const shadowClasses = shadow ? "shadow-md" : "";
  
  return (
    <div className={`${baseClasses} ${paddingClasses} ${borderClasses} ${shadowClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
