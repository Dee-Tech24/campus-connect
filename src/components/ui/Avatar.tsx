import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };
  
  const clickableStyles = onClick 
    ? 'cursor-pointer hover:opacity-80 transition-opacity' 
    : '';

  return (
    <img
      src={src}
      alt={alt}
      className={`
        ${sizeStyles[size]}
        rounded-full object-cover border-2 border-white dark:border-gray-800
        ${clickableStyles}
        ${className}
      `}
      onClick={onClick}
    />
  );
};

export default Avatar;