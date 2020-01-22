import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonSamp extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: 'monospace'
        }}
        web={<samp />}
        native={<Text />} />
    )
  }
}
