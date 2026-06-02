'use client';

import { Todo } from '../_types/todo';
import ListItems from './list-items';

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
            <ListItems
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              toggleChecked={toggleChecked}
            ></ListItems>
          );
        })}
      </ul>
    </>
  );
}
