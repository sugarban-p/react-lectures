'use client';

import { useState } from 'react';
import { useUser } from '@/context/user';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { user, login, logout, isLoggedIn } = useUser();
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');
  const router = useRouter();

  return (
    <>
      <h1>登入頁面</h1>
      <hr />
      <div>
        電子信箱
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={isLoggedIn}
        ></input>
      </div>
      <div>
        密碼
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <button
          onClick={() => {
            const result = login(email, password);
            if (!result.success) {
              alert('電子信箱或密碼錯誤');
            } else {
              alert(`登入成功：${result.userName}\n即將跳轉至個人資料頁面`);
              router.push('./profile');
            }
          }}
        >
          登入
        </button>
      </div>
    </>
  );
}
