import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Icons} from '../../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {toggleUIStyle as s} from './styles';

export interface IToggleUI {
  value: boolean;
  onClick?: (value: boolean) => void;
}

export default function ToggleUI({value, onClick}: IToggleUI) {
  return (
    <TouchableOpacity
      onPress={() => (onClick ? onClick(!value) : {})}
      activeOpacity={1}>
      <LinearGradient
        colors={
          value
            ? ['rgba(87,36,141,0.62)', 'rgba(72,19,128,0.45)']
            : ['rgba(72,19,128,0.2)', 'rgba(72,19,128,0.2)']
        }
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={[
          s.container,
          {justifyContent: value ? 'flex-end' : 'flex-start'},
        ]}>
        <Image source={Icons.oval} style={s.roundBounce} />
      </LinearGradient>
    </TouchableOpacity>
  );
}
