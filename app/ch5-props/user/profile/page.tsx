'use client';

import { useState } from 'react';
import { useUser } from '@/context/user';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, logout } = useUser();
  const router = useRouter();

  return (
    <>
      <h1>個人資料</h1>
      <hr />
      <ul>
        <li>
          <strong>姓名&emsp;&emsp;&emsp;|</strong>
          &emsp;
          {user?.name}
        </li>
        <li>
          <strong>電子信箱&emsp;|</strong>
          &emsp;
          {user?.email}
        </li>
      </ul>
      <button
        onClick={() => {
          if (confirm('確定登出?')) {
            logout();
            router.push('./login');
          }
        }}
      >
        登出
      </button>
    </>
  );
}
