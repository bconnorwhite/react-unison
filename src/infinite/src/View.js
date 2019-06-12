import React, { Component } from 'react';
import { View } from 'react-native';

export default class InfiniteView extends Component {
  render() {
    if(process.browser) {
      return (
        <div {...this.props}>{this.props.children}</div>
      );
    } else {
      return (
        <View {...this.props}>{this.props.children}</View>
      );
    }
  }
}
