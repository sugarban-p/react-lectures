'use client';

import { useState } from 'react';

// mock data
const initData = [
  { id: 'u002', text: '寫作業', completed: true },
  {
    id: 'u001',
    text: '繳電信費',
    completed: false,
  },
];

export default function TodoPage() {
  // 記錄待辨事項的狀態
  const [todos, setTodos] = useState(initData);
  // 宣告給文字輸入框使用的狀態
  const [inputText, setInputText] = useState('');

  const onRemove = (todoId: string) => {
    if (confirm('Are you sure to remove this task?')) {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    }
  };

  const toggleChecked = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <h1>待辨事項</h1>
      <hr />
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
            setTodos([
              { id: crypto.randomUUID(), text: inputText, completed: false },
              ...todos,
            ]);
            // 清空輸入框
            setInputText('');
          }
        }}
      />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                // 如果要能修改狀態: checked + onChange
                // 如果不能修改狀態: defaultChecked
                checked={todo.completed}
                onChange={() => {
                  toggleChecked(todo.id);
                }}
              />
              {todo.text}{' '}
              <button
                onClick={() => {
                  onRemove(todo.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
