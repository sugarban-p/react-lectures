'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function InputText() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  // 顯示密碼用
  const [showPwd, setShowPwd] = useState(false);

  return (
    <>
      <h3>文字輸入框</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h3>密碼輸入框</h3>
      <input
        type={showPwd ? 'text' : 'password'}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setShowPwd(!showPwd);
        }}
      >
        {showPwd ? <FaEyeSlash /> : <FaEye />}
      </button>
      <br />
      <input
        type="checkbox"
        checked={showPwd}
        onChange={() => {
          // setShowPwd(e.target.checked);
          setShowPwd(!showPwd);
        }}
      />
      顯示密碼
    </>
  );
}
