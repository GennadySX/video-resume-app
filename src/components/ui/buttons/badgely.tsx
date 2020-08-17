import React from 'react';
import {Image,  Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../helpers/Assets';
import {buttonBadgeStyle as s} from './styles';

export interface IButtonBadge {
  onClick?: () => void;
  badgeStyle?: any;
  badgeValue?: string;
  title?: string;
  icon?: any;
}

export default function ButtonBadge(props: IButtonBadge) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <LinearGradient
        colors={['#57248d', 'rgba(137,80,198,0.7)']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={s.dropBtn}>
        <Image source={Icons.plusWhite} style={s.btnIcon} />
        <Text style={s.btnTitle}>Добавить метро</Text>
        <Text style={s.badge}>1</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
