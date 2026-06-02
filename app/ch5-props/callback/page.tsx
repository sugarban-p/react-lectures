'use client';

import Parent from './_components/parent';
import {} from './styles/callback.css';

export default function CallbackPage() {
  return (
    <>
      <h1>回呼函式 - 子→父 </h1>
      <Parent></Parent>
    </>
  );
}
