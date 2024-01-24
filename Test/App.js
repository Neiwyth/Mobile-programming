import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList, Text } from 'react-native';

export default function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, todo]);
  }

  const itemSeparator = () => {
    return (<View style={{ height: 1, backgroundColor: 'black' }}></View>);
  }

  console.log(todos);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ fontSize: 12 }}
          placeholder='Type todo'
          onChangeText={text => setTodo(text)}
          value={todo}
        />
        <Button title='Add' onPress={handleAdd} />
      </View>
      <View style={{ flex: 4 }}>
        <FlatList
          data={todos}
          ItemSeparatorComponent={itemSeparator}
          renderItem={({ item }) =>
            <View style={styles.listItem}>
              <Text style={{ fontSize: 13 }}>Todo: </Text>
              <Text style={{ fontSize: 13 }}>{item}</Text>
            </View>}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listItem: {
    flexDirection: 'row',
    width: 300,
    padding: 10,
    backgroundColor: 'lightblue',
  },
});
