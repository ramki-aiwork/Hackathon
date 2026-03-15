import React, { LabelHTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => {
  const { classes } = useTheme();

  return (
    <label className={`${classes.label} ${className}`} {...props}>
      {children}
    </label>
  );
};
