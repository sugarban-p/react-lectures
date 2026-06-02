'use client';

import { useState } from 'react';
import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  const [pData, setPData] = useState('');
  return (
    <>
      <div className="container-parent">
        <h2>父屬性 (Parent)</h2>
        <p>3-1. 用 useState 宣告 接收用變數 pData </p>
        <p>3-2. 匯入 ChildA，並設置屬性</p>
        <p>3-3. 點擊按鈕得到資料 →{' ' + pData}</p>
        <ChildA setPData={setPData}></ChildA>
        <ChildB aData={pData}></ChildB>
      </div>
    </>
  );
}
