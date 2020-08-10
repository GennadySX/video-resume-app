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

export interface IVacancy {}

export default class VacancyScreen extends React.Component<any, any> {
  constructor(props: IVacancy) {
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
                <Image
                  source={Icons.share}
                  style={[s.headerImg, {marginRight: 15}]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image source={Icons.like} style={s.headerImg} />
              </TouchableOpacity>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false} style={s.mainBlock}>
          <Title text={'Web-дизайнер'} style={{left: 0, marginBottom: 0}} />
          <Text style={[s.companyText, s.font]}>Компания</Text>
          <Text style={[s.salaryText, s.font]}>от 30000 р.</Text>
          <Text style={[s.experienceText, s.font]}>Опыт от 1 года</Text>
          <View style={s.bodyGeo}>
            <Image source={Icons.geo} style={s.geoIcon} />
            <Text style={[s.font, s.geoText]}>Казань</Text>
          </View>

          <Button
            title={'Откликнуться'}
            onPress={() => {}}
            type={buttonType.white}
            textStyle={{color: '#481380'}}
            style={{paddingBottom: 0, paddingTop: 20}}
            shadow
          />
          <Button
            style={{paddingTop: 7, paddingBottom: 5}}
            title={'Подробнее о компании'}
            onPress={() => {}}
            type={buttonType.transparent}
            textStyle={{color: 'gray'}}
          />
          <Text style={s.blockTitle}>Описание</Text>
          <View>
            <Text style={s.descText}>
              В компанию ищем дизайнера, просторный офис, хороший коллектив,
              график 5/2
            </Text>
          </View>
          <Text style={s.blockTitle}>Видео</Text>
          <View style={s.videoBlock}>
            <TouchableOpacity onPress={() => {}} >
              <Image source={Assets.cardVideoA} style={s.videoBlockImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} >
              <Image source={Assets.cardVideoB} style={s.videoBlockImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} >
              <Image source={Assets.cardVideoC} style={s.videoBlockImg} />
            </TouchableOpacity>
          </View>
          <Text style={[s.blockTitle, {paddingBottom: 0}]}>
            Похожие вакансии
          </Text>
          <Card  onClick={() => this.props.navigation.navigate('Vacancy')}/>
          <Card  onClick={() => this.props.navigation.navigate('Vacancy')}/>
          <Card latest  onClick={() => this.props.navigation.navigate('Vacancy')}/>
        </ScrollView>
      </View>
    );
  }
}

const s = StyleSheet.create({
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
  companyText: {
    fontSize: 17,
  },
  salaryText: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 17,
  },
  experienceText: {
    fontSize: 14,
  },
  bodyGeo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    height: 25,
  },
  geoIcon: {
    position: 'relative',
    right: 3,
    resizeMode: 'contain',
    width: 20,
  },
  geoText: {
    fontSize: 14,
  },
  font: {
    fontFamily: 'Manrope-Medium',
  },
  descText: {
    fontSize: 12,
    fontFamily: 'Manrope-Medium',
  },
  blockTitle: {
    fontSize: 17,
    fontFamily: 'Manrope-Bold',
    paddingTop: 12,
    paddingBottom: 10,
  },
  videoBlock: {
    flexDirection: 'row',
  },
  videoBlockImg: {
    width: Width * 0.25,
    height: Width * 0.25,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
