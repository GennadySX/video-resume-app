import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Button, {buttonType} from '../../components/ui/buttons';
import {Assets, Icons} from '../../helpers/Assets';
import {Width} from '../../helpers/Normalizer';
import LinearGradient from 'react-native-linear-gradient';

export interface ISearchResult {}

export default class SearchResultScreen extends React.Component<any, any> {
  constructor(props: ISearchResult) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={s.block}>
        <Header
          rightBlock={
            <View style={s.header}>
              <TouchableOpacity onPress={() => {}}>
                <Image source={Icons.filters} style={s.headerImg} />
              </TouchableOpacity>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false} style={s.mainBlock}>
          <Title
            text={'Результаты поиска'}
            style={{left: 0, marginBottom: 0, width: '100%'}}
          />
          <Text style={[s.descText, s.font]}>1005 вакансий</Text>

          <Text style={[s.blockTitle, {paddingBottom: 0}]}>
            Отдельные вакансии
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
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
          <Card new   onClick={() => this.props.navigation.navigate('Vacancy')}/>
          <Card  onClick={() => this.props.navigation.navigate('Vacancy')}/>
          <Card latest  onClick={() => this.props.navigation.navigate('Vacancy')}/>
        </ScrollView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  typeBlock: {
    marginTop: 15,
    backgroundColor: '#742DD2',
    padding: 15,
    borderRadius: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },
  typeBlockTitle: {
    color: '#fafafa',
    fontSize: 17,
    paddingBottom: 10,
    paddingEnd: 10,
  },
  typeBlockListCount: {
    color: '#fafafa',
    fontFamily: 'Manrope-Regular',
  },
  mainBlock: {paddingLeft: 7, paddingRight: 7},
  block: {
    padding: 15,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
  },
  headerImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  font: {
    fontFamily: 'Manrope-Medium',
  },
  descText: {
    paddingTop: 7,
    color: 'gray',
    fontFamily: 'Manrope-Medium',
  },
  blockTitle: {
    fontSize: 17,
    fontFamily: 'Manrope-Bold',
    paddingTop: 12,
    paddingBottom: 10,
  },
});
