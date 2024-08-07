'use client';
import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';
import { start } from 'repl';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      completeTodo(todo.id);
    });
  };

  return <div onClick={handleClick}>{todo.content}</div>;
};

export default Todo;
