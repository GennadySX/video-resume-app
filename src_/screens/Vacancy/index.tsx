import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Button, {buttonType} from '../../components/ui/buttons';
import {Assets, Icons} from '../../helpers/Assets';
import {vacancyScreenStyle as s} from './styles';
import BottomDrawer from '../../components/BottomDrawer';
import {Height} from '../../helpers/Normalizer';
import Title from '../../components/ui/Title';
import Container from '../../components/Container';
import ResumeCard from './components/ResumeCard';

export interface IVacancy {}

const resumeList = [
  {
    id: 1,
    title: 'Web Developer',
    link: 'https://example.com/user/resume/1',
  },
  {
    id: 2,
    title: 'Java Developer',
    link: 'https://example.com/user/resume/1',
  },
  {
    id: 3,
    title: 'JS Developer',
    link: 'https://example.com/user/resume/1',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    link: 'https://example.com/user/resume/1',
  },
  {
    id: 5,
    title: 'Designer',
    link: 'https://example.com/user/resume/1',
  },
];

export default class VacancyScreen extends React.Component<any, any> {
  constructor(props: IVacancy) {
    super(props);
    this.state = {
      isBottomDrawer: false,
      onChoose: false,
      selected: null,
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

  render() {
    const {isBottomDrawer, onChoose, selected} = this.state;
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
            onPress={() => this.openBottomDrawer()}
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
            <TouchableOpacity onPress={() => {}}>
              <Image source={Assets.cardVideoA} style={s.videoBlockImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Assets.cardVideoB} style={s.videoBlockImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Assets.cardVideoC} style={s.videoBlockImg} />
            </TouchableOpacity>
          </View>
          <Text style={[s.blockTitle, {paddingBottom: 0}]}>
            Похожие вакансии
          </Text>
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card
            latest
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
        </ScrollView>

        <BottomDrawer
          full
          height={onChoose ? 280 : 230}
          startUp={isBottomDrawer}
          onClose={() => this.openBottomDrawer()}>
          <Container unPadding>
            <Title text={'Выберите резьюме'} fontSize={18} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 10}}>
              {resumeList.map((resume: any, index: number) => (
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
                  onPress={() => {}}
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
      </View>
    );
  }
}
