import React, { Component, Suspense } from 'react';
import { Text } from 'react-native';
import Style from './Style';
import deepmerge from 'deepmerge';

export default class UnisonUnion extends Component {
  render() {
    let props = Object.assign({}, this.props);
    let styles = Style.create({
      default: this.props.defaultStyle || {}
    });
    props.style = deepmerge(styles.default, this.props.style || {});
    delete props.defaultStyle;
    delete props.web;
    delete props.native;
    if(process.browser) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          {React.cloneElement(this.props.web, props, this.props.children)}
        </Suspense>
      );
    } else {
      return(
        <Suspense fallback={<Text>Loading...</Text>}>
          {React.cloneElement(this.props.native, props, this.props.children)}
        </Suspense>
      );
    }
  }
}
