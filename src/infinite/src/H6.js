import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class InfiniteH6 extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          display: 'block',
          fontSize: '0.67em',
          marginTop: '2.33em',
          marginBottom: '2.33em',
          marginLeft: 0,
          marginRight: 0,
          fontWeight: 'bold'
        }}
        web={<h6 />}
        native={<Text />} />
    )
  }
}
