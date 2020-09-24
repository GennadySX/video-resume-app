import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import Filter from './Filter';
import Title from '../../../components/ui/Title';
import {searchLayoutStyle as s} from '../styles/searchLayoutStyle';
import Container from "../../../components/Container";
import {useNavigation} from '@react-navigation/native';
import {Routes} from "../../../routes/Routes";

export interface ISearchLayout {
  onClose: () => void;
  onFilter: () => void;
}

export function SearchLayout({onClose, onFilter}: ISearchLayout) {
  const navigation = useNavigation();
  const [input, setInput] = React.useState('');
  return (
    <View style={s.block}>
      <Header backClick={onClose} />
      <View style={s.container}>
        <Filter
          editable
          value={input}
          onChange={setInput}
          iconClick={() => onFilter()}
        />
        <Title text={'Недавние'} fontSize={20} style={{top: 10}} left/>
        <View style={s.resultBlock}>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Error)}>
            <Text style={s.resultItem}>Web-дизайнер</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Error)}>
            <Text style={s.resultItem}>Web-дизайнер</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
