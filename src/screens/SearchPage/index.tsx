import React from 'react';
import {ScrollView, View} from 'react-native';
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

export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {
      onFilter: true,
      isToggle: false,
      isSearch: false,
      menu: TAB_MENU[0].title,
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
  render() {
    const {onFilter, isToggle, menu, isSearch} = this.state;
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
        <TabBar
          active={menu}
          onClick={(title: string) => this.setState({menu: title})}
        />
      </View>
    );
  }
}
