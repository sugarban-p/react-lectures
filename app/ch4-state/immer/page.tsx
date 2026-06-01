'use client';

import { useState } from 'react';
import { produce } from 'immer';
import {} from './styles/immer.css';

export default function ImmerPage() {
  const [user1, setUser1] = useState({
    name: '張三',
    profile: {
      phone: '0912345678',
      address: {
        city: '台北市',
      },
    },
  });
  const [user2, setUser2] = useState({
    name: '張三',
    profile: {
      phone: '0912345678',
      address: {
        city: '台北市',
      },
    },
  });
  return (
    <>
      <h1>immer使用範例</h1>
      <hr />
      <div className="container">
        <h3># 不使用 Immer</h3>
        <p>修改多層結構只能做深拷貝：JSON.parse(JSON.stringify())</p>
        <p>user = {JSON.stringify(user1)}</p>
        <button
          onClick={() => {
            setUser1({ ...user1, name: '李四' });
          }}
        >
          name&gt;&gt;李四
        </button>
        <button
          onClick={() => {
            const newUser = JSON.parse(JSON.stringify(user1));
            newUser.profile.phone = '0987654321';
            setUser1(newUser);
          }}
        >
          phone&gt;&gt;0987654321
        </button>
        <button
          onClick={() => {
            const newUser = JSON.parse(JSON.stringify(user1));
            newUser.profile.address.city = '新北市';
            setUser1(newUser);
          }}
        >
          city&gt;&gt;新北市
        </button>
      </div>
      <div className="container">
        <h3># 使用 Immer</h3>
        <p>
          produce( &lt;待修改變數&gt;, (draft) =&gt;
          &#123;&lt;修改後的值&gt;&#125; )
        </p>
        <p>
          EX: produce(user2, (draft) =&gt; &#123; draft.profile.phone =
          &apos;0987654321&apos;; &#125;)
        </p>
        <p>user = {JSON.stringify(user2)}</p>
        <button
          onClick={() => {
            const newUser = produce(user2, (draft) => {
              draft.name = '李四';
            });
            setUser2(newUser);
          }}
        >
          name&gt;&gt;李四
        </button>
        <button
          onClick={() => {
            const newUser = produce(user2, (draft) => {
              draft.profile.phone = '0987654321';
            });
            setUser2(newUser);
          }}
        >
          phone&gt;&gt;0987654321
        </button>
        <button
          onClick={() => {
            const newUser = produce(user2, (draft) => {
              draft.profile.address.city = '新北市';
            });
            setUser2(newUser);
          }}
        >
          city&gt;&gt;新北市
        </button>
      </div>
    </>
  );
}
