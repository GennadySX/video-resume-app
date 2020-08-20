import React from 'react';
import {StyleProp, Text, TouchableOpacity} from 'react-native';
import ToggleUI from '../toggle';
import {toggleButtonStyle as s} from './styles';

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
