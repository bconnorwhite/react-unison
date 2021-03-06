import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonH3 extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: "serif",
          display: 'block',
          fontSize: '1.17em',
          marginTop: '1em',
          marginBottom: '1em',
          marginLeft: 0,
          marginRight: 0,
          fontWeight: 'bold'
        }}
        web={<h3 />}
        native={<Text />} />
    )
  }
}
