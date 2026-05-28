// 客戶端元件 (React Client Component, RCC)
// 適用於 互動 UI、事件處理 等頁面
'use client';

export default function HomePage() {
  return (
    <>
      <h1>首頁</h1>
      <div>Hello JK</div>
      <a href="/about">關於網站 ( /about )</a>
      <br />
      <a href="/products">商品總覽 ( /products )</a>
      <br />
      <a href="/counter">計數器練習 ( /counter )</a>
      <br />
      <a href="/ch3-jsx/render">CH3 - JSX 渲染範例 ( /ch3-jsx/render )</a>
      <br />
      <a href="/ch3-jsx/attributes">
        CH3 - JSX 標籤屬性 ( /ch3-jsx/attributes )
      </a>
    </>
  );
}
