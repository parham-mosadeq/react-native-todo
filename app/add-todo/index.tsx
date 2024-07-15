import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { TodoContext } from '@/context/todos-context';

export default function AddTodos() {
  const [title, setTitle] = useState('');
  const { todoList, setTodoList } = useContext(TodoContext);

  const handleAddBtn = () => {
    if (!title.trim()) {
      return;
    }
    console.log(title);
    setTodoList((prev) => [
      ...prev,
      { title: title, id: Math.random(), initiateDate: Date.now() },
    ]);
    console.log(todoList);
    setTitle('');
  };

  return (
    <>
      <View
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: 'gray',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            width: 150,
            height: 150,
            backgroundColor: 'gray',
          }}
        >
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              letterSpacing: 3,
              width: '100%',
              marginTop: 4,
              marginBottom: 4,
            }}
          >
            add your todos here
          </Text>
          <TextInput
            style={{
              width: 220,
              borderRadius: 4,
              backgroundColor: 'white',
              borderColor: 'black',
              margin: 4,
            }}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <Button title='Submit Form' onPress={handleAddBtn} />
        </View>
      </View>
    </>
  );
}
