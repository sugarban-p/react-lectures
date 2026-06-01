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
      <a href="/counter-v1">計數器練習 ( /counter )</a>
      <hr />
      <h4>CH3</h4>
      <a href="/ch3-jsx/render">JSX 渲染範例 ( /ch3-jsx/render )</a>
      <br />
      <a href="/ch3-jsx/attributes">JSX 標籤屬性 ( /ch3-jsx/attributes )</a>
      <br />
      <a href="/ch3-jsx/basic-synax">JSX 基本語法 ( /ch3-jsx/basic-synax )</a>
      <hr />
      <h4>CH4</h4>
      <a href="/ch4-state/cart">更新狀態練習 - 購物車 ( /ch4-state/cart )</a>
      <br />
      <a href="/ch4-state/todo">更新狀態練習 - 代辦事項 ( /ch4-state/todo )</a>
    </>
  );
}
