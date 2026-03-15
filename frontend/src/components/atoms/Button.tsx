import React, { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const { classes } = useTheme();

  // Combine the base button styles from the theme with the specific variant styles
  const btnClasses = `${classes.button.base} ${classes.button[variant]} ${className}`;

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};
