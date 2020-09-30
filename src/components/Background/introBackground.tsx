import React, {ReactChild, ReactChildren} from 'react';
import {Image, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {IntroBackgroundStyle as s} from './styles';
import {IconsSvg} from '../../helpers/IconsSVG';
import {Height, Width} from '../../helpers/Normalizer';

export interface IIntroBackgroundComponent {
  children?: ReactChild | ReactChildren | any;
  hiddenDot?: boolean;
  hideBack?: boolean;
  introBottom?: boolean;
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
      {!props.hiddenDot && <Image source={tr} style={[s.backImage, s.tr]} />}

      {props.introBottom && React.createElement(IconsSvg.Background_IntroBottom, xs.btm)}

      {!props.introBottom && !props.hideBack &&
        React.createElement(IconsSvg.Background_RegisterBottom, xs.btm)}
      {props.children}
    </KeyboardAvoidingView>
  );
}

const xs = StyleSheet.create({
  btm: {
    ...s.backImage,
    opacity: 0.5,
    height: Height * 0.55,
    width: Width,
  },
});
