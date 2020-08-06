import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Width} from '../helpers/Normalizer';

interface ITitle {
  text: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
}

export default function Title({text}: ITitle) {
  return (
    <View style={s.titleBlock}>
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
    left: Width * -0.28,
    marginBottom: 40,
  },
});
