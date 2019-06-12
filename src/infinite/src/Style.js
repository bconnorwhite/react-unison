import { StyleSheet } from 'react-native';

function sizeMap(size) { //TODO: support em, vh, vw
  if(isNaN(size)) {
    if(size.includes("px")) {
      return parseInt(size);
    } else if(size.includes("rem")) {
      return parseInt(size) * 16;
    } else if(size.includes("em")) {
      return parseInt(size) * 16;
    }
  }
  return size;
}

function displayMap(display) {
  return display == "flex" || display == "none" ? display : "flex";
}

function textDecorationMap(textDecoration) {
  return {
    alias: "textDecorationLine",
    value: textDecoration.replace("overline", "")
  }
}

function map(styles, guide) {
  let retval = {};
  Object.keys(styles).forEach((key) => {
    if(guide[key] instanceof Function) {
      let result = guide[key](styles[key]);
      if(result instanceof Object && result.alias) {
        retval[result.alias] = result.value;
      } else {
        retval[key] = result;
      }
    } else if(styles[key] instanceof Object && guide[key] instanceof Object) {
      retval[key] = map(styles[key], guide[key]);
    } else {
      retval[key] = guide[key] ? guide[key] : styles[key];
    }
  });
  return retval;
}

const styleToNative = (style) => map(style, {
  borderBottomWidth: sizeMap, //Layout
  borderEndWidth: sizeMap,
  borderLeftWidth: sizeMap,
  borderRightWidth: sizeMap,
  borderStartWidth: sizeMap,
  borderTopWidth: sizeMap,
  borderWidth: sizeMap,
  bottom: sizeMap,
  display: displayMap,
  end: sizeMap,
  height: sizeMap,
  left: sizeMap,
  margin: sizeMap,
  marginBottom: sizeMap,
  marginEnd: sizeMap,
  marginHorizontal: sizeMap,
  marginLeft: sizeMap,
  marginRight: sizeMap,
  marginStart: sizeMap,
  marginTop: sizeMap,
  marginVertical: sizeMap,
  maxHeight: sizeMap,
  maxWidth: sizeMap,
  minHeight: sizeMap,
  padding: sizeMap,
  paddingBottom: sizeMap,
  paddingEnd: sizeMap,
  paddingHorizontal: sizeMap,
  paddingLeft: sizeMap,
  paddingRight: sizeMap,
  paddingStart: sizeMap,
  paddingTop: sizeMap,
  paddingVertical: sizeMap,
  right: sizeMap,
  start: sizeMap,
  top: sizeMap,
  width: sizeMap,
  shadowOffset: { //Shadow
    width: sizeMap,
    height: sizeMap
  },
  shadowRadius: sizeMap,
  borderBottomEndRadius: sizeMap, //View
  borderBottomLeftRadius: sizeMap,
  borderBottomRightRadius: sizeMap,
  borderBottomStartRadius: sizeMap,
  borderRadius: sizeMap,
  borderTopEndRadius: sizeMap,
  borderTopLeftRadius: sizeMap,
  borderTopRightRadius: sizeMap,
  borderTopStartRadius: sizeMap,
  textShadowOffset: { //Text
    width: sizeMap,
    height: sizeMap
  },
  fontSize: sizeMap,
  textDecoration: textDecorationMap,
  textShadowRadius: sizeMap
});

export default {
  create: (styles) => {
    if(process.browser) {
      return styles;
    } else {
      let nativeStyles = {};
      Object.keys(styles).forEach((key) => {
        nativeStyles[key] = styleToNative(styles[key]);
      });
      return StyleSheet.create(nativeStyles);
    }
  }
};
