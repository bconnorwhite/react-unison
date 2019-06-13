import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class InfiniteI extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontStyle: 'italic'
        }}
        web={<i />}
        native={<Text />} />
    )
  }
}
