'use client';

import { useTheme } from '@/context/theme';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>
        <i className="fa-solid fa-circle-half-stroke"></i>
        切換至 {theme === 'dark' ? '亮色' : '深色'} 背景
      </button>
    </>
  );
}
