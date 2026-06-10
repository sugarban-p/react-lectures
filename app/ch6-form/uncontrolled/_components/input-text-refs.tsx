'use client';

import { useRef, useState } from 'react';

export default function InputTextRefs() {
  const inputRef = useRef<HTMLInputElement>(null);
  // └ inputRef = { current: null };
  const [output, setOutput] = useState('');

  return (
    <>
      <h3>文字輸入框(refs)</h3>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setOutput(inputRef.current?.value ?? '');
        }}
      >
        獲取輸入框內容
      </button>
      <span>&emsp;{output}</span>
    </>
  );
}
