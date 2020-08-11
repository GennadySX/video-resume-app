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
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import BottomDrawer from '../../components/BottomDrawer';
import {Height, Width} from '../../helpers/Normalizer';
import Button from '../../components/ui/buttons';
import InputUI from '../../components/ui/inputs/input';
import Title from '../../components/ui/Title';
import {Icons} from '../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBadge from "../../components/ui/buttons/badgely";
export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {};
  }

  inputFocus() {
    console.log('onfocused input');
  }

  render() {
    return (
      <View style={s.block}>
        <Index text={'Поиск работы'} style={{left: 0, marginBottom: 20}} />
        <Filter onFocus={() => this.inputFocus()} />
        <BlockTab />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card
            onClick={() => this.props.navigation.navigate('Vacancy')}
            latest
          />
        </ScrollView>

        <BottomDrawer startUp={true} height={Height * 0.9} full>
          <View style={s.bFilterBlock}>
            <Title text={'Фильтры'} fontSize={18} />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Компания'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Город'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Зарплата'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Требуемый опыт'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'График'}
            />
            <ButtonBadge />
            <ButtonBadge />
            <ButtonBadge />
          </View>
        </BottomDrawer>
      </View>
    );
  }
}

const s = StyleSheet.create({
  block: {
    padding: 15,
    paddingTop: 25,
  },
  bFilterBlock: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
