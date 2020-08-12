import React, {useState} from 'react';
import {Image, StyleProp, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Width} from '../../../helpers/Normalizer';
import {Icons} from '../../../helpers/Assets';

interface IValues {
  label: string;
  value: any;
}

export interface ISelectPicker {
  values: IValues[];
  selected?: string;
  onChange: (value: any, index?: number) => void;
  placeholder?: string;
  style?: StyleProp<any>
}

export default function SelectPicker(props: ISelectPicker) {
  const [selectedValue, setSelectedValue] = useState(props.selected);

  return (
    <View style={[s.block, props.style]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value: any, index?: number) =>{
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

const s = StyleSheet.create({
  block: {
    width: Width * 0.87,
    borderRadius: 10,
    backgroundColor: 'rgba(72, 19, 128, 0.02)',
    borderColor: 'rgba(72, 19, 128, 0.1)',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  itemStyle: {
    fontFamily: 'Manrope-Medium',
  },
  selectIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 15,
    top: 17,
  },
});
