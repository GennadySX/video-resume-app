import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import {Height} from '../../helpers/Normalizer';
import TabBar from '../../components/TabBar';
import {TAB_MENU} from '../../constants/TabMenu';
import MiniCard from "./components/MiniCard";
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
    const {menu, tabSection} = this.state;
    return (
      <View>
        <View style={s.block}>
          <Index text={'Избранное'} style={{left: 0, marginBottom: 20}} />
          <BlockTab
            titles={['Вакансии', 'Компании']}
            onClick={(val: boolean) => this.setState({tabSection: val})}
            selected={true}
          />

          {!tabSection ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
              <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
              <Card
                onClick={() => this.props.navigation.navigate('Vacancy')}
                latest
              />
            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard  latest/>
            </ScrollView>
          )}
        </View>
        <TabBar
          menuList={TAB_MENU}
          active={menu}
          onClick={(title: string) => this.setState({menu: title})}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  block: {
    padding: 15,
    paddingTop: 25,
    height: Height - 90,
    paddingBottom: 0,
  },
  bFilterBlock: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
