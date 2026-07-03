import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'default', className = '' }, ref) => {
    const variantStyles = {
      default: 'bg-cyan-400/15 border-cyan-400 text-cyan-400',
      success: 'bg-green-400/15 border-green-400 text-green-400',
      warning: 'bg-yellow-400/15 border-yellow-400 text-yellow-400',
    };

    return (
      <span
        ref={ref}
        className={`inline-block px-3 py-1 text-xs font-semibold border rounded-full ${variantStyles[variant]} ${className}`}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
