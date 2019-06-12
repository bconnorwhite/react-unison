import React, { Component } from 'react';
import Style from './Style';
import deepmerge from 'deepmerge';

export default class InfiniteUnion extends Component {
  render() {
    let props = Object.assign({}, this.props);
    let styles = Style.create({
      default: this.props.defaultStyle
    });
    props.style = deepmerge(styles.default, this.props.style || {});
    if(process.browser) {
      return React.cloneElement(this.props.web, props, this.props.children);
    } else {
      return React.cloneElement(this.props.native, props, this.props.children);
    }
  }
}
