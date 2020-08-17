import React, {ReactChild, ReactChildren} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Icons} from '../../helpers/Assets';
import {headerStyle as s} from './styles';
import {useNavigation} from '@react-navigation/native';

export interface IHeader {
  backClick?: () => void;
  title?: string;
  hideBack?: boolean;
  rightBlock?: ReactChild | ReactChildren | any;
  style?: StyleProp<ViewStyle>
}

export default function Header({
  backClick,
  title,
  rightBlock,
  hideBack,
    style
}: IHeader) {
  const navigation = useNavigation();

  return (
    <View style={[s.block, style]}>
      {!hideBack && (
        <TouchableOpacity
          onPress={() => (backClick ? backClick() : navigation.goBack())}>
          <Image source={Icons.back} style={s.backImg} />
        </TouchableOpacity>
      )}
      <Text style={s.title}>{title}</Text>
      <View>{rightBlock && rightBlock}</View>
    </View>
  );
}
