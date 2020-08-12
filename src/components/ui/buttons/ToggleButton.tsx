import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ToggleUI from '../toggle';
import {Width} from '../../../helpers/Normalizer';

export interface IToggleButton {
  title: string;
  onClick: (e: boolean) => void;
  style?: StyleProp<any>;
  value: boolean;
}

export default function ToggleButton({
  title,
  onClick,
  style,
  value,
}: IToggleButton) {
  return (
    <TouchableOpacity
      onPress={() => onClick(!value)}
      activeOpacity={1}
      style={[s.container, style]}>
      <Text style={s.label}>{title}</Text>
      <ToggleUI value={value} onClick={() => onClick(!value)} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    width: Width * 0.87,
    backgroundColor: 'rgba(72, 19, 128, 0.02)',
    borderColor: 'rgba(72, 19, 128, 0.1)',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  label: {
    fontFamily: 'Manrope-Medium',
    color: 'rgba(0,0,0, 0.7)',
    width: '80%',
  },
});
