'use client';

interface ChildBProps {
  aData?: string;
}

export default function Child({ aData = '' }: ChildBProps) {
  return (
    <>
      <div className="container-child-b">
        <h3>B子 (ChildB)</h3>
        <p>2-1. 宣告 讓父層輸入資訊用的 props (ChildBProps)</p>
        <p>3-3. 從父層接收到輸入資訊 →{' ' + aData}</p>
      </div>
    </>
  );
}
