import React, { Component } from 'react';
import { Div, A, Style, H1, P, Code } from './unison';

export default class Main extends Component {
  render() {
    return (
      <Div style={styles.app}>
        <Div style={styles.header}>
          <H1 style={styles.h1}>React Unison</H1>
          <P style={styles.text}>
            Edit <Code>src/App.js</Code> and save to reload.
          </P>
          <A style={styles.a} href="https://reactjs.org">
            Learn React
          </A>
        </Div>
      </Div>
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
  h1: {
    color: 'white'
  },
  text: {
    color: "white",
    fontSize: '1.5rem',
    textAlign: 'center',
    paddingBottom: "1rem"
  },
  a: {
    color: "#61dafb"
  }
});
