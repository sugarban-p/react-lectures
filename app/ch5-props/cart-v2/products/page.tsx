'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart';

export default function ProductsPage() {
  const { products, onAddCart } = useCart();
  return (
    <>
      <div>商品頁面</div>
      <Link href="./cart">前往購物車頁面</Link>
      <hr />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} NT${product.price}
            <button
              onClick={() => {
                onAddCart(product);
                // 跳出一個加入的提示
                alert(`${product.name}已成功加入購物車!`);
              }}
            >
              加入購物車
            </button>{' '}
          </li>
        ))}
      </ul>{' '}
    </>
  );
}
