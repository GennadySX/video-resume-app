import React from 'react';
import {View} from 'react-native';
import {tabStyle as s} from '../styles/tabStyle';

export interface ITab {}

export default function Tab(props: ITab) {
  return <View style={s.block} />;
}
