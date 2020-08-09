import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Title from '../../../components/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
import {Width} from '../../../helpers/Normalizer';
import InputUI from '../../../components/ui/inputs/input';

const logoSmall = require('../../../assets/img/logoSmall.png');

export interface IBaseInput {
  onSubmit: (phone: any) => void;
}

export default function BaseInput({onSubmit}: IBaseInput) {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <View style={s.block}>
      <Image source={logoSmall} style={s.logoSmall} />
      <Title text={'Основные данные'} />
      <InputUI
        value={firstname}
        onChangeText={(e: string) => setFirstname(e)}
        placeholder={'Имя'}
      />
      <InputUI
        value={lastname}
        onChangeText={(e: string) => setLastname(e)}
        placeholder={'Фамилия'}
      />
      <InputUI
        value={email}
        onChangeText={(e: string) => setEmail(e)}
        placeholder={'Почта'}
      />

      <Button
        title={'Завершить регистрацию'}
        onPress={() => onSubmit(firstname)}
        type={buttonType.purple}
        style={{paddingBottom: 0}}
      />
      <Button
        title={'Заполнить позже'}
        onPress={() => onSubmit(email)}
        type={buttonType.transparent}
        textStyle={{color: 'gray', fontSize: 14}}
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
  textDescription: {
    position: 'relative',
    left: 0,
    width: Width * 0.8,
    marginBottom: 30,
    color: '#272727',
    opacity: 0.8,
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
