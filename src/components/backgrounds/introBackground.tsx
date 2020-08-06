import React, {ReactChild, ReactChildren} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Height, Width} from '../../helpers/Normalizer';

export interface IIntroBackgroundComponent {
  children?: ReactChild | ReactChildren;
}

const tl = require('../../assets/img/background/top-left.png');
const tr = require('../../assets/img/background/top-right.png');
const br = require('../../assets/img/background/bottom-round.png');

export default function IntroBackground(props: IIntroBackgroundComponent) {
  return (
    <View style={s.block}>
      <Image source={tl} style={[s.backImage, s.tl]} />
      <Image source={tr} style={[s.backImage, s.tr]} />
      <Image source={br} style={[s.backImage, s.br]} />
      {props.children}
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    bottom: 0,
  },
  backImage: {
    position: 'absolute',
  },
  tl: {
    left: 0,
      height: '30%',
      width: '30%',
  },
  tr: {
    top: '10%',
    right: '4%',
  },
  br: {
    top: '50%',
    resizeMode: 'cover',
  },
});
