import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, setIsDark }) {
  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
