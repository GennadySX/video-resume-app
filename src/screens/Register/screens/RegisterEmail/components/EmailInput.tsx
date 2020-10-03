import React from 'react';
import {Image, KeyboardAvoidingView, Platform, TouchableOpacity, View} from 'react-native';
import Title from '../../../../../components/ui/Title';
import Button, {buttonType} from '../../../../../components/ui/buttons';
import {emailInputStyle as s} from '../styles/EmailInputStyle';
import {IconsSvg} from '../../../../../helpers/IconsSVG';
import InputUI from '../../../../../components/ui/inputs/input';
import {Width} from '../../../../../helpers/Normalizer';
import {Icons} from "../../../../../helpers/Assets";

export interface IEmailInput {
  onSubmit: (phone: string) => void;
  goBack: () => void
}

export default function EmailInput({onSubmit, goBack}: IEmailInput) {
  const [email, setEmail] = React.useState('');
  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={s.block}>
        <View style={s.header}>
            <TouchableOpacity
                style={{width: 70, height: 70, alignItems: 'center'}}
                onPress={goBack}>
                <Image source={Icons.back} style={s.backImg} />
            </TouchableOpacity>
            {React.createElement(IconsSvg.LogoMINI, {...s.logoSmall})}
        </View>
      <Title text={'Авторизация через почту'} style={{width: Width * 0.9}} />
      <InputUI
        value={email}
        onChangeText={(e: string) => setEmail(e)}
        placeholder={'Введите Вашу почту'}
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
