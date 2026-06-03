'use client';

import { useTheme } from '@/context/theme';

export default function HomePage() {
  const { theme } = useTheme();

  const color = theme === 'dark' ? 'white' : 'black';
  const bgColor = theme === 'dark' ? 'black' : 'white';

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <h1>context 練習 - 切換背景</h1>
        <hr />
        <h3>Step1 - 建立 context ( @/context/theme.tsx )</h3>
        <p>1-1. 宣告 context</p>
        <p>1-2. 宣告 provider</p>
        <p>1-3. 建立 hook</p>
        <h3>Step2 - 建立 context UI ( @/_components/theme-switch.tsx )</h3>
        <h3>Step3 - 匯入到根頁面 ( @/layout.tsx )</h3>
        <p>* ps: 全屏切換還是使用tailwindcss *</p>
      </div>
    </>
  );
}
