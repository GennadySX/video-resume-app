import React from 'react';
import {Text, View} from 'react-native';
import {titleStyle as s} from './styles';

interface ITitle {
  text: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  fontSize?: any;
}

export default function Title({text, style, fontSize, left}: ITitle) {
  return (
    <View style={[s.titleBlock, style, left && {paddingLeft: 0}]}>
      <Text style={[s.text, {fontSize: fontSize || 27}]}>{text} </Text>
    </View>
  );
}
