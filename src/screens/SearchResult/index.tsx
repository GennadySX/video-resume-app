import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Icons} from '../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {searchResultScreenStyle as s} from './styles';
import Container from '../../components/Container';
import TabBar from "../../components/TabBar";
import {Routes} from "../../routes/Routes";
import FilterShield from "../SearchPage/components/FilterShield";
import ScrollShadow from "../../components/ScrollShadow";

export interface ISearchResult {}

export default class SearchResultScreen extends React.Component<any, any> {
  constructor(props: ISearchResult) {
    super(props);
    this.state = {
      onFilter: false
    };
  }

  render() {
    const {navigation} =  this.props
    const {onFilter} =  this.state
    return (
      <TabBar >
        <Container style={s.block}>
          <Header
            rightBlock={
              <View style={s.header}>
                <TouchableOpacity onPress={() => this.setState({onFilter: true})}>
                  <Image source={Icons.filters} style={s.headerImg} />
                </TouchableOpacity>
              </View>
            }
          />
        </Container>
        <ScrollShadow showsVerticalScrollIndicator={false} style={s.mainBlock}>
          <Container>
            <Index text={'Результаты поиска'} fontSize={23} left unBottom />
            <Text style={[s.descText, s.font]}>1005 вакансий</Text>

            <Text style={[s.blockTitle, {paddingBottom: 0}]}>
              Отдельные вакансии
            </Text>
          </Container>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.VacancyList, {title: 'Web-дизайнер'})}>
              <LinearGradient
                colors={['#b083dc', 'rgba(234,223,245,0.83)']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={[s.typeBlock, {marginLeft: 20}]}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.VacancyList, {title: 'Web-дизайнер'})}>
              <LinearGradient
                  colors={['#b083dc', 'rgba(234,223,245,0.83)']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={s.typeBlock}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.VacancyList, {title: 'Web-дизайнер'})}>
              <LinearGradient
                  colors={['#b083dc', 'rgba(234,223,245,0.83)']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={s.typeBlock}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.VacancyList, {title: 'Web-дизайнер'})}>
              <LinearGradient
                  colors={['#b083dc', 'rgba(234,223,245,0.83)']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  style={s.typeBlock}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.VacancyList, {title: 'Web-дизайнер'})}>
              <LinearGradient
                  colors={['#b083dc', 'rgba(234,223,245,0.83)']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  style={s.typeBlock}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
          <Card new onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card
            latest
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
        </ScrollShadow>
        <FilterShield onFilter={onFilter} onCloseSheet={() => this.setState({onFilter: false})} />
      </TabBar>
    );
  }
}
