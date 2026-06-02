'use client';

import { ReactNode } from 'react';

export interface ParentProps {
  children?: ReactNode;
}

export default function Parent({ children }: ParentProps) {
  return (
    <>
      <div>Parent</div>
      <div style={{ color: 'red', fontSize: 20 }}>{children}</div>
    </>
  );
}
