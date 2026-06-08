'use client';

import React, { useState, createContext, useContext } from 'react';

// 定義商品項目的型別
export interface ProductItem {
  id: number;
  name: string;
  price: number;
}

// 定義購買車項目的型別
export interface CartItem {
  id: number;
  name: string;
  count: number; // 購物車項目才有數量的屬性
  price: number;
}

interface CartContextType {
  products: ProductItem[];
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  onAddCart: (product: ProductItem) => void;
  onDecrease: (itemId: number) => void;
  onIncrease: (itemId: number) => void;
  onRemove: (itemId: number) => void;
}

const productItems = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 100,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 150,
  },
];

const cartItems = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 3,
    price: 50,
  },
];

const CartContext = createContext<CartContextType | null>(null);
CartContext.displayName = 'CartContext';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<ProductItem[]>(productItems);
  const [items, setItems] = useState<CartItem[]>(cartItems);
  const totalCount = items.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  const onAddCart = (product: ProductItem) => {
    const foundIndex = items.findIndex((item) => item.id === product.id);
    if (foundIndex !== -1) {
      onIncrease(product.id);
    } else {
      const newItem = { ...product, count: 1 };
      const nextItems = [newItem, ...items];
      setItems(nextItems);
    }
  };

  const onIncrease = (itemId: number) => {
    const nextItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    setItems(nextItems);
  };

  const onDecrease = (itemId: number) => {
    const nextItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });

    // 設定到狀態中成為新狀態
    setItems(nextItems);
  };

  const onRemove = (itemId: number) => {
    const nextItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(nextItems);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        totalPrice,
        products,
        onAddCart,
        onDecrease,
        onIncrease,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  // 從context值中解構出value中的值和切換函式
  const context = useContext(CartContext);
  if (!context) {
    throw Error('it must be used within CartProvider');
  }
  return context;
};
