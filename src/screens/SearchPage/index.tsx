import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Filter from './components/Filter';
import BlockTab from './components/BlockTab';
import Title from '../../components/Title';

export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.block}>
        <Title text={'Поиск работы'} style={{left: 0}}/>
        <Filter />
        <BlockTab />
      </View>
    );
  }
}

const s = StyleSheet.create({
  block: {
      padding: 25,
    flex: 1,
  },
});
