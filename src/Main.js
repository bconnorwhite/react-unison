import React, { Component } from 'react';
import { View, Text, Link, Style, H1 } from './infinite';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <H1>React Infinite</H1>
          <Text style={styles.text}>
            Edit <Text tag="code">src/App.js</Text> and save to reload.
          </Text>
          <Link style={styles.link} href="https://reactjs.org">
            Learn React
          </Link>
        </View>
      </View>
    );
  }
}

const styles = Style.create({
  app: {
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  header: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: '1.5rem',
    textAlign: 'center',
    paddingBottom: "1rem"
  },
  link: {
    color: "#61dafb"
  }
});
