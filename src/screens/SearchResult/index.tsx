import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Icons} from '../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {searchResultScreenStyle as s} from './styles';
import Container from '../../components/Container';

export interface ISearchResult {}

export default class SearchResultScreen extends React.Component<any, any> {
  constructor(props: ISearchResult) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.block}>
        <Container>
          <Header
            rightBlock={
              <View style={s.header}>
                <TouchableOpacity onPress={() => {}}>
                  <Image source={Icons.filters} style={s.headerImg} />
                </TouchableOpacity>
              </View>
            }
          />
        </Container>

        <ScrollView showsVerticalScrollIndicator={false} style={s.mainBlock}>
          <Container>
            <Index text={'Результаты поиска'} fontSize={25} left unBottom />
            <Text style={[s.descText, s.font]}>1005 вакансий</Text>

            <Text style={[s.blockTitle, {paddingBottom: 0}]}>
              Отдельные вакансии
            </Text>
          </Container>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => {}} style={{marginLeft: 20}}>
              <LinearGradient
                colors={['#9d6bcf', 'rgba(205,158,255,0.83)']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={s.typeBlock}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <LinearGradient
                colors={['#9d6bcf', 'rgba(205,158,255,0.83)']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={s.typeBlock}>
                <Text style={[s.typeBlockTitle, s.font]}>Web-дизайнер</Text>
                <Text style={s.typeBlockListCount}>145 вакансий</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <LinearGradient
                colors={['#9d6bcf', 'rgba(205,158,255,0.83)']}
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
        </ScrollView>
      </View>
    );
  }
}
