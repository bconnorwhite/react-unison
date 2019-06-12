import React from 'react';
import Main from './src/Main.js';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
