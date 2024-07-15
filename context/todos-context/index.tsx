import React, { createContext, useState } from 'react';
import { TodosList } from '../../common/types/index';

interface TodoContextType {
  todoList: TodosList[];
  setTodoList: React.Dispatch<React.SetStateAction<TodosList[]>>;

  doneList?: TodosList[];
  setDoneList?: React.Dispatch<React.SetStateAction<TodosList[]>>;
}

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  setTodoList: () => {},
});

export function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todoList, setTodoList] = useState<TodosList[]>([]);
  const [doneList, setDoneList] = useState<TodosList[]>([]);

  return (
    <>
      <TodoContext.Provider
        value={{ todoList, setTodoList, doneList, setDoneList }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}
