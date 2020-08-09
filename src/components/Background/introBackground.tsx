import React, {ReactChild, ReactChildren} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Height, Width} from '../../helpers/Normalizer';

export interface IIntroBackgroundComponent {
  children?: ReactChild | ReactChildren;
}

const tl = require('../../assets/img/background/top-left.png');
const tr = require('../../assets/img/background/top-right.png');
const br = require('../../assets/img/background/bottom-round.png');

export default function IntroBackground(props: IIntroBackgroundComponent) {
  return (
    <KeyboardAvoidingView
      style={s.block}
      enabled={false}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <Image source={tl} style={[s.backImage, s.tl]} />
      <Image source={tr} style={[s.backImage, s.tr]} />
      <Image source={br} style={[s.backImage, s.br]} />
      {props.children}
    </KeyboardAvoidingView>
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
    height: Width * 0.3,
    width: Width * 0.25,
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
