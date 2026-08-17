import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'font-inter font-semibold transition-all duration-300 rounded';

    const variantStyles = {
      primary:
        'bg-[var(--primary-blue)] hover:bg-transparent text-white hover:text-[var(--cyan)] border-2 border-[var(--primary-blue)] hover:border-[var(--cyan)] hover:shadow-[0_0_20px_var(--glow)]',
      secondary:
        'bg-transparent text-[var(--cyan)] border-2 border-[var(--cyan)] hover:shadow-[0_0_20px_var(--glow)]',
      outline:
        'border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white',
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
