'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeDisplay() {
  // 여기서도 같은 Context 사용!
  const { isDarkMode } = useTheme();

  return (
    <div className={`
      p-6 rounded-xl border-2 transition-colors
      ${isDarkMode 
        ? 'bg-gray-900 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-800'
      }
    `}>
      <h2 className="text-xl font-bold mb-4">테마 모드 표시</h2>
      <div className="space-y-2">
        <p><strong>현재 테마:</strong> {isDarkMode ? '다크' : '라이트'}</p>
      </div>
    </div>
  );
}
