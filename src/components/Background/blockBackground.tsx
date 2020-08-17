import React, {ReactChild, ReactChildren} from 'react';
import {Animated, Image, ViewStyle} from 'react-native';
import View = Animated.View;
import {AssetsBackground} from '../../helpers/Assets';
import {blockBackgroundStyle as s} from './styles';

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
