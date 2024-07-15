import { TodoContext } from '@/context/todos-context';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

export default function ShowDone() {
  const { doneList, setDoneList } = useContext(TodoContext);
  const handleDoneDelete = (id: number) => {
    if (setDoneList)
      setDoneList(() => doneList!.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      {doneList?.map((todo) => {
        return (
          <View key={todo.id} style={{ backgroundColor: 'lightgreen' }}>
            <Text>{todo.title}</Text>
            <Text>
              {new Date(todo.initiateDate).toLocaleDateString('fa-IR')}
            </Text>
            <Button
              title='delete'
              color='red'
              onPress={() => handleDoneDelete(todo.id)}
            />
          </View>
        );
      })}
    </View>
  );
}
