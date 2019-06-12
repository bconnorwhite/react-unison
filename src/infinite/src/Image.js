import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class InfiniteView extends Component {
  render() {
    if(process.browser) {
      return (
        <img {...this.props}>{this.props.children}</img>
      );
    } else {
      return (
        <Image source={{uri: this.props.src}} />
      );
    }
  }
}
