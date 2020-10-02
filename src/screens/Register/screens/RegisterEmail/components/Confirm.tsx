import React from 'react';
import { Text, KeyboardAvoidingView, Platform} from 'react-native';
import Title from '../../../../../components/ui/Title';
import Button, {buttonType} from '../../../../../components/ui/buttons';
import {confirmStyle as s} from '../styles/confirmStyle';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {IconsSvg} from '../../../../../helpers/IconsSVG';
import {Width} from '../../../../../helpers/Normalizer';

const CELL_COUNT = 6;
export interface IConfirmCode {
  onSubmit: (phone: string) => void;
}

export default function ConfirmCode({onSubmit}: IConfirmCode) {
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <KeyboardAvoidingView
      style={s.block}
      enabled={true}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      {React.createElement(IconsSvg.LogoMINI, {...s.logoSmall})}
      <Title text={'Подтверждение входа'} left />
      <Text style={s.textDescription}>
          Введите код, который мы отправили Вам на почту sze*********.ru
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={(e: string) => {
          setValue(e);
          if (e.toString().length === CELL_COUNT) {
            onSubmit(e);
          }
        }}
        cellCount={CELL_COUNT}
        rootStyle={s.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[s.cell, isFocused && s.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button
        title={'Отправить код повторно'}
        onPress={() => onSubmit(value)}
        type={buttonType.transparent}
        textStyle={{color: 'gray', fontSize: 13 }}
        style={{marginTop: 10, marginBottom: 0, paddingBottom: 0}}
      />
      <Button
        title={'У меня нет доступа к номеру телефона'}
        onPress={() => onSubmit(value)}
        type={buttonType.transparent}
        textStyle={{color: '#481380', fontSize: 13}}
        style={{paddingBottom: 0, width: Width * 0.85}}
      />
    </KeyboardAvoidingView>
  );
}
