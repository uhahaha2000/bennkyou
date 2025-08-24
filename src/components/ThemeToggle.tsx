'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  // Custom Hook 사용!
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-4 py-2 rounded-lg font-medium transition-colors
        ${isDarkMode 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-blue-500 text-white hover:bg-blue-600'
        }
      `}
    >
      {isDarkMode ? '🌙 다크모드' : '☀️ 라이트모드'}
    </button>
  );
}
