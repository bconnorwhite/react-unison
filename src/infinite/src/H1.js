import React, { Component } from 'react';
import deepmerge from 'deepmerge';
import { Text } from 'react-native';
import Style from './Style';

export default class InfiniteH1 extends Component {
  render() {
    let props = Object.assign({}, this.props);
    props.style = deepmerge(styles.h1, this.props.style || {});
    if(process.browser) {
      return (
        <h1 {...props}>{this.props.children}</h1>
      );
    } else {
      return (
        <Text {...props}>{this.props.children}</Text>
      );
    }
  }
}

const styles = Style.create({
  h1: {
    display: 'block',
    fontSize: '2em',
    marginTop: '0.67em',
    marginBottom: '0.67em',
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold'
  }
});
