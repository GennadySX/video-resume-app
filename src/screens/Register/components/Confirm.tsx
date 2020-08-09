import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Title from '../../../components/Title';
import Button, {buttonType} from '../../../components/ui/buttons';
import {Width} from '../../../helpers/Normalizer';
import TextInputMask from 'react-native-text-input-mask';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const logoSmall = require('../../../assets/img/logoSmall.png');
const CELL_COUNT = 5;
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
      <Title text={'Подтверждение номера'} />
      <Text style={s.textDescription}>
        Введите код, который мы отправили Вам на номер + 7 (9**) *** - ** - 21
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={(e: string) => {
          setValue(e)
          console.log('text', e);
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

  //
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 40,
    lineHeight: 38,
    fontSize: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#272727',
    textAlign: 'center',
    marginRight: 10,
  },
  focusCell: {
    borderColor: '#000',
  },
});
