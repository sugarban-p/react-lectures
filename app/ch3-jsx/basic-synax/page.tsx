'use client';

export default function BasicSynaxPage() {
  return (
    <>
      <h1>JSX 基本語法</h1>
      <hr />
      <h3>映射 (map())</h3>
      <div>- 限陣列使用</div>
      <div>- 常用於&lt;li&gt;、&lt;td&gt; (視為React的for迴圈)</div>
      <span>[ex] </span>
      <a href="/product-v1">商品列表 (product-v1)</a>
      <h3>條件式渲染</h3>
      <div>1. 三元運算</div>
      <div>- 條件 ? true行為 : false行為</div>
      <div>2. && 邏輯運算子 (不推薦)</div>
      <div>- 條件 && true行為</div>
      <span>[ex] </span>
      <a href="/ch3-jsx/counter-v2">計數回報 (counter-v2)</a>
    </>
  );
}
