import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../helpers/Assets';
import {Width} from '../../../helpers/Normalizer';

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

const s = StyleSheet.create({
  dropBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Width * 0.87,
    borderRadius: 10,
    padding: 15,
      marginBottom: 10
  },
  badge: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 50,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  btnIcon: {
    maxWidth: 17,
    maxHeight: 17,
    marginLeft: 5,
    marginRight: 10,
    resizeMode: 'contain',
  },
  btnTitle: {color: '#fafafa', width: '80%'},
});
