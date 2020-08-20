import React from 'react';
import {View, TextInput} from 'react-native';
import {radioUIStyle as s} from './styles';

export interface IInputUI {
  value: string;
  onChangeText: (s: string) => void;
  label?: string;
}

export default function RadioUI(props: IInputUI) {
  return (
    <View style={s.block}>
      <TextInput
        value={props.value}
        onChangeText={(e: string) => props.onChangeText(e)}
        placeholder={props.label}
        placeholderTextColor={'rgba(39,39,39,0.8)'}
        style={s.input}
      />
    </View>
  );
}
