import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'font-outfit font-semibold transition-all duration-300 rounded';

    const variantStyles = {
      primary: 'bg-blue-600 hover:bg-transparent text-white hover:text-cyan-400 border-2 border-blue-600 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,188,212,0.4)]',
      secondary: 'bg-transparent text-cyan-400 border-2 border-cyan-400 hover:shadow-[0_0_20px_rgba(0,188,212,0.6)]',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    };

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-10 py-4 text-sm uppercase tracking-wider',
      lg: 'px-12 py-5 text-base uppercase tracking-widest',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
