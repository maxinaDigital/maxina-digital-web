import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-gradient-to-br from-blue-600/5 to-blue-600/2 border border-blue-600 rounded-lg p-8 backdrop-blur-sm ${className}`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
