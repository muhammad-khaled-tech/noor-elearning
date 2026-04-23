import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'success';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', className = '' }) => {
  const baseStyles = "px-2 py-1 rounded text-xs font-bold whitespace-nowrap inline-block";
  const variants = {
    gold: "bg-gold text-white shadow-sm",
    outline: "border border-gold text-gold",
    success: "bg-green-600 text-white",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
