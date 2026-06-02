'use client';

import { useState } from 'react';
import { Todo } from './_types/todo';
import AddForm from './_components/add-form';

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
  const [todos, setTodos] = useState<Todo[]>(initData);

  const onAdd = (todo: Todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

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
      <AddForm onAdd={onAdd}></AddForm>
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
