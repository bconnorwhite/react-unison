import React, { Component } from 'react';
import { View } from 'react-native';
import Union from './Union';

export default class UnisonDiv extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          display: 'block'
        }}
        web={<div />}
        native={<View />} />
    )
  }
}
