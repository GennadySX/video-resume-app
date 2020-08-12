import React, {ReactChild, ReactChildren} from 'react';
import {Animated, Image, StyleSheet, ViewStyle} from 'react-native';
import View = Animated.View;
import {AssetsBackground} from '../../helpers/Assets';
import {Width} from '../../helpers/Normalizer';

export interface IblockBackground {
  children: ReactChildren | ReactChild | any;
  style?: ViewStyle;
}

export default function blockBackground({children, style}: IblockBackground) {
  return (
    <View>
      <Image source={AssetsBackground.roundBackground} style={s.background} />
      <View style={[s.block, style]}>{children}</View>
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    position: 'relative',
    zIndex: 99,
  },
  background: {
    position: 'absolute',
    width: Width,
    resizeMode: 'contain',
    height: '140%',
    zIndex: 1,
  },
});
