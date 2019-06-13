import React, { Component } from 'react';
import { Text, Linking } from 'react-native';
import Union from './Union';

export default class InfiniteA extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          color: "#0000EE",
          textDecoration: "underline"
        }}
        web={<a></a>}
        native={<Text onPress={()=>Linking.openURL(this.props.href)}></Text>} />
    );
  }
}
