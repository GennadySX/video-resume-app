import React from 'react';
import {connect} from 'react-redux';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../components/Container';
import Title, {FontType} from '../../components/ui/Title';
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import {Assets, Icons} from '../../helpers/Assets';
import {Routes} from '../../routes/Routes';
import {resumeScreenStyle as s} from './styles';
import ScrollShadow from "../../components/ScrollShadow";

export interface IResumeScreen {}

class ResumeScreen extends React.Component<any, any> {
  constructor(props: IResumeScreen) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  render() {
    return (
      <TabBar active={Routes.Profile}>
        <Container style={s.header}>
          <Header
            rightBlock={
              <View style={s.headerBlock}>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    source={Icons.share}
                    style={[s.headerImg, {marginRight: 15}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(Routes.ResumeEdit)
                  }>
                  <Image source={Icons.pen} style={s.headerImg} />
                </TouchableOpacity>
              </View>
            }
          />
        </Container>
        <ScrollShadow>
          <Container>
            <Title text={'Веб дизайнер'} unBottom left />
            <Title text={'от 30000 р.'} fontSize={20} left bottom={15} />
            <Title
              text={'Иван Иванов'}
              fontSize={18}
              fontType={FontType.medium}
              left
              bottom={7}
            />
            <Title
              text={'Опыт от 1 года'}
              fontSize={18}
              fontType={FontType.medium}
              left
              bottom={10}
            />
            <View style={[s.headerBlock, {right: 3}]}>
              <Image source={Icons.geoBlack} style={s.headerImg} />
              <Title
                text={'Казань'}
                fontSize={16}
                left
                unBottom
                fontType={FontType.medium}
              />
            </View>
          </Container>
          <Container style={s.avatarBlock}>
            <Image source={Assets.photo} style={s.avatar} />
          </Container>
          <Container style={s.container}>
            <Title text={'О себе'} left bottom={10} fontSize={18} />
            <Text style={s.aboutText}>
              Ищу работу на должность Web-дизайнера, опыт 1,5 года, возможен
              переезд в другой город
            </Text>
          </Container>
          <Container style={s.container}>
            <Title text={'Контакты'} left bottom={10} fontSize={18} />
            <Text style={s.aboutText}>ivan@mail.ru</Text>
            <Text style={s.aboutText}>+79296059504</Text>
          </Container>
          <Container style={[s.container, {marginBottom: 50}]}>
            <Title text={'Видео'} left bottom={10} fontSize={18} />
            <View style={s.headerBlock}>
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
          </Container>
        </ScrollShadow>
      </TabBar>
    );
  }
}

export default connect()(ResumeScreen);
