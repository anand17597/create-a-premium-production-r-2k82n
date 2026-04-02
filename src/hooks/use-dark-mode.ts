import { useState, useEffect, useCallback } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false; // Default to light mode on server
    }
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(newMode));
      }
      return newMode;
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;