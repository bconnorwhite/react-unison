import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonCode extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: 'monospace'
        }}
        web={<code />}
        native={<Text />} />
    )
  }
}
