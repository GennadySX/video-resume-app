import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icons} from '../../../helpers/Assets';

export interface IFilter {}

export default function Filter(props: IFilter) {
  const [val, setVal] = React.useState('');

  return (
    <View style={s.block}>
      <TextInput
        style={s.inputField}
        value={val}
        placeholder={'Поиск'}
        onChangeText={(e: string) => setVal(e)}
      />
      <TouchableOpacity onPress={() => {}}>
        <Image source={Icons.filter} style={s.filterIcon} />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputField: {
    width: '87%',
    paddingLeft: 20,
    paddingRight: 10,
    fontFamily: 'Manrope-Medium',
  },
  filterIcon: {
    alignSelf: 'flex-end',
  },
});
