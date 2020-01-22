import React, { Component } from 'react';
import { Text } from 'react-native';
import Union from './Union';

export default class UnisonBlockquote extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          display: 'block',
          marginTop: '1em',
          marginBottom: '1em',
          marginLeft: '40px',
          marginRight: '40px'
        }}
        web={<code />}
        native={<Text />} />
    )
  }
}
