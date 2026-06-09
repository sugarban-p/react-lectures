'use client';

import { useState } from 'react';

export default function OptionSelect() {
  const [option, setOption] = useState('');
  return (
    <>
      <h3>下拉選單</h3>
      <select
        value={option}
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        <option value="">請選擇寵物</option>
        <option value="dog">狗</option>
        <option value="cat">貓</option>
      </select>
    </>
  );
}
