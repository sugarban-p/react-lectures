'use client';

import React, { useState, createContext, useContext } from 'react';

/* 宣告 context */
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
// React Context 通常使用 null 作為預設值
export const ThemeContext = createContext<ThemeContextType | null>(null);
// 設定 Context 在瀏覽器 devtools 上的名稱
ThemeContext.displayName = 'ThemeContext';

/* 宣告 provider */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 宣告狀態
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  // 切換背景
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 宣告自訂鉤子 (先包裝 useContext + ThemeContext )
export const useTheme = () => {
  // 從context值中解構出value中的值和切換函式
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('it must be used within ThemeProvider');
  }

  return context;
};
