import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import IntroBackground from '../../components/backgrounds/introBackground';
import {Height} from '../../helpers/Normalizer';
export interface IIntroScreen {}

const logo = require('../../assets/img/logo.png');

class IntroScreen extends React.Component<any, any> {
  constructor(props: IIntroScreen) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IntroBackground>
        <View style={s.block}>
          <Image source={logo} style={s.logo} />
          <Text style={s.introText}>Добро пожаловать!</Text>
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
    bottom: '10%',
    marginBottom: 40,
    width: Height * 0.2,
    height: Height * 0.2,
  },
  introText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 28,
  },
});

export default connect()(IntroScreen);
