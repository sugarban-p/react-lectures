// 客戶端元件 (React Client Component, RCC)
// 適用於 互動 UI、事件處理 等頁面
'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>首頁</h1>
        <div>Hello JK</div>
        <Link href="/about">關於網站 ( /about )</Link>
        <br />
        <Link href="/products">商品總覽 ( /products )</Link>
        <br />
        <Link href="/counter-v1">計數器練習v1 ( /counter-v1 )</Link>
        <hr />
        <h4>CH3</h4>
        <Link href="/ch3-jsx/render">JSX 渲染範例 ( /ch3-jsx/render )</Link>
        <br />
        <Link href="/ch3-jsx/attributes">
          JSX 標籤屬性 ( /ch3-jsx/attributes )
        </Link>
        <br />
        <Link href="/ch3-jsx/basic-synax">
          JSX 基本語法 ( /ch3-jsx/basic-synax )
        </Link>
        <hr />
        <h4>CH4</h4>
        <Link href="/ch4-state/cart-v1">
          更新狀態練習 - 購物車v1 ( /ch4-state/cart-v1 )
        </Link>
        <br />
        <Link href="/ch4-state/todo-v1">
          更新狀態練習 - 待辦事項v1 ( /ch4-state/todo-v1 )
        </Link>
        <br />
        <Link href="/ch4-state/immer">immer使用範例 ( /ch4-state/immer )</Link>
        <hr />
        <h4>CH5</h4>
        <Link href="/ch5-props/parent-child">
          父/子層關係 ( /ch5-props/parent-child )
        </Link>
        <br />
        <Link href="/ch5-props/children">
          props.children 範例 ( /ch5-props/children )
        </Link>
        <br />
        <Link href="/ch5-props/todo-v2">
          屬性練習 - 待辦事項v2 ( /ch5-props/todo-v2 )
        </Link>
        <br />
        <Link href="/ch5-props/context-bg">
          context 練習 - 切換背景 ( /ch5-props/context-bg )
        </Link>
        <br />
        <Link href="/ch5-props/cart-v2">
          context 練習 - 購物車v2 ( /ch5-props/cart-v2 )
        </Link>
        <br />
        <Link href="/ch5-props/user/login">
          context 練習 - 會員登入 ( /ch5-props/user/login )
        </Link>
        <br />
        <h4>CH6</h4>
        <Link href="/ch6-form/controlled">
          可控表單元件 ( /ch6-form/controlled )
        </Link>
        <br />
        <Link href="/ch6-form/uncontrolled">
          不可控表單元件 ( /ch6-form/uncontrolled )
        </Link>
        <br />
        <h4>CH7</h4>
        <Link href="/ch7-use-effect/pattern">
          useEffect() 應用 ( /ch7-use-effect/pattern )
        </Link>
        <br />
        <Link href="/ch7-use-effect/product-v2">
          useEffect() 練習 - 商品列表v2 ( /ch7-use-effect/product-v2 )
        </Link>
        <br />
      </div>
    </>
  );
}
