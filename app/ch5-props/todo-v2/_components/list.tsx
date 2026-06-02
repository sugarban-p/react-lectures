'use client';

import { Todo } from '../_types/todo';

export interface ListProps {
  todos?: Todo[];
  onRemove: (todoId: string) => void;
  toggleChecked: (todoId: string) => void;
}

export default function List({
  todos = [],
  onRemove = () => {},
  toggleChecked = () => {},
}: ListProps) {
  return (
    <>
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
