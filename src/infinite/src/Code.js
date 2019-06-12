import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import Union from './Union';

export default class InfiniteCode extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: Platform.OS == 'ios' ? 'Menlo' : 'monospace'
        }}
        web={<code />}
        native={<Text />} />
    )
  }
}
