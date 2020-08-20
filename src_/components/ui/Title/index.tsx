import React from 'react';
import {Text, View} from 'react-native';
import {titleStyle as s} from './styles';
import {Width} from "../../../helpers/Normalizer";

export enum FontType {
  bold= "Manrope-Bold",
  medium= 'Manrope-Medium',
  thin = 'Manrope-Thin'

}

interface ITitle {
  text: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  fontSize?: any;
  fontType?: FontType
}

export default function Title({text, style, fontSize, left, fontType, center}: ITitle) {
  return (
    <View style={[s.titleBlock, style, left && {paddingLeft: 0}, center && {justifyContent: 'center', width: Width * 0.9}]}>
      <Text style={[s.text, {fontSize: fontSize || 27}, {fontFamily: fontType ? fontType :  FontType.bold}, center && {textAlign: 'center'} ]}>{text} </Text>
    </View>
  );
}
