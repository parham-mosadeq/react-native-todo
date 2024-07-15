import { Text, View, ScrollView } from 'react-native';
import ShowTodos from './show-todo';
import AddTodos from './add-todo';
import { TodoContextProvider } from '@/context/todos-context';
import ShowDone from './show-done';

export default function Index() {
  return (
    <TodoContextProvider>
      <View
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            height: 250,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AddTodos />
        </View>

        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            here are your todos
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <ShowTodos />
            <ShowDone />
          </View>
        </View>
      </View>
    </TodoContextProvider>
  );
}
