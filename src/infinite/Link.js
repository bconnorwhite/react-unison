import React, { Component } from 'react';
import { Text, Linking } from 'react-native';

export default class InfiniteView extends Component {
  render() {
    if(process.browser) {
      return (
        <a {...this.props}>{this.props.children}</a>
      );
    } else {
      return (
        <Text onPress={()=>Linking.openURL(this.props.href)} {...this.props}>{this.props.children}</Text>
      );
    }
  }
}
