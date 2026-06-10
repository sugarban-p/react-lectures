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

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const url =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/';

export default function IdPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const res = await fetch(url + id);
      if (!res.ok) {
        setProduct(null);
        setIsLoading(false);
        return;
      }
      const resData = await res.json();
      if (!resData || Object.keys(resData).length === 0) {
        setProduct(null);
      } else {
        setProduct(resData);
      }
      setIsLoading(false);
    };
    getProduct();
  }, [id]);

  if (isLoading) {
    return <h3>載入中...</h3>;
  }
  if (!product) {
    return (
      <>
        <h3>無此商品</h3>
        <Link href="/ch7-use-effect/product-v2">返回商品列表</Link>
      </>
    );
  }
  return (
    <>
      <h3>{product.name}</h3>
      <hr />
      {product.image_url ? (
        <Image
          src={product.image_url}
          width={400}
          height={400}
          alt={product.name}
          loading="eager"
        />
      ) : null}
      <p>編號: {product.id}</p>
      <p>價格: {product.price}</p>
      <Link href="/ch7-use-effect/product-v2">返回商品列表</Link>
    </>
  );
}
