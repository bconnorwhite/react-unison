import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonH1 extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: "serif",
          display: 'block',
          fontSize: '2em',
          marginTop: '0.67em',
          marginBottom: '0.67em',
          marginLeft: 0,
          marginRight: 0,
          fontWeight: 'bold'
        }}
        web={<h1 />}
        native={<Text />} />
    )
  }
}
