import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Filter from './components/Filter';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/title';
import Card from "../../components/Card";
export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.block}>
        <Index
          text={'Поиск работы'}
          style={{left: 0, marginBottom: 20}}
        />
        <Filter />
        <BlockTab />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card  onClick={() => this.props.navigation.navigate('Vacancy')}/>
          <Card  onClick={() => this.props.navigation.navigate('Vacancy')} latest />
        </ScrollView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  block: {
    padding: 15,
    paddingTop: 25,
  },
});
