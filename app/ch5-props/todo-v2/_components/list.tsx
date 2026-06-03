'use client';

import { Todo } from '../_types/todo';
import ListItems from './list-items';
import ListEditForm from './list-edit-form';

export interface ListProps {
  todos?: Todo[];
  onRemove: (todoId: string) => void;
  toggleChecked: (todoId: string) => void;
  onEdit: (todoId: string) => void;
  onUpdate: (todoId: string, updateText: string) => void;
}

export default function List({
  todos = [],
  onRemove,
  toggleChecked,
  onEdit,
  onUpdate,
}: ListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return todo.isEditing ? (
            <ListEditForm
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
            ></ListEditForm>
          ) : (
            <ListItems
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              toggleChecked={toggleChecked}
              onEdit={onEdit}
            ></ListItems>
          );
        })}
      </ul>
    </>
  );
}
