import { useState, useEffect, useLayoutEffect } from 'react';

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false;

  const saved = localStorage.getItem('theme');
  if (saved) {
    return saved === 'dark';
  }
  // Default to light mode
  return false;
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // Use useLayoutEffect to apply theme before paint
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('theme');
      if (!saved) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme };
}
