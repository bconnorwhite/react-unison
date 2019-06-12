import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default {
  create: (style) => {
    if(process.browser) {
      return style;
    } else {
      return StyleSheet.create(style);
    }
  }
};
