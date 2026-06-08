'use client';

import { useCart } from '@/context/cart';
import { FaShoppingCart } from 'react-icons/fa'; // Import the icon
import './cart-icon.css'; // Import the CSS styles

export default function CartIcon() {
  // 取得數量
  const { totalCount } = useCart();
  return (
    <>
      <div
        className="cart-container"
        aria-label={`Shopping cart with ${totalCount} items`}
      >
        <FaShoppingCart className="cart-icon" />
        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
      </div>
    </>
  );
}
