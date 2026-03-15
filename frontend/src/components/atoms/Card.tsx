import React, { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const CardField: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { classes } = useTheme();
  return <div className={`${classes.card.body} ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { classes } = useTheme();
  return <div className={`${classes.card.header} ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { classes } = useTheme();
  return <div className={`${classes.card.footer} ${className}`}>{children}</div>;
};

export const CardContainer: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { classes } = useTheme();
  return <div className={`${classes.card.container} ${className}`}>{children}</div>;
};

export const Card = Object.assign(CardContainer, {
  Body: CardField,
  Header: CardHeader,
  Footer: CardFooter,
});
