import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ href, className, children, onClick }) => {
  return (
    <a 
      href={href} 
      className={className} 
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Link;