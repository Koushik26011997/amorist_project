import React from 'react';
import { Text } from 'react-native';
import { normalizeSize } from '../../utility';

const Rtext = ({
  style = {},
  fontSize = 14.5,
  lgFontSize = 0,
  smFontSize = 0,
  fontStyle = 'normal',
  children,
  color = '#353535',
  fontWeight = 'normal',
  numberOfLines = 0,
  onPress = null,
}) => {
  const cusStyle = {
    fontStyle,
    color,
    // fontSize,
    fontSize: normalizeSize(fontSize, lgFontSize, smFontSize),
    // fontWeight,
    fontFamily: fontWeight == 'normal' ? 'MontserratRegular' : 'MontserratBold',
  };
  return (
    <Text
      style={[styles.default, cusStyle, style]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = {
  default: {},
};

export { Rtext };
