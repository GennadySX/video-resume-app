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
}

export default function Container({
  linear,
  colors,
  children,
  style,
  unPadding,
  shadow,
}: IContainer) {
  return linear ? (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={[s.container, style]}>
      {children}
    </LinearGradient>
  ) : (
    <View style={[!unPadding && s.container, style]}>
      {shadow && (
       <Image source={AssetsBackground.shadow} style={s.shadowContent} />
      )}
      {children}
    </View>
  );
}
