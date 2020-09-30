import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Button, {buttonType} from '../../components/ui/buttons';
import {Assets, AssetsPopup, Icons} from '../../helpers/Assets';
import {vacancyScreenStyle as s} from './styles';
import BottomDrawer from '../../components/BottomDrawer';
import Title from '../../components/ui/Title';
import Container from '../../components/Container';
import ResumeCard from './components/ResumeCard';
import {resumeListJSON} from '../../json/resumeList';
import {Routes} from '../../routes/Routes';
import Popup from '../../components/Popup';
import {styles} from '../../styles/style';
import TabBar from '../../components/TabBar';
// @ts-ignore
import Share from 'react-native-share';
import ScrollShadow from "../../components/ScrollShadow";

export interface IVacancy {}

export default class VacancyScreen extends React.Component<any, any> {
  constructor(props: IVacancy) {
    super(props);
    this.state = {
      isBottomDrawer: false,
      headerLike: false,
      likedPopup: false,
      onChoose: false,
      selected: null,
      isSend: false,
    };
  }

  openBottomDrawer() {
    this.setState({isBottomDrawer: !this.state.isBottomDrawer, selected: null});
  }

  setChoose(itemId: number) {
    if (this.state.selected === itemId) {
      this.setState({onChoose: false, selected: null});
    } else {
      this.setState({onChoose: true, selected: itemId});
    }
  }

  setLikedPopup() {
    this.setState({
      likedPopup: !this.state.likedPopup,
    });
  }

  passScreen() {
    this.props.navigation.navigate(Routes.Favorites);
  }

  share = async () => {
    const shareOptions = {
      title: 'GennadySX',
      email: 'the@gennadysx.com',
      social: Share.Social.EMAIL,
      failOnCancel: false,
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  render() {
    const {
      isBottomDrawer,
      onChoose,
      selected,
      isSend,
      headerLike,
      likedPopup,
    } = this.state;
    return (
      <TabBar>
        <View style={s.block}>
          <Header
            rightBlock={
              <View style={s.header}>
                <TouchableOpacity onPress={() => this.share()}>
                  <Image
                    source={Icons.share}
                    style={[s.headerImg, {marginRight: 15}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      headerLike: !headerLike,
                      likedPopup: !headerLike,
                    })
                  }>
                  <Image
                    source={headerLike ? Icons.heartActive : Icons.like}
                    style={s.headerImg}
                  />
                </TouchableOpacity>
              </View>
            }
          />
          <ScrollShadow showsVerticalScrollIndicator={false}>
            <View style={s.mainBlock}>
              <Title text={'Web-дизайнер'} style={{marginBottom: 0}} left />
              <Text style={[s.companyText, s.font]}>Компания</Text>
              <Text style={[s.salaryText, s.font]}>от 30000 р.</Text>
              <Text style={[s.experienceText, s.font]}>Опыт от 1 года</Text>
              <View style={s.bodyGeo}>
                <Image source={Icons.geo} style={s.geoIcon} />
                <Text style={[s.font, s.geoText]}>Казань</Text>
              </View>

              <Button
                title={'Откликнуться'}
                onPress={() => this.openBottomDrawer()}
                type={buttonType.white}
                textStyle={{color: '#481380'}}
                style={{paddingBottom: 0, paddingTop: 20}}
                shadow
              />
              <Button
                style={{paddingTop: 7, paddingBottom: 5}}
                title={'Подробнее о компании'}
                onPress={() => this.props.navigation.navigate(Routes.Company)}
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
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(Routes.VideoScreen)
                  }>
                  <Image source={Assets.cardVideoA} style={s.videoBlockImg} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(Routes.VideoScreen)
                  }>
                  <Image source={Assets.cardVideoB} style={s.videoBlockImg} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(Routes.VideoScreen)
                  }>
                  <Image source={Assets.cardVideoC} style={s.videoBlockImg} />
                </TouchableOpacity>
              </View>
              <Text style={[s.blockTitle, {paddingBottom: 0}]}>
                Похожие вакансии
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
          </ScrollShadow>

          <BottomDrawer
            full
            height={onChoose ? 280 : 230}
            startUp={isBottomDrawer}
            onClose={() => this.openBottomDrawer()}>
            <Container unPadding>
              <Title text={'Выберите резюме'} fontSize={18} />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 10}}>
                {resumeListJSON.map((resume: any, index: number) => (
                  <ResumeCard
                    key={index}
                    value={resume}
                    first={index === 0}
                    onClick={(item: number) => this.setChoose(item)}
                    active={selected === resume.id || !selected}
                  />
                ))}
              </ScrollView>
              <View>
                {onChoose && (
                  <Button
                    title={'Отправить'}
                    onPress={() =>
                      this.setState({isSend: true}, () =>
                        this.openBottomDrawer(),
                      )
                    }
                    type={buttonType.purple}
                    style={{paddingBottom: 1}}
                    textStyle={{fontSize: 13}}
                  />
                )}
                <Button
                  title={'Отмена'}
                  onPress={() => this.openBottomDrawer()}
                  type={buttonType.transparent}
                  textStyle={{color: '#575456', fontSize: 13}}
                />
              </View>
            </Container>
          </BottomDrawer>

          <Popup
            visible={isSend}
            onClose={() => this.setState({isSend: false})}>
            <Container style={s.container}>
              <Title
                text={'Резюме отправлено'}
                left
                fontSize={18}
                style={{marginBottom: 10}}
              />
              <Text style={s.desc}>
                Ваше резюме успешно отправлено, его состояние можно отследить в
                разделе “Отклики”
              </Text>
              <Image source={AssetsPopup.vacancy} style={s.img} />
              <Button
                title={'Понятно'}
                onPress={() => this.setState({isSend: false})}
                type={buttonType.transparent}
                textStyle={s.btnText}
                style={s.btn}
              />
            </Container>
          </Popup>

          <Popup visible={likedPopup} onClose={() => this.setLikedPopup()}>
            <Container style={s.container}>
              <Title
                text={'Вакансия в Избранном'}
                left
                fontSize={18}
                style={{marginBottom: 10}}
              />
              <Text style={s.desc}>
                Добавляя профессию в Избранное, можно отслеживать за их новыми
                вакансиями
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
        </View>
      </TabBar>
    );
  }
}
