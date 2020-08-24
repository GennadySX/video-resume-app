import React, {ReactChild, ReactChildren} from 'react';
import {Image, KeyboardAvoidingView, Platform} from 'react-native';

import {IntroBackgroundStyle as s} from './styles';

export interface IIntroBackgroundComponent {
  children?: ReactChild | ReactChildren | any;
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
