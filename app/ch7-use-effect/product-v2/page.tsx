'use client';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

import { useState, useEffect } from 'react';
import Link from 'next/link';
// 導入next提供的有自動圖片最佳化的元件
import Image from 'next/image';
// 導入css樣式
import './_styles/product-table.css';

// 呼叫 API 獲取 JSON 格式資料
const url =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/';

export default function ProductV2Page() {
  const [products, setProducts] = useState<Product[]>([]);

  // 第一次渲染頁面時讀取資料 => useEffect(cb, [])
  useEffect(() => {
    // 只給 useEffect 用的函式直接寫裡面
    const getProducts = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setProducts(resData);
    };
    getProducts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="image-field">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    sizes="100%"
                    loading="eager"
                  />
                </td>
                <td>
                  <Link href={`./product-v2/${product.id}`}>
                    {product.name}
                  </Link>
                </td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
