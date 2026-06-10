'use client';

import InputTextId from './_components/input-text-id';
import InputTextRefs from './_components/input-text-refs';

export default function UncontrolledPage() {
  return (
    <>
      <h1>不可控表單元件</h1>
      <hr />
      <InputTextId></InputTextId>
      <InputTextRefs></InputTextRefs>
    </>
  );
}
