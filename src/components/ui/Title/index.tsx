import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {titleStyle as s} from './styles';
import {Width} from '../../../helpers/Normalizer';

export enum FontType {
  bold = 'Manrope-Bold',
  medium = 'Manrope-Medium',
  thin = 'Manrope-Thin',
}

interface ITitle {
  unBottom?: boolean;
  bottom?: number;
  text: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle> | any;
  fontSize?: any;
  fontType?: FontType;
}

export default function Title({
  text,
  style,
  fontSize,
  left,
  fontType,
  center,
  unBottom,
  bottom,
  textStyle,
}: ITitle) {
  return (
    <View
      style={[
        s.titleBlock,
        style,
        left && {paddingLeft: 0},
        center && {justifyContent: 'center', width: Width * 0.9},
        unBottom && {marginBottom: 0},
        bottom && {marginBottom: bottom},
      ]}>
      <Text
        style={[
          s.text,
          {fontSize: fontSize || 27},
          {fontFamily: fontType ? fontType : FontType.bold},
          center && {textAlign: 'center'},
          textStyle,
        ]}>
        {text}{' '}
      </Text>
    </View>
  );
}
