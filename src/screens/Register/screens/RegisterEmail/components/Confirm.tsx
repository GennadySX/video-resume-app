import React from 'react';
import { Text, KeyboardAvoidingView, Platform, TouchableOpacity, Image, View} from 'react-native';
import Title from '../../../../../components/ui/Title';
import {confirmStyle as s} from '../styles/confirmStyle';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {IconsSvg} from '../../../../../helpers/IconsSVG';
import {Icons} from "../../../../../helpers/Assets";

const CELL_COUNT = 6;
export interface IConfirmCode {
  onSubmit: (phone: string) => void;
  goBack: () => void;
}

export default function ConfirmCode({onSubmit, goBack}: IConfirmCode) {
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
        <View style={s.header}>
            <TouchableOpacity
                style={{width: 70, height: 70, alignItems: 'center'}}
                onPress={goBack}>
                <Image source={Icons.back} style={s.backImg} />
            </TouchableOpacity>
            {React.createElement(IconsSvg.LogoMINI, {...s.logoSmall})}
        </View>
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

    </KeyboardAvoidingView>
  );
}
