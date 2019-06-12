import React, { Component } from 'react';
import { Text } from 'react-native';

export default class InfiniteView extends Component {
  render() {
    if(process.browser) {
      const tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "code"];
      if(tags.indexOf(this.props.tag) >= 0) {
        return (
          React.createElement(this.props.tag, this.props, this.props.children)
        );
      } else {
        return (
          <Text {...this.props}>{this.props.children}</Text>
        );
      }
    } else {
      return (
        <Text {...this.props}>{this.props.children}</Text>
      );
    }
  }
}
