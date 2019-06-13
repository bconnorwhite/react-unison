import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class InfiniteEm extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontStyle: 'italic'
        }}
        web={<em />}
        native={<Text />} />
    )
  }
}
