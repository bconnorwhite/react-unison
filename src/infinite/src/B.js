import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class InfiniteB extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontWeight: 'bold'
        }}
        web={<b />}
        native={<Text />} />
    )
  }
}
