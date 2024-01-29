import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [userInput, setUserInput] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [guessList, setGuessList] = useState([]);
  const [guessText, setGuessText] = useState('Choose a number between 1 - 100');



  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);


  const handleGuess = () => {

    if (userInput == randomNumber && userInput >= 1 && userInput <= 100) {

      setGuessList([...guessList, userInput]);
      Alert.alert(`You guessed the right number! This was try ${guessList.length + 1}. You can try to guess a new number now.`);
      setGuessList([]);
      generateRandomNumber();
      setGuessText('Choose a number between 1 - 100');

    } else if (userInput > randomNumber && userInput >= 1 && userInput <= 100) {

      setGuessText(`Your guess is too high`);
      setGuessList([...guessList, userInput]);

    } else if (userInput < randomNumber && userInput >= 1 && userInput <= 100) {

      setGuessText(`Your guess is too low`);
      setGuessList([...guessList, userInput]);

    } else {

      Alert.alert('Pick a number from the specified range');

    }

    setUserInput('');
  }

  console.log(randomNumber);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{guessText}</Text>
        <TextInput keyboardType='numeric' onChangeText={input => setUserInput(input)} value={userInput} style={styles.textbox} />
        <Button title='Guess' onPress={handleGuess} />
      </View>
      <View style={{ flex: 4, marginTop: 10 }}>
        <Text>Your guesses</Text>
        <FlatList
          horizontal
          data={guessList}
          renderItem={({ item }) =>
            <View style={styles.listItem}>
              <Text>{item},</Text>
            </View>} />
      </View>
      <StatusBar style='auto' />
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
    margin: 2,
  },

  textbox: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 5,
  },

  text: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
  }
});
