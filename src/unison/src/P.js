import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonP extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          fontFamily: "serif",
          display: 'block',
          marginTop: '1em',
          marginBottom: '1em',
          marginLeft: 0,
          marginRight: 0
        }}
        web={<p />}
        native={<Text />} />
    )
  }
}
