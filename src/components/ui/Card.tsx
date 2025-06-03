import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden';
  const hoverStyles = hoverable 
    ? 'transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' 
    : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card;