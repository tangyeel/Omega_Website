import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-300 flex items-center justify-center hover-lift group"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-warning-500 group-hover:rotate-180 transition-transform duration-300" />
      ) : (
        <Moon className="w-6 h-6 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;