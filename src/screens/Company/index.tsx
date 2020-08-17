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
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Assets, AssetsBackground, Icons} from '../../helpers/Assets';
import {Width} from '../../helpers/Normalizer';
import {companyScreenStyle as s} from './styles';

export interface ICompany {}

export default class CompanyScreen extends React.Component<any, any> {
  constructor(props: ICompany) {
    super(props);
    this.state = {
      headerLike: false,
    };
  }

  render() {
    const {headerLike} = this.state;
    return (
      <ImageBackground
        source={AssetsBackground.roundBackground}
        imageStyle={{width: Width, position: 'absolute'}}
        style={s.block}>
        <Header
          rightBlock={
            <View style={s.header}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={Icons.share}
                  style={[s.headerImg, {marginRight: 15}]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({headerLike: !headerLike})}>
                <Image
                  source={headerLike ? Icons.heartActive : Icons.like}
                  style={s.headerImg}
                />
              </TouchableOpacity>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false} style={s.mainBlock}>
          <Index text={'Компания'} style={{left: 0, marginBottom: 0}} />
          <View style={s.bodyGeo}>
            <Image source={Icons.geoBlack} style={s.geoIcon} />
            <Text style={[s.font, s.geoText]}>Казань</Text>
          </View>

          <View style={s.hired}>
            <Text style={s.blockTitle}>Описание</Text>
            <View>
              <Text style={s.descText}>
                На рынке уже 5 лет, создаём продающие сайты и мобильные
                приложения
              </Text>
            </View>
          </View>

          <Text style={s.blockTitle}>Видео</Text>
          <View style={s.videoBlock}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Assets.cardVideoC} style={s.videoBlockImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Assets.cardVideoB} style={s.videoBlockImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Assets.cardVideoA} style={s.videoBlockImg} />
            </TouchableOpacity>
          </View>
          <Text style={[s.blockTitle, {paddingBottom: 0}]}>
            Вакансии компании
          </Text>
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card
            latest
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
