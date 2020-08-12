import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Filter from './components/Filter';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import BottomDrawer from '../../components/BottomDrawer';
import {Height} from '../../helpers/Normalizer';
import InputUI from '../../components/ui/inputs/input';
import Title from '../../components/ui/Title';
import ButtonBadge from '../../components/ui/buttons/badgely';
import ToggleButton from '../../components/ui/buttons/ToggleButton';
import SelectPicker from '../../components/ui/select';
export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {
      onFilter: false,
      isToggle: false,
    };
  }

  inputFocus() {
    this.setState({onFilter: true});
  }

  render() {
    const {onFilter, isToggle} = this.state;
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

        <BottomDrawer startUp={onFilter} height={Height * 0.9} full>
          <View style={s.bFilterBlock}>
            <Title text={'Фильтры'} fontSize={18} />
            <ScrollView showsVerticalScrollIndicator={false}>
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
              <SelectPicker
                values={[
                  {label: 'JS', value: 'js'},
                  {label: 'Python', value: 'py'},
                  {label: 'PHP', value: 'php'},
                ]}
                placeholder={'Время публикации'}
                onChange={(value) => console.log('val', value)}
              />
              <SelectPicker
                values={[
                  {label: 'JS', value: 'js'},
                  {label: 'PHP', value: 'php'},
                ]}
                placeholder={'Сортировка'}
                onChange={(value) => console.log('val', value)}
              />
              <ToggleButton
                  title={'Без вакансий агенств'}
                  onClick={() => this.setState({isToggle: !isToggle})}
                  value={isToggle}
              />
              <ToggleButton
                  title={'Только с указанной зарплатой'}
                  onClick={() => this.setState({isToggle: !isToggle})}
                  value={isToggle}
              />
              <ToggleButton
                  title={'Доступные для соискателей от 14 лет'}
                  onClick={() => this.setState({isToggle: !isToggle})}
                  value={isToggle}
                  style={{marginBottom: 100}}
              />
            </ScrollView>
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
