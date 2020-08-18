import React, {ReactChild, ReactChildren} from 'react';
import {StyleProp, View, ViewStyle, Text, Image} from 'react-native';
import {containerStyle as s} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Assets, AssetsBackground} from "../../helpers/Assets";

export interface IContainer {
  unPadding?: boolean;
  linear?: boolean;
  shadow?: boolean;
  colors?: string[] | any;
  children: ReactChildren | ReactChild | any;
  style?: StyleProp<ViewStyle>;
  paddingTop?: boolean
}

export default function Container({
  linear,
  colors,
  children,
  style,
  unPadding,
  shadow, paddingTop

}: IContainer) {
  return linear ? (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={[s.container, style, paddingTop && {paddingTop: 20}]}>
      {children}
    </LinearGradient>
  ) : (
    <View style={[!unPadding && s.container, style, paddingTop && {paddingTop: 20}]}>
      {shadow && (
       <Image source={AssetsBackground.shadow} style={s.shadowContent} />
      )}
      {children}
    </View>
  );
}
