'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkHome() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <>
      <br />
      <Link href="/" style={{ color: '#E47813' }}>
        &lt;&lt; 返回首頁
      </Link>
    </>
  );
}
