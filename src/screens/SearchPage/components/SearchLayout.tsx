import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import Filter from './Filter';
import Title from '../../../components/ui/Title';
import {Height, Width} from "../../../helpers/Normalizer";
export interface ISearchLayout {
  onClose: () => void;
  onFilter: () => void;
}

export function SearchLayout({onClose, onFilter}: ISearchLayout) {
  const [input, setInput] = React.useState('');
  return (
    <View style={s.block}>
      <Header backClick={onClose} />
      <View style={s.container}>
        <Filter editable value={input} onChange={setInput} iconClick={() => onFilter()}  />
        <Title text={'Результаты поиска'} fontSize={20} style={{top: 10}} />
        <View style={s.resultBlock}>
            <TouchableOpacity onPress={() => {}}>
                <Text style={s.resultItem}>Web-дизайнер</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <Text style={s.resultItem}>Web-дизайнер</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  block: {
      position: 'absolute',
      width: Width,
      height: Height,
      backgroundColor: '#fafafa',
      zIndex: 99,
      padding: 20
  },
  container: {
    paddingTop: 20,
  },
  resultBlock: {
    borderTopColor: 'rgba(39,39,39,0.2)',
    borderTopWidth: 1,
  },
  resultItem: {
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: 'rgba(39,39,39,0.2)',
    borderBottomWidth: 1,
    fontFamily: 'Manrope-Medium',
  },
});
