import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Index from '../../../components/ui/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
import TextInputMask from 'react-native-text-input-mask';
import auth from '@react-native-firebase/auth';
import {phoneInputStyle as s} from '../styles/phoneInputStyle';

const logoSmall = require('../../../assets/img/logoSmall.png');

export interface IPhoneInput {
  onSubmit: (phone: string) => void;
}

export default function PhoneInput({onSubmit}: IPhoneInput) {
  const [number, setNumber] = React.useState('');

  return (
    <View style={s.block}>
      <Image source={logoSmall} style={s.logoSmall} />
      <Index text={'Войти'} />
      <TextInputMask
        onChangeText={(formatted: string, extracted: string) => {
          setNumber(formatted);
          //console.log(formatted); // +1 (123) 456-78-90
          console.log(extracted); // 1234567890
        }}
        placeholder={'Номер телефона'}
        style={s.textInput}
        value={number}
        mask={'+7 ([000]) [000] [00] [00]'}
      />
      <Button
        title={'Далее'}
        onPress={() =>
          onSubmit(
            number.replace(/^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/, number),
          )
        }
        type={buttonType.purple}
        style={s.bottomButton}
      />
    </View>
  );
}
