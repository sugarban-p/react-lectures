'use client';

import { useState } from 'react';

export default function CounterPage() {
  // const [目前的值, 修改這個值的方法] = useState(初始值);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>計數器練習</h1>
      <hr />
      <button
        onClick={() => {
          // 每次執行都會重新宣告 const count
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}
