import { TodoContext } from '@/context/todos-context';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

export default function ShowTodos() {
  const { todoList, setTodoList, doneList, setDoneList } =
    useContext(TodoContext);

  const handleDelete = (id: number) => {
    const filtered = todoList.filter((todo) => todo.id !== id);
    setTodoList(filtered);
  };

  const handleDone = (id: number) => {
    if (setDoneList) {
      const filterToDone = todoList.filter((todo) => {
        if (todo.id === id) {
          handleDelete(todo.id);
          return (todo.isDone = !todo.isDone);
        }
      });

      setDoneList((prev) => [...prev, ...filterToDone]);
      console.log(doneList, 'doneList');
    }
  };

  return (
    <View
      style={{
        width: 250,
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {todoList.map((todo) => {
        return (
          <View key={todo.id}>
            <Text>{todo.title}</Text>
            <Text>
              {new Date(todo.initiateDate).toLocaleDateString('fa-IR')}
            </Text>
            <Button
              onPress={() => handleDelete(todo.id)}
              title='delete'
              color='red'
            />
            <Button
              onPress={() => handleDone(todo.id)}
              title='done'
              color='green'
            />
          </View>
        );
      })}
    </View>
  );
}
