import React, {ReactChild, ReactChildren} from 'react';
import {Image, KeyboardAvoidingView, Platform} from 'react-native';

import {IntroBackgroundStyle as s} from './styles';
import {IconsSvg} from "../../helpers/IconsSVG";
import {Height} from "../../helpers/Normalizer";

export interface IIntroBackgroundComponent {
  children?: ReactChild | ReactChildren | any;
  hiddenDot?: boolean;
  hideBack?: boolean
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

       {!props.hideBack && React.createElement(IconsSvg.Background_RegisterBottom, {...s.backImage, opacity: 0.5, height: Height * 0.4 })}
      {props.children}
    </KeyboardAvoidingView>
  );
}
