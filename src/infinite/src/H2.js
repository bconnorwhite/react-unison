import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class InfiniteH2 extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          display: 'block',
          fontSize: '1.5em',
          marginTop: '0.83em',
          marginBottom: '0.83em',
          marginLeft: 0,
          marginRight: 0,
          fontWeight: 'bold'
        }}
        web={<h2 />}
        native={<Text />} />
    )
  }
}
