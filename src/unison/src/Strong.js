import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonStrong extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontWeight: 'bold'
        }}
        web={<strong />}
        native={<Text />} />
    )
  }
}
