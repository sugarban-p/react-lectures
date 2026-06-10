'use client';

import { useState, useEffect } from 'react';

export default function PatternPage() {
  const [count, setCount] = useState(0);

  // 1 - 該元件每次重新渲染時 都會執行
  useEffect(() => {
    console.log('1 - useEffect(cb)');
  });

  // 2.1 - 只在 該元件第一次渲染時 執行
  useEffect(() => {
    console.log('2.1 - useEffect(cb,[])');
  }, []);

  // 2.2 - 只在 該元件卸載前 執行
  useEffect(() => {
    return () => {
      console.log('2.2 - useEffect(cb(cb),[])');
    };
  }, []);

  // 3 - 只在 []內變數狀態/屬性變更時 執行
  useEffect(() => {
    console.log('3 - useEffect(cb,[...arg])');
  }, [count]);

  return (
    <>
      <h1>useEffect() 應用</h1>
      <em>F12 開啟 Console</em>
      <hr />
      <strong style={{ fontSize: '20px' }}>&emsp;{count}&emsp;</strong>
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          console.log(`count 更新 : ${newCount}`);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          console.log(`現在數字 : ${count}`);
        }}
      >
        check
      </button>
    </>
  );
}
