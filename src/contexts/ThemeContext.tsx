'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Context 타입 정의
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// 2. Context 생성 (기본값 설정)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider 컴포넌트
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Context에 제공할 값들
  const value: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom Hook - Context 사용을 위한 헬퍼 함수
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
