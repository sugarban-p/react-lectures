'use client';

import { useState } from 'react';
import { Todo } from '../_types/todo';

export interface AddFormProps {
  onAdd: (todo: Todo) => void;
}

export default function AddForm({ onAdd = () => {} }: AddFormProps) {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <input
        type="text"
        // 狀態是什麼 -> 文字輸入框呈現什麼
        value={inputText}
        placeholder="輸入代辦事項..."
        // 在文字輸入框輸入了什麼 -> 狀態更動成什麼
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        // 送出文字
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputText.trim()) {
            const newTodo = {
              id: crypto.randomUUID(),
              text: inputText,
              completed: false,
              isEditing: false,
            };
            onAdd(newTodo);
            // 清空輸入框
            setInputText('');
          }
        }}
      />{' '}
    </>
  );
}
