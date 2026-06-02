'use client';

import { useState } from 'react';

export default function CounterV2Page() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>回報0以外的數字</h1>
      <hr />
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <hr style={{ border: '1px dashed' }} />
      <div>1-1. 三元運算 - 隱式</div>
      {count ? <p>當前 count = {count}</p> : null}
      <div>1-2. 三元運算 - 顯式 (建議用法)</div>
      {count !== 0 ? <p>當前 count = {count}</p> : null}
      <div>2-1. && 邏輯判定 (不建議)</div>
      <div>&#42; 須強制轉型count為布林值，避免count=0時顯示異常 &#42;</div>
      {Boolean(count) && <p>當前 count = {count}</p>}
    </>
  );
}
