import React from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import IntroBackground from '../../components/backgrounds/introBackground';
import Button, {buttonType} from '../../components/ui/buttons';
import {Height, Width} from '../../helpers/Normalizer';
import Title from "../../components/Title";

export interface IRegisterScreen {}

const logoSmall = require('../../assets/img/logoSmall.png');

class RegisterScreen extends React.Component<any, any> {
  constructor(props: IRegisterScreen) {
    super(props);
    this.state = {
      number: null,
    };
  }

  render() {
    const {number} = this.state;
    return (
      <IntroBackground>
        <View style={s.block}>
          <Image source={logoSmall} style={s.logoSmall} />
          <Title text={'Войти'} />
           <TextInput
            style={s.textInput}
            value={number}
            placeholder={'Номер телефона'}
            onChangeText={(e: string) => this.setState({number: e})}
          />
          <Button title={'Далее'} onPress={() => {}} type={buttonType.purple} style={s.bottomButton} />
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
  logoSmall: {
    position: 'absolute',
    top: '-2%',
    marginBottom: 40,
    width: Width * 0.27,
    height: Width * 0.27,
    resizeMode: 'contain',
  },
  bottomButton: {
    marginTop: 20,
  },
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: Width * 0.8,
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    marginBottom: 20,
  },
});

export default connect()(RegisterScreen);
