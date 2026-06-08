'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart';

export default function ProductsPage() {
  const { items, totalCount, totalPrice, onIncrease, onDecrease, onRemove } =
    useCart();

  return (
    <>
      <div>購物車頁面</div>
      <Link href="./products">前往商品頁面</Link>
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} NT${item.price} (<b>{item.count}</b>)
            <button
              onClick={() => {
                onIncrease(item.id);
              }}
            >
              +1
            </button>
            <button
              onClick={() => {
                // 如果目前商品數量為1
                if (item.count === 1) {
                  if (confirm('你確定要移除這個商品嗎?')) {
                    onRemove(item.id);
                  }
                } else {
                  onDecrease(item.id);
                }
              }}
            >
              –1
            </button>
            <button
              onClick={() => {
                if (confirm('你確定要移除這個商品嗎?')) {
                  onRemove(item.id);
                }
              }}
            >
              移除
            </button>{' '}
          </li>
        ))}
      </ul>
      <hr />
      <p>
        總數量: {totalCount} / 總金額: {totalPrice}
      </p>
    </>
  );
}
