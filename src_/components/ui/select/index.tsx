import React, {useState} from 'react';
import {Image, StyleProp, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Icons} from '../../../helpers/Assets';
import {selectPickerStyle as s} from './styles';

interface IValues {
  label: string;
  value: any;
}

export interface ISelectPicker {
  values: IValues[];
  selected?: string;
  onChange: (value: any, index?: number) => void;
  placeholder?: string;
  style?: StyleProp<any>;
}

export default function SelectPicker(props: ISelectPicker) {
  const [selectedValue, setSelectedValue] = useState(props.selected);

  return (
    <View style={[s.block, props.style]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value: any, index?: number) => {
          setSelectedValue(value);
          props.onChange(value, index);
        }}
        mode={'dialog'}
        style={s.container}>
        {props.placeholder && (
          <Picker.Item
            label={props.placeholder}
            value=""
            color={'rgba(39,39,39,0.8)'}
          />
        )}
        {props.values.map(({label, value}: IValues, index: number) => (
          <Picker.Item label={label} value={value} key={index} />
        ))}
      </Picker>
      <Image source={Icons.arrowDownPurple} style={s.selectIcon} />
    </View>
  );
}
