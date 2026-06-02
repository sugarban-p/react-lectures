'use client';

interface ChildAProps {
  setPData?: (s: string) => void;
}

export default function ChildA({ setPData = () => {} }: ChildAProps) {
  const aData = 'A子資料';
  return (
    <>
      <div className="container-child-a">
        <h3>A子 (ChildA)</h3>
        <p>
          1-1. 宣告 讓父層 callback 用的 props (ChildAProps)
          <br />* 通常會直接用父層callback命名屬性 *
        </p>
        <p>
          1-2. 設置執行callback用的按鈕 →{' '}
          <button
            onClick={() => {
              setPData(aData);
            }}
          >
            Send AData
          </button>
        </p>
      </div>
    </>
  );
}
