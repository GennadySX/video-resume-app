import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Width} from "../../../helpers/Normalizer";

export interface IInputUI {
  value: string;
  onChangeText: (s: string) => void;
  label?: string;
}

export default function RadioUI(props: IInputUI) {
  const [val, setVal] = React.useState('');
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

const s = StyleSheet.create({
  block: {
    justifyContent: 'flex-start',
    width: Width * 0.8,
  },
  input: {
    backgroundColor: 'rgba(72, 19, 128, 0.02)',
    width: '100%',
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'rgba(72, 19, 128, 0.1)',
    borderWidth: 1,
    color: '#000000',
  },
});
