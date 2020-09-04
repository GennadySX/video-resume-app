/*
 * GennadySX @2020
 */

import React from 'react';
import {Text, TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import {Icons} from '../../../helpers/Assets';
import {IconsSvg} from '../../../helpers/IconsSVG';

export interface ICheckBox {
  checked?: boolean;
  title?: string;
  onCheck: (value?: boolean) => void;
}

export default function CheckBoxUI({checked, title, onCheck}: ICheckBox) {
  return (
    <TouchableOpacity
      onPress={() => onCheck(!checked)}
      style={[s.resultItem, s.block]}
      activeOpacity={1}>
      {title && <Text style={s.title}>{title}</Text>}
      <View style={s.container}>
        {checked &&
          React.createElement(IconsSvg.CheckIcon, {
            width: 30,
            height: 30,
            bottom: 0.5,
          })}
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultItem: {
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: 'rgba(39,39,39,0.2)',
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'Manrope-Medium',
  },
  container: {
    backgroundColor: 'rgba(218,218,218,0.68)',
    borderColor: 'rgba(218,218,218,0.88)',
    borderWidth: 1,
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  checkedIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    left: -1,
    top: -1,
  },
});
