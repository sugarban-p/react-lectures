'use client';

import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function CartPage() {
  const [products, setProducts] = useState(initialProducts);

  // 標準流程
  // function handleIncreaseV1(productId: number) {
  //   // 1. 從現有狀態拷貝副本
  //   // 單層用[...] ； 多層用 JSON.parse(JSON.stringify())
  //   const newProducts: { id: number; name: string; count: number }[] =
  //     JSON.parse(JSON.stringify(products));
  //   // 2. 在副本上修改
  //   const foundIndex = newProducts.findIndex((v) => v.id === productId);
  //   if (foundIndex !== -1) {
  //     newProducts[foundIndex].count++;
  //     // 3. 呼叫 set 更新狀態
  //     setProducts(newProducts);
  //   }
  // }

  // map() : 1.+ 2.
  // function handleIncreaseV2(productId: number) {
  //   // 1. 從現有狀態拷貝副本
  //   // 2. 在副本上修改
  //   const newProducts = products.map((product) => {
  //     if (product.id === productId) {
  //       return { ...product, count: product.count + 1 };
  //     } else {
  //       return product;
  //     }
  //   });
  //   // 3. 呼叫 set 更新狀態
  //   setProducts(newProducts);
  // }

  // 新增(最精簡ver)
  function handleIncreaseV3(productId: number) {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  }

  // 減少
  function handleDecrease(productId: number) {
    setProducts(
      products.map((product) =>
        product.id === productId && product.count > 0 // 商品數量不可為負
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  }

  // 移除商品 (splice)
  // function handleRemoveV1(productId: number) {
  //   const newProducts: { id: number; name: string; count: number }[] =
  //     JSON.parse(JSON.stringify(products));
  //   // 2. 在副本上修改
  //   const foundIndex = newProducts.findIndex((v) => v.id === productId);
  //   if (foundIndex !== -1) {
  //     // splice(起始索引, 刪除數量)
  //     newProducts.splice(foundIndex, 1);
  //     // 3. 呼叫 set 更新狀態
  //     setProducts(newProducts);
  //   }
  // }

  // 移除商品 (filter)
  function handleRemoveV2(productId: number) {
    setProducts(products.filter((product) => product.id !== productId));
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              if (product.count === 1) {
                if (
                  confirm(
                    `Are you sure to delete ${product.name} from the cart?`
                  )
                ) {
                  handleRemoveV2(product.id);
                }
              } else {
                handleDecrease(product.id);
              }
            }}
          >
            -
          </button>{' '}
          <button
            onClick={() => {
              handleIncreaseV3(product.id);
            }}
          >
            +
          </button>{' '}
          <button
            onClick={() => {
              handleRemoveV2(product.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
