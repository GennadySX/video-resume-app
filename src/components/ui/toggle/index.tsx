import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icons} from '../../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';

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

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
  },
  roundBounce: {
    width: 30,
    height: 30,
    position: 'relative',
    top: 1,
    resizeMode: 'contain',
  },
});
