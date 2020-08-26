import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import Container from '../../components/Container';
import Title from '../../components/ui/Title';
import ButtonIcon from '../../components/ui/buttons/ButtonIcon';
import {Assets, AssetsPopup, Icons} from '../../helpers/Assets';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TabBar from '../../components/TabBar';
import LinearGradient from 'react-native-linear-gradient';
import ResumeCard from '../Vacancy/components/ResumeCard';
import {resumeListJSON} from '../../json/resumeList';
import {Routes} from '../../routes/Routes';
import ProfileMoreMenu from './components/MoreMenu';

import {profileScreenStyle as s} from './styles';
import Button, {buttonType} from "../../components/ui/buttons";
import {styles} from "../../styles/style";
import Popup from "../../components/Popup";

export interface IProfileScreen {}

class ProfileScreen extends React.Component<any, any> {
  constructor(props: IProfileScreen) {
    super(props);
    this.state = {
      userInfo: null,
      isMore: false,
      active: false,
      popup: false
    };
  }

  componentDidMount(): void {}

  openMore() {
    this.setState({
      isMore: !this.state.isMore,
    });
  }

  componentWillUnmount() {
    this.setState({
      isMore: false,
    });
  }

  setLikedPopup() {
    this.setState({
      popup: !this.state.popup,
    });
  }



  render() {
    const {isMore, active, popup} = this.state;
    return (
      <TabBar>
        <Container paddingTop style={s.header}>
          <Title text={'Профиль'} left unBottom />
          <ButtonIcon icon={Icons.more} onPress={() => this.openMore()} />
        </Container>
        <ScrollView>
          <Container style={s.profileImageBlock}>
            <TouchableOpacity style={[s.imgContainer, {borderColor: active ? 'rgba(125,90,160,0.62)' : '#bdbbbb'} ]} onPress={() => this.setState({active: !active}, () => !active && this.setLikedPopup())}>
              <Image source={Assets.photo} style={s.img} />
            </TouchableOpacity>
            <LinearGradient
              colors={ active ?  ['rgba(142,62,193,0.74)', 'rgb(241,240,240)'] : ['#b9b9bf', 'rgba(182,180,180,0.84)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={s.status}>
              <Text style={s.statusTitle}>Premium</Text>
            </LinearGradient>
            <Title text={'Основные данные'} left fontSize={18} unBottom />
            <Text style={s.username}>Иван Иванов</Text>
          </Container>
          <Container style={{marginTop: 15, marginBottom: 15}}>
            <Title text={'Мои резюме'} fontSize={18} left unBottom />
          </Container>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={s.resumeContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(Routes.ResumeCreate)
              }
              style={s.addResumeBtn}>
              <Image source={Icons.addResume} style={s.addResumeIcon} />
            </TouchableOpacity>
            {resumeListJSON.map((resume: any, index: number) => (
              <ResumeCard
                active
                value={resume}
                onClick={() => this.props.navigation.navigate(Routes.Resume)}
                key={index}
              />
            ))}
          </ScrollView>
          <Container>
            <Title
              text={'Видео'}
              fontSize={18}
              left
              style={{marginBottom: 10}}
            />
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
                  this.props.navigation.navigate(Routes.ResumeTutorial)
                }
                style={{alignItems: 'center'}}>
                <Image
                  source={Icons.addVideo}
                  style={[
                    s.videoBlockImg,
                    {width: 105, height: 105, bottom: 5},
                  ]}
                />
              </TouchableOpacity>
            </View>
          </Container>
        </ScrollView>
        <ProfileMoreMenu active={isMore} onClose={() => this.openMore()} />
        <Popup visible={popup} onClose={() => this.setLikedPopup()}>
          <Container style={s.container}>
            <Title
                text={'Premium-аккаунт активирован'}
                left
                fontSize={18}
                style={{marginBottom: 10}}
            />
            <Text style={s.desc}>
              Теперь Ваше резюме заметят больше работодателей
            </Text>
            <Image source={AssetsPopup.premium} style={s.imgPopup} />

            <Button
                title={'Хорошо'}
                onPress={() => this.setLikedPopup()}
                type={buttonType.transparent}
                textStyle={[s.btnText, {...styles.fontBold}]}
                style={s.btn}
            />
          </Container>
        </Popup>
      </TabBar>
    );
  }
}

export default ProfileScreen;
