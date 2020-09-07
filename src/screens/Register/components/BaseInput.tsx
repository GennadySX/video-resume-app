import React from 'react';
import {Image, KeyboardAvoidingView, Platform, View} from 'react-native';
import Title from '../../../components/ui/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
import InputUI from '../../../components/ui/inputs/input';
import {baseInputStyle as s} from '../styles/baseInputStyle';

const logoSmall = require('../../../assets/img/logoSmall.png');

export interface IBaseInput {
  onSubmit: (phone: any) => void;
}

export default function BaseInput({onSubmit}: IBaseInput) {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
      <KeyboardAvoidingView
          style={s.block}
          enabled={true}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <Image source={logoSmall} style={s.logoSmall} />
      <Title text={'Основные данные'} left />
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
    </KeyboardAvoidingView>
  );
}
