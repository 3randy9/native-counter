import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
    Alert.alert('プラス1されました！');
  };

  const countDown = () => {
    setCount(count - 1);
    Alert.alert('マイナス1されました！');
  };

  const ButtonUp = () => {
    return (
      <View style={styles.buttonUp}>
        <Button onPress={countUp} title='Count Up' color='#fff' />
      </View>
    );
  };

  const ButtonDown = () => {
    return (
      <View style={styles.buttonDown}>
        <Button onPress={countDown} title='Count Down' color='#fff' />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>react-native with expo app!</Text>
      <View style={styles.flex}>
        <ButtonUp />
        <ButtonDown />
      </View>
      <Text style={styles.text} accessibilityLabel='Count State'>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32
  },
  text: {
    fontSize: 34
  },
  flex: {
    flexDirection: 'row',
    marginTop: 16
  },
  buttonUp: {
    width: 160,
    margin: 4,
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 20
  },
  buttonDown: {
    width: 160,
    margin: 4,
    padding: 16,
    backgroundColor: '#dc3545',
    borderRadius: 20
  }
});

export default App;
