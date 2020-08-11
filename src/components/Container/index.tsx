import React, {ReactChild, ReactChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export interface IContainer {
  children: ReactChildren | ReactChild;
}

export default function Container(props: IContainer) {
  return <View style={s.container}>{props.children}</View>;
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
