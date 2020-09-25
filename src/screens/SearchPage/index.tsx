import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Filter from './components/Filter';
import BlockTab from './components/BlockTab';
import Title from '../../components/ui/Title';
import Card from '../../components/Card';
import TabBar from '../../components/TabBar';
import {SearchLayout} from './components/SearchLayout';
import {searchPageScreenStyle as s} from './styles';
import FilterShield from './components/FilterShield';

export interface ISearchPage {}

export default class SearchPageScreen extends React.Component<any, any> {
  constructor(props: ISearchPage) {
    super(props);
    this.state = {
      onFilter: false,
    };
  }

  inputFocus() {
    this.setState({isSearch: true});
  }

  filterFocus() {
    this.setState({onFilter: true});
  }

  render() {
    const {menu, isSearch, onFilter} = this.state;
    return (
      <TabBar
        active={menu}
        onClick={(title: string) => this.setState({menu: title})}>
        <View style={s.block}>
          {isSearch && (
            <SearchLayout
              onClose={() => this.setState({isSearch: !isSearch})}
              onFilter={() => this.filterFocus()}
            />
          )}
          <Title text={'Поиск работы'} style={{left: 0, marginBottom: 20}} />
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
            <FilterShield
              onFilter={onFilter}
              onCloseSheet={() => this.setState({onFilter: false})}
            />
          </ScrollView>
        </View>
      </TabBar>
    );
  }
}
