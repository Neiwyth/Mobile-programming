import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {

  const [msg, setMsg] = useState('');

  const showAlert = () => {
    Alert.alert('黒歴史 ' + msg);
  }


  return (
    <View style={styles.container}>
      <TextInput style={{ width: 200, borderColor: 'grey', borderWidth: 1 }} onChangeText={text => setMsg(text)} />
      <Button title='Sure' onPress={showAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
