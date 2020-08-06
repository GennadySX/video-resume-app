import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import IntroBackground from '../../components/backgrounds/introBackground';
import {Height} from '../../helpers/Normalizer';
import Button, {buttonType} from '../../components/ui/buttons';

export interface IIntroScreen {}

const logo = require('../../assets/img/logo.png');

class IntroScreen extends React.Component<any, any> {
  constructor(props: IIntroScreen) {
    super(props);
    this.state = {};
  }

  render() {
    // @ts-ignore
    return (
      <IntroBackground>
        <View style={s.block}>
          <Image source={logo} style={s.logo} />
          <View style={s.blockBottom}>
            <Text style={s.introText}>Добро пожаловать!</Text>
            <Button
              onPress={() => {}}
              title={'Войти'}
              type={buttonType.purple}
              style={s.bottomButton}
            />
            <Button
              onPress={() => {}}
              title={'Продолжить без входа'}
              type={buttonType.transparent}
              textStyle={{color: 'gray'}}
            />
          </View>
        </View>
      </IntroBackground>
    );
  }
}

const s = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
    bottom: '0%',
    marginBottom: 40,
    width: Height * 0.2,
    height: Height * 0.2,
  },
  introText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 28,
  },
  bottomButton: {
    marginTop: 30,
  },
  blockBottom: {
    position: 'relative',
    top: Height * 0.14,
  },
});

export default connect()(IntroScreen);
