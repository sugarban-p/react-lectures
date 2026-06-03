'use client';

import { useState } from 'react';
import { Todo } from '../_types/todo';

export interface ListEditFormProps {
  todo: Todo;
  onUpdate: (todoId: string, updateText: string) => void;
}

export default function ListEditForm({ todo, onUpdate }: ListEditFormProps) {
  const [inputText, setInputText] = useState(todo.text);

  const checkBlank = (inputText: string) => {
    if (!inputText) {
      alert('輸入內容不可為空');
      return false;
    }
    return true;
  };
  return (
    <>
      <input
        type="text"
        // 狀態是什麼 -> 文字輸入框呈現什麼
        value={inputText}
        // 在文字輸入框輸入了什麼 -> 狀態更動成什麼
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        // 送出文字
        onKeyDown={(e) => {
          if (e.key === 'Enter' && checkBlank(inputText.trim())) {
            onUpdate(todo.id, inputText.trim());
          }
        }}
      />
      <button
        onClick={() => {
          if (checkBlank(inputText.trim())) {
            onUpdate(todo.id, inputText.trim());
          }
        }}
      >
        儲存
      </button>
      <button
        onClick={() => {
          onUpdate(todo.id, todo.text);
        }}
      >
        取消
      </button>
    </>
  );
}
