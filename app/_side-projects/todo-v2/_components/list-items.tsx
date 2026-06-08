'use client';

import { Todo } from '../_types/todo';

export interface ListItemsProps {
  todo: Todo;
  onRemove: (todoId: string) => void;
  toggleChecked: (todoId: string) => void;
  onEdit: (todoId: string) => void;
}

export default function ListItems({
  todo,
  onRemove,
  toggleChecked,
  onEdit,
}: ListItemsProps) {
  return (
    <>
      {/* 有 Array.map() 的地方才需要 key */}
      <li>
        <input
          type="checkbox"
          // 如果要能修改狀態: checked + onChange
          // 如果不能修改狀態: defaultChecked
          checked={todo.completed}
          onChange={() => {
            toggleChecked(todo.id);
          }}
        />
        <span
          style={{
            color: todo.completed ? 'gray' : 'inherit',
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {' ' + todo.text + ' '}
        </span>
        <button
          onClick={() => {
            onEdit(todo.id);
          }}
        >
          編輯
        </button>
        <button
          onClick={() => {
            if (confirm('Are you sure to remove this task?')) {
              onRemove(todo.id);
            }
          }}
        >
          X
        </button>
      </li>
    </>
  );
}
