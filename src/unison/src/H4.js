import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonH4 extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: "serif",
          display: 'block',
          marginTop: '1.33em',
          marginBottom: '1.33em',
          marginLeft: 0,
          marginRight: 0,
          fontWeight: 'bold'
        }}
        web={<h4 />}
        native={<Text />} />
    )
  }
}
