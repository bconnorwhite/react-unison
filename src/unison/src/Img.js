import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Union from './Union';

export default class UnisonImg extends Component {
  render() {
    let props = Object.assign({}, this.props);
    if(!process.browser) {
      if(typeof props.src === "string") {
        props.source = {
          uri: props.src
        };
      } else {
        props.source = props.src;
      }
      delete props.src;
    }
    return (
      <Union
        {...props}
        defaultStyle={{
          display: "inline-block"
        }}
        web={<img />}
        native={<Image />} />
    );
  }
}
