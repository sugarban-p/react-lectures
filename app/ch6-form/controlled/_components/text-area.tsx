'use client';

import { useState } from 'react';

export default function TextArea() {
  const [text, setText] = useState('');
  return (
    <>
      <h3>文字區塊</h3>
      <textarea
        placeholder="請輸入文字..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}
