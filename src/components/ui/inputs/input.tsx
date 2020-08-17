import React from 'react';
import {View, TextInput} from 'react-native';
import {Width} from '../../../helpers/Normalizer';
import {inputUIStyle as s} from './styles';

export interface IInputUI {
  value: string;
  onChangeText: (s: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
}

export default function InputUI(props: IInputUI) {
  return (
    <View style={[s.block, props.fullWidth && {width: Width * 0.88}]}>
      <TextInput
        value={props.value}
        onChangeText={(e: string) => props.onChangeText(e)}
        placeholder={props.placeholder}
        placeholderTextColor={'rgba(39,39,39,0.8)'}
        style={s.input}
      />
    </View>
  );
}
