'use client';

import { useState } from 'react';
import { Todo } from './_types/todo';
import AddForm from './_components/add-form';
import List from './_components/list';

// mock data
const initData = [
  { id: 'u002', text: '寫作業', completed: true, isEditing: false },
  {
    id: 'u001',
    text: '繳電信費',
    completed: false,
    isEditing: false,
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
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const onEdit = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isEditing: true };
        } else {
          return { ...todo, isEditing: false }; // 強制其他事項退出編輯
        }
      })
    );
  };

  const onUpdate = (todoId: string, updateText: string) => {
    const newTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, text: updateText, isEditing: false }
        : { ...todo };
    });
    setTodos(newTodos);
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
      <List
        todos={todos}
        onRemove={onRemove}
        toggleChecked={toggleChecked}
        onEdit={onEdit}
        onUpdate={onUpdate}
      ></List>
    </>
  );
}
