import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Union from './Union';

export default class InfiniteImg extends Component {
  render() {
    return (
      <Union
        {...this.props}
        defaultStyle={{
          display: "inline-block"
        }}
        web={<img />}
        native={<Image source={{uri: this.props.src}} />} />
    );
  }
}
