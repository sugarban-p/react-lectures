// 客戶端元件 (React Client Component, RCC)
// 適用於 互動 UI、事件處理 等頁面
'use client';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>首頁</h1>
        <div>Hello JK</div>
        <a href="/about">關於網站 ( /about )</a>
        <br />
        <a href="/products">商品總覽 ( /products )</a>
        <br />
        <a href="/counter-v1">計數器練習v1 ( /counter-v1 )</a>
        <hr />
        <h4>CH3</h4>
        <a href="/ch3-jsx/render">JSX 渲染範例 ( /ch3-jsx/render )</a>
        <br />
        <a href="/ch3-jsx/attributes">JSX 標籤屬性 ( /ch3-jsx/attributes )</a>
        <br />
        <a href="/ch3-jsx/basic-synax">JSX 基本語法 ( /ch3-jsx/basic-synax )</a>
        <hr />
        <h4>CH4</h4>
        <a href="/ch4-state/cart-v1">
          更新狀態練習 - 購物車v1 ( /ch4-state/cart-v1 )
        </a>
        <br />
        <a href="/ch4-state/todo-v1">
          更新狀態練習 - 待辦事項v1 ( /ch4-state/todo-v1 )
        </a>
        <br />
        <a href="/ch4-state/immer">immer使用範例 ( /ch4-state/immer )</a>
        <hr />
        <h4>CH5</h4>
        <a href="/ch5-props/parent-child">
          父/子層關係 ( /ch5-props/parent-child )
        </a>
        <br />
        <a href="/ch5-props/children">
          props.children 範例 ( /ch5-props/children )
        </a>
        <br />
        <a href="/ch5-props/todo-v2">
          屬性練習 - 待辦事項v2 ( /ch5-props/todo-v2 )
        </a>
        <br />
        <a href="/ch5-props/context-bg">
          context 練習 - 切換背景 ( /ch5-props/context-bg )
        </a>
        <br />
        <a href="/ch5-props/cart-v2">
          context 練習 - 購物車v2 ( /ch5-props/cart-v2 )
        </a>
        <br />{' '}
        <a href="/ch5-props/user/login">
          context 練習 - 會員登入 ( /ch5-props/user/login )
        </a>
        <br />
      </div>
    </>
  );
}
