import React from 'react';
import {Image, View, Text} from 'react-native';
import Index from '../../../components/ui/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
import {confirmStyle as s} from '../styles/confirmStyle';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const logoSmall = require('../../../assets/img/logoSmall.png');
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
    <View style={s.block}>
      <Image source={logoSmall} style={s.logoSmall} />
      <Index text={'Подтверждение номера'} />
      <Text style={s.textDescription}>
        Введите код, который мы отправили Вам на номер + 7 (9**) *** - ** - 21
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
        textStyle={{color: 'gray', fontSize: 14}}
        style={{marginTop: 10}}
      />
    </View>
  );
}
