import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonH5 extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: "serif",
          display: 'block',
          fontSize: '0.83em',
          marginTop: '1.67em',
          marginBottom: '1.67em',
          marginLeft: 0,
          marginRight: 0,
          fontWeight: 'bold'
        }}
        web={<h5 />}
        native={<Text />} />
    )
  }
}
