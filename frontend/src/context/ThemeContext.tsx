import React, { createContext, useContext, useState, ReactNode } from 'react';

// The Theme interface defines the CSS classes for various abstract component states
export interface ComponentClasses {
  button: {
    primary: string;
    secondary: string;
    danger: string;
    base: string;
  };
  card: {
    container: string;
    header: string;
    body: string;
    footer: string;
  };
  input: string;
  label: string;
}

interface ThemeContextType {
  classes: ComponentClasses;
  themeName: string;
  setThemeName: (name: string) => void;
}

// Example implementation using Tailwind as the default. 
// To switch to Bootstrap/Vanilla CSS, simply swap this mapping.
export const tailwindTheme: ComponentClasses = {
  button: {
    base: 'inline-flex justify-center flex-shrink-0 items-center rounded-md font-semibold focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm px-4 py-2',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm px-4 py-2',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm px-4 py-2'
  },
  card: {
    container: 'bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100',
    header: 'px-6 py-4 border-b border-gray-100 bg-gray-50/50',
    body: 'px-6 py-4',
    footer: 'px-6 py-4 bg-gray-50/50 border-t border-gray-100'
  },
  input: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border',
  label: 'block text-sm font-medium text-gray-700 mb-1'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState('tailwind');

  // Logic could be added here to load different `ComponentClasses` objects depending on `themeName`.
  const currentTheme = themeName === 'tailwind' ? tailwindTheme : tailwindTheme;

  return (
    <ThemeContext.Provider value={{ classes: currentTheme, themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
