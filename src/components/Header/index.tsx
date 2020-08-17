import React, {ReactChild, ReactChildren} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Icons} from '../../helpers/Assets';
import {headerStyle as s} from './styles';
import {useNavigation} from '@react-navigation/native';

export interface IHeader {
  backClick?: () => void;
  title?: string;
  hideBack?: boolean;
  rightBlock?: ReactChild | ReactChildren | any;
}

export default function Header({
  backClick,
  title,
  rightBlock,
  hideBack,
}: IHeader) {
  const navigation = useNavigation();

  return (
    <View style={s.block}>
      {!hideBack && (
        <TouchableOpacity
          onPress={() => (backClick ? backClick() : navigation.goBack())}>
          <Image source={Icons.back} style={s.backImg} />
        </TouchableOpacity>
      )}
      <Text>{title}</Text>
      <View>{rightBlock && rightBlock}</View>
    </View>
  );
}
