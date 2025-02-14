import React from 'react';
import {
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Title from '../../../components/ui/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
// @ts-ignore
import TextInputMask from 'react-native-text-input-mask';
import {phoneInputStyle as s} from '../styles/phoneInputStyle';
import {IconsSvg} from '../../../helpers/IconsSVG';


export interface IPhoneInput {
  onSubmit: (phone: string) => void;
}

export default function PhoneInput({onSubmit}: IPhoneInput) {
  const [number, setNumber] = React.useState('');

  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={s.block}>
      {React.createElement(IconsSvg.LogoMINI, {...s.logoSmall})}
      <Title text={'Войти'} />
      <TextInputMask
        onChangeText={(formatted: string, extracted: string) =>
          setNumber(extracted)
        }
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
    </KeyboardAvoidingView>
  );
}
