import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  className = '',
  variant = 'dark',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  
  const variants = {
    dark: 'bg-gray-900 border border-gray-800',
    glass: 'bg-gray-900/40 backdrop-blur-md border border-gray-700/50 shadow-xl',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
