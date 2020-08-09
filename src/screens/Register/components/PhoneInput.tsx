import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {styles} from '../../../styles/style';
import Title from '../../../components/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
import IntroBackground from '../../../components/Background/introBackground';
import {Width} from '../../../helpers/Normalizer';
import TextInputMask from 'react-native-text-input-mask';

const logoSmall = require('../../../assets/img/logoSmall.png');

export interface IPhoneInput {
  onSubmit: (phone: string) => void;
}

export default function PhoneInput({onSubmit}: IPhoneInput) {
  const [number, setNumber] = React.useState('');

  return (
    <View style={s.block}>
      <Image source={logoSmall} style={s.logoSmall} />
      <Title text={'Войти'} />
      <TextInputMask
        onChangeText={(formatted: string, extracted: string) => {
          setNumber(formatted);
          //console.log(formatted); // +1 (123) 456-78-90
          //console.log(extracted); // 1234567890
        }}
        placeholder={'Номер телефона'}
        style={s.textInput}
        value={number}
        mask={'+7 ([000]) [000] [00] [00]'}
      />
      <Button
        title={'Далее'}
        onPress={() => onSubmit(number)}
        type={buttonType.purple}
        style={s.bottomButton}
      />
    </View>
  );
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
