import React from 'react';
import {
  Image,
  StyleSheet,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Width} from '../../../helpers/Normalizer';
import {Icons} from '../../../helpers/Assets';

export enum buttonType {
  purple = 0,
  black = '#000000',
  white = '#fafafa',
  transparent = 'transparent',
  orange = '#FF9800',
  lightred = '#F44336',
  lightblue = '#4B729F',
  blue = '#3B5999',
}

export interface IButton {
  title: string;
  onPress: () => void;
  type: buttonType;
  icon?: Icons;
  style?: StyleSheetProperties | any;
  textStyle?: StyleSheetProperties | any;
  shadow?: boolean;
}

export default function Button(props: IButton) {
  return props.type === buttonType.purple ? (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[s.block, props.style]}>
      <LinearGradient
        colors={['#481380', 'rgba(72,19,128,0.7)']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={s.btn}>
        {props.icon && <Image source={props.icon} style={s.btnIcon} />}
        <Text style={s.btnText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        s.block,
        s.btn,
        props.style,
        props.shadow && s.shadow,
        props.type === buttonType.white && {backgroundColor: 'white'},
      ]}>
      {props.icon && <Image source={props.icon} style={s.btnIcon} />}
      <Text
        style={[
          s.btnText,
          props.textStyle,
          props.type === buttonType.white && {color: '#000000'},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  block: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    width: Width * 0.8,
  },
  btnIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 15,
  },
  btnText: {
    fontSize: 17,
    fontFamily: 'Manrope-Medium',
    color: '#fafafa',
  },
  shadow: {
    shadowColor: 'rgba(49,49,49,0.14)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
  },
});
