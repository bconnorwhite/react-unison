import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Union from './Union';
const SvgUri = React.lazy(() => import('react-native-svg-uri'));


export default class UnisonSvg extends Component {
  render() {
    let props = Object.assign({}, this.props);
    return (
      <Union
        {...props}
        web={<img />}
        native={<SvgUri />} />
    );
  }
}
