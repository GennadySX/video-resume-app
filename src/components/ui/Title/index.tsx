import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Width} from '../../../helpers/Normalizer';

interface ITitle {
  text: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  fontSize?: any;
}

export default function Title({text, style, fontSize}: ITitle) {
  return (
    <View style={[s.titleBlock, style]}>
      <Text style={[s.text, {fontSize: fontSize || 27}]}>{text} </Text>
    </View>
  );
}

const s = StyleSheet.create({
  text: {
    fontFamily: 'Manrope-Bold',
    fontWeight: '600',
  },
  titleBlock: {
    position: 'relative',
    // backgroundColor: 'yellow',
    alignSelf: 'flex-start',
    width: Width * 0.7,
    marginBottom: 30,
  },
});
