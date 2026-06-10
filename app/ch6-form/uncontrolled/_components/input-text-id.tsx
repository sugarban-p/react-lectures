'use client';

import { useState } from 'react';

export default function InputTextId() {
  // React 不能在宣告內用 JS 抓取元件
  // const inputElement = document.querySelector('#input-text'); << wrong
  const [output, setOutput] = useState('');

  return (
    <>
      <h3>文字輸入框(id)</h3>
      <input type="text" id="input-text" />
      <button
        onClick={() => {
          const inputElement = document.querySelector('#input-text');
          setOutput((inputElement as HTMLInputElement).value);
        }}
      >
        獲取輸入框內容
      </button>
      <span>&emsp;{output}</span>
    </>
  );
}
