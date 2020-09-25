import React from 'react';
import {View, ScrollView} from 'react-native';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import TabBar from '../../components/TabBar';
import MiniCard from './components/MiniCard';
import {favoritesScreenStyle as s} from './styles';
import {TAB_MENU} from '../../constants/TabMenu';

export interface IFavorites {}

export default class FavoritesScreen extends React.Component<any, any> {
  constructor(props: IFavorites) {
    super(props);
    this.state = {
      onFilter: false,
      isToggle: false,
      isSearch: false,
      menu: TAB_MENU[4].title,
      tabSection: false,
    };
  }

  render() {
    const {tabSection} = this.state;
    return (
      <TabBar>
        <View style={s.block}>
          <Index text={'Избранное'} style={{left: 0, marginBottom: 20}} />
          <BlockTab
            titles={['Вакансии', 'Компании']}
            onClick={(val: boolean) => this.setState({tabSection: val})}
            selected={tabSection}
          />

          {!tabSection ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card  onClick={() => this.props.navigation.navigate('Vacancy')} liked />
              <Card onClick={() => this.props.navigation.navigate('Vacancy')} liked />
              <Card
                onClick={() => this.props.navigation.navigate('Vacancy')}
                liked
                latest
              />
            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard latest />
            </ScrollView>
          )}
        </View>
      </TabBar>
    );
  }
}
