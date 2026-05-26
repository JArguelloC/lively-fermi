import React, { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'category' | 'offer' | 'new';
}

export const Badge: React.FC<BadgeProps> = ({
  className = '',
  variant = 'category',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold';
  
  const variants = {
    category: 'bg-gray-800 text-gray-100',
    offer: 'bg-red-500/10 text-red-500 border border-red-500/20',
    new: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
