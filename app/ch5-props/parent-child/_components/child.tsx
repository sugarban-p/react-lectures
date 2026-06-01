'use client';

import { ReactNode } from 'react';

interface Data {
  x?: number;
  y?: number;
}

interface ChildProps {
  title?: string;
  price?: number;
  isConnected?: boolean;
  array?: number[];
  object?: Data;
  func?: (a: number, b: number) => number;
  jsx?: ReactNode;
}

// 記得提供預設值
export default function Child({
  title = '',
  price = 0,
  isConnected = false,
  array = [],
  object = {},
  func = () => 0,
  jsx = <></>,
}: ChildProps) {
  return (
    <>
      <h3>子屬性 (Child)</h3>
      <div className="container">
        從父層輸入的資訊 ( * = 經過 JSON.stringify() 轉換 )：
        <br />
        title = {title}
        <br />
        price = {price}
        <br />* isConnected = {String(isConnected)}
        <br />* array = {JSON.stringify(array)}
        <br />* object = {JSON.stringify(object)}
        <br />
        func(1+2) = {func(1, 2)}
        <br />
        jsx = {jsx}
      </div>
    </>
  );
}
