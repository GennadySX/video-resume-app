import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Width} from '../helpers/Normalizer';

interface ITitle {
  text: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
}

export default function Title({text, style}: ITitle) {
  return (
    <View style={[s.titleBlock, style]}>
      <Text style={s.text}>{text} </Text>
    </View>
  );
}

const s = StyleSheet.create({
  text: {
    fontSize: 27,
    fontFamily: 'Manrope-Bold',
    fontWeight: '600',
  },
  titleBlock: {
    position: 'relative',
    left: -20,
    width: Width * 0.7,
    marginBottom: 30,
  },
});
