import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Title from '../../../../../components/ui/Title';
import Button, {buttonType} from '../../../../../components/ui/buttons';
import TextInputMask from 'react-native-text-input-mask';
import {phoneInputStyle as s} from '../styles/phoneInputStyle';
import {IconsSvg} from '../../../../../helpers/IconsSVG';
import InputUI from '../../../../../components/ui/inputs/input';

export interface IEmailInput {
  onSubmit: (phone: string) => void;
}

export default function EmailInput({onSubmit}: IEmailInput) {
  const [email, setEmail] = React.useState('');
  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={s.block}>
      {React.createElement(IconsSvg.LogoMINI, {...s.logoSmall})}
      <Title text={'Авторизация через почту'} />
      <InputUI
        value={email}
        onChangeText={(e: string) => setEmail(e)}
        placeholder={'Введите Вашу почту'}
      />
      <TextInputMask
        onChangeText={(formatted: string, extracted: string) =>
          setEmail(extracted)
        }
        placeholder={'Введите Вашу почту'}
        value={email}
      />
      <Button
        title={'Отправить код подтверждения'}
        onPress={() => onSubmit(email)}
        type={buttonType.purple}
        style={s.bottomButton}
      />
    </KeyboardAvoidingView>
  );
}
