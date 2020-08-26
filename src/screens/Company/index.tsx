import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/ui/Title';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {
  Assets,
  AssetsBackground,
  AssetsPopup,
  Icons,
} from '../../helpers/Assets';
import {Width} from '../../helpers/Normalizer';
import {companyScreenStyle as s} from './styles';
import Container from '../../components/Container';
import Button, {buttonType} from '../../components/ui/buttons';
import {Routes} from '../../routes/Routes';
import {styles} from '../../styles/style';
import Popup from '../../components/Popup';

export interface ICompany {}

export default class CompanyScreen extends React.Component<any, any> {
  constructor(props: ICompany) {
    super(props);
    this.state = {
      headerLike: false,
      likedPopup: false,
    };
  }

  setLikedPopup() {
    this.setState({
      likedPopup: !this.state.likedPopup,
    });
  }

  passScreen() {
    this.props.navigation.navigate(Routes.Favorites);
  }

  render() {
    const {headerLike, likedPopup} = this.state;
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
                onPress={() => this.setState({headerLike: !headerLike, likedPopup: !headerLike }, )}>
                <Image
                  source={headerLike ? Icons.heartActive : Icons.like}
                  style={s.headerImg}
                />
              </TouchableOpacity>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.mainBlock}>
            <Title left text={'Компания'} style={{marginBottom: 0}} />
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
          </View>
          <Card
            unPadding
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
          <Card
            unPadding
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
          <Card
            unPadding
            latest
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
        </ScrollView>
        <Popup visible={likedPopup} onClose={() => this.setLikedPopup()}>
          <Container style={s.container}>
            <Title
              text={'Компания в Избранном'}
              left
              fontSize={18}
              style={{marginBottom: 10}}
            />
            <Text style={s.desc}>
              Добавляя компанию в Избранное, можно отслеживать за их новыми вакансиями и новостями
            </Text>
            <Image source={AssetsPopup.liked} style={s.img} />
            <Button
              title={'Перейти в Избранное'}
              onPress={() => this.passScreen()}
              type={buttonType.purple}
              style={s.btn}
            />
            <Button
              title={'Закрыть'}
              onPress={() => this.setLikedPopup()}
              type={buttonType.transparent}
              textStyle={[s.btnText, {...styles.fontBold}]}
              style={s.btn}
            />
          </Container>
        </Popup>
      </ImageBackground>
    );
  }
}
