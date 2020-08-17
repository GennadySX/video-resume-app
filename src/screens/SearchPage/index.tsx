import React from 'react';
import {ScrollView, TouchableOpacity, View, Text, StyleSheet, CheckBox} from 'react-native';
import Filter from './components/Filter';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/Title';
import Title from '../../components/ui/Title';
import Card from '../../components/Card';
import BottomDrawer from '../../components/BottomDrawer';
import {Height} from '../../helpers/Normalizer';
import InputUI from '../../components/ui/inputs/input';
import ButtonBadge from '../../components/ui/buttons/badgely';
import Button, {buttonType} from '../../components/ui/buttons';
import ToggleButton from '../../components/ui/buttons/ToggleButton';
import SelectPicker from '../../components/ui/select';
import TabBar from '../../components/TabBar';
import {TAB_MENU} from '../../constants/TabMenu';
import {SearchLayout} from './components/SearchLayout';
import {searchPageScreenStyle as s} from './styles';
import Container from '../../components/Container';
import CheckBoxUI from "../../components/ui/checkbox";

export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {
      onFilter: false,
      onFilterPopup: false,
      isToggle: false,
      isSearch: false,
      check1: false,
      check2: false,
      check3: false,
    };

  }

  inputFocus() {
    this.setState({isSearch: true});
  }
  filterFocus() {
    this.setState({onFilter: true}, () =>
      console.log('is filter', this.state.onFilter),
    );
  }

  onCloseSheet() {
    this.setState({onFilter: false}, () =>
      console.log('closed sheet', this.state.onFilter),
    );
  }

  onCloseSheetChild() {
    this.setState({onFilterPopup: false}, () =>
        console.log('closed child sheet', this.state.onFilter),
    );
  }

  clearCheck() {
    this.setState({
      check1: false,
      check2: false,
      check3: false,
    })
  }

  checkIt(isCheck: string) {
    this.setState({
      [isCheck]: !this.state[isCheck]
    })
  }

  render() {
    const {onFilter, isToggle, menu, isSearch, onFilterPopup, check1, check2, check3} = this.state;
    return (
      <View>
        <View style={s.block}>
          {isSearch && (
            <SearchLayout
              onClose={() => this.setState({isSearch: !isSearch})}
              onFilter={() => this.filterFocus()}
            />
          )}
          <Index text={'Поиск работы'} style={{left: 0, marginBottom: 20}} />
          <Filter
            onFocus={() => this.inputFocus()}
            iconClick={() => this.filterFocus()}
          />
          <BlockTab />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
            <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
            <Card
              onClick={() => this.props.navigation.navigate('Vacancy')}
              latest
            />
          </ScrollView>
          <BottomDrawer
            startUp={onFilter}
            height={Height * 0.9}
            full
            onClose={() => this.onCloseSheet()}>
            <View style={s.bFilterBlock}>
              <Title text={'Фильтры'} fontSize={18} left />
              <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 100}}>
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
                <ButtonBadge onClick={() => this.setState({onFilterPopup: true})} />
                <ButtonBadge onClick={() => this.setState({onFilterPopup: true})} />
                <ButtonBadge onClick={() => this.setState({onFilterPopup: true})} />
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
              <Container
                shadow
                style={{marginBottom: 20, position: 'absolute', bottom: 0}}>
                <Button
                  title={'Сохранить изменения'}
                  type={buttonType.purple}
                  onPress={() => {}}
                  style={{paddingBottom: 0}}
                  textStyle={{fontSize: 13}}
                />
                <Button
                  title={'Отмена'}
                  type={buttonType.transparent}
                  onPress={() => {}}
                  textStyle={{color: 'gray', fontSize: 13}}
                />
              </Container>
            </View>
          </BottomDrawer>
        </View>
        <BottomDrawer
            startUp={onFilterPopup}
            height={Height * 0.9}
            full
            onClose={() => this.onCloseSheetChild()}>
          <View style={xs.header}>
            <Title text={'Добавить метро'} fontSize={18} style={{marginBottom: 0}} />
            <TouchableOpacity onPress={() => this.clearCheck()} >
              <Text style={xs.headerClear}>Очистить все</Text>
            </TouchableOpacity>
          </View>
          <Container>
            <View style={xs.resultBlock}>
              <CheckBoxUI checked={check1} title={'Авиастроительный'}
                onCheck={() => this.checkIt('check1')}
              />
              <CheckBoxUI checked={check2} title={'Авиастроительный'}
                          onCheck={() => this.checkIt('check2')}
              />
              <CheckBoxUI checked={check3} title={'Авиастроительный'}
                          onCheck={() => this.checkIt('check3')}/>
            </View>
          </Container>
        </BottomDrawer>
        <TabBar
          active={menu}
          onClick={(title: string) => this.setState({menu: title})}
        />
      </View>
    );
  }
}


const xs = StyleSheet.create({
  resultBlock: {
    borderTopColor: 'rgba(39,39,39,0.2)',
    borderTopWidth: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerClear: {
    color: "rgba(101,99,99,0.66)",
    fontFamily: 'Manrope-Medium',
    right: 10
  }
})
