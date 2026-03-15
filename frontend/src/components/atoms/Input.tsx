import React, { InputHTMLAttributes, forwardRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, ...props }, ref) => {
    const { classes } = useTheme();

    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`${classes.input} ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
