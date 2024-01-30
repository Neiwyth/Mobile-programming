import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState([]);



  const handleOperation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let thisResult;

      if (operation === '+') {
        thisResult = `${num1} ${operation} ${num2} = ${num1 + num2}`;
        setOperation('+');
      } else if (operation === '-') {
        thisResult = `${num1} ${operation} ${num2} = ${num1 - num2}`;
        setOperation('-');
      }

      setResult(thisResult);
      setHistory([...history, thisResult]);

    } else {
      Alert.alert('Please input a number');
    }
  };

  return (
    <View style={styles.container}>

      <View style={{ alignItems: 'center', marginTop: 70 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Result: {result}</Text>
        <TextInput keyboardType='numeric' style={styles.textbox} onChangeText={input => setValue1(input)} />
        <TextInput keyboardType='numeric' style={styles.textbox} onChangeText={input => setValue2(input)} />
      </View>

      <View style={styles.button}>
        <Button title='+' onPress={() => handleOperation('+')} />
        <Button title='-' onPress={() => handleOperation('-')} />
      </View>

      <View style={styles.flatlist}>
        {history.length > 0 && <Text>History</Text>}
        <FlatList
          data={history}
          renderItem={({ item }) =>
            <View>
              <Text>{item}</Text>
            </View>} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  textbox: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 5,
  },

  flatlist: {
    flex: 4,
    alignItems: 'center',
    marginTop: 30,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 15,
    marginTop: 15,
  },
});