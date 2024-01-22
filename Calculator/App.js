import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);


  const addition = () => {
    setResult(Number(value1) + Number(value2));
  }

  const subtraction = () => {
    setResult(value1 - value2);
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text>Result: {result}</Text>
        <TextInput keyboardType='numeric' style={{ width: 200, borderColor: 'grey', borderWidth: 1, marginBottom: 5 }} onChangeText={input => setValue1(input)} />
        <TextInput keyboardType='numeric' style={{ width: 200, borderColor: 'grey', borderWidth: 1, marginBottom: 5 }} onChangeText={input => setValue2(input)} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button title='+' onPress={addition} />
        <Button title='-' onPress={subtraction} />
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
});
