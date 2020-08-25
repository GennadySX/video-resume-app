import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Assets, Icons} from '../../../../helpers/Assets';
import Container from '../../../../components/Container';
import Title from '../../../../components/ui/Title';
import InputUI from '../../../../components/ui/inputs/input';
import Button, {buttonType} from '../../../../components/ui/buttons';
import {styles} from '../../../../styles/style';
import {Width} from '../../../../helpers/Normalizer';
import {Routes} from '../../../../routes/Routes';

import RoundedGradient from '../../../../assets/svg/roundGradient.svg';
import RoundedGradientOutline from '../../../../assets/svg/roundGradientOutline.svg';

export interface IResumeCreateScreen {}

export default class ResumeCreateScreen extends React.Component<any, any> {
  constructor(props: IResumeCreateScreen) {
    super(props);
    this.state = {
      about: null,
      lastStep: false,
    };
  }

  render() {
    const {about, lastStep} = this.state;
    return (
      <View style={s.block}>
        <Container style={s.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={Icons.close} style={s.closeIcon} />
          </TouchableOpacity>
        </Container>
        <Container>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={s.scrollContainer}>
            <Title text={'Создание'} left unBottom />
            <Container style={s.guideBlock}>
              <RoundedGradient width={30} height={30} style={s.guideIcon} />
              <View style={[s.lineNotActive, lastStep && s.lineActive]} />
              {lastStep ? (
                <RoundedGradient width={30} height={30} style={s.guideIcon} />
              ) : (
                <RoundedGradientOutline
                  width={30}
                  height={30}
                  style={s.guideIcon}
                />
              )}
            </Container>

            <Container style={s.avatarContainer}>
              <TouchableOpacity style={s.avatarBtn} onPress={() => {}}>
                <Image source={Assets.photo} style={s.avatar} />
                {!lastStep && (
                  <Image source={Icons.photoFrame} style={s.photoFrame} />
                )}
              </TouchableOpacity>
            </Container>
            {!lastStep ? (
              <View style={s.inputBlock}>
                <Title
                  text={'Основные данные'}
                  fontSize={18}
                  left
                  bottom={10}
                />
                <InputUI
                  fullWidth
                  value={''}
                  onChangeText={() => 'f'}
                  placeholder={'Должность'}
                />
                <InputUI
                  fullWidth
                  value={''}
                  onChangeText={() => 'f'}
                  placeholder={'Опыт'}
                />
                <InputUI
                  fullWidth
                  value={''}
                  onChangeText={() => 'f'}
                  placeholder={'Телефон'}
                />
                <InputUI
                  fullWidth
                  value={''}
                  onChangeText={() => 'f'}
                  placeholder={'Заработная плата'}
                />
                <InputUI
                  fullWidth
                  value={''}
                  onChangeText={() => 'f'}
                  placeholder={'Почта'}
                />
                <InputUI
                  fullWidth
                  value={about}
                  onChangeText={(about: string) => this.setState({about})}
                  placeholder={'О себе'}
                  numberOfLines={5}
                />

                <Button
                  title={'Далее'}
                  onPress={() => this.setState({lastStep: true})}
                  type={buttonType.purple}
                  style={s.saveButton}
                />
              </View>
            ) : (
              <View>
                <Title
                  text={'Видео'}
                  fontSize={18}
                  left
                  style={{marginBottom: 10}}
                />
                <View style={s.videoBlock}>
                  <View>
                    <Image
                      source={Assets.cardVideoV1}
                      style={s.videoBlockImg}
                    />
                    <TouchableOpacity
                      onPress={() => {}}
                      style={s.videoBlockStar}>
                      <Image source={Icons.star} style={s.videoBlockStarIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={s.videoBlockBasket}>
                      <Image
                        source={Icons.basket}
                        style={s.videoBlockBasketIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image
                      source={Assets.cardVideoV1}
                      style={s.videoBlockImg}
                    />
                    <TouchableOpacity
                      onPress={() => {}}
                      style={s.videoBlockStar}>
                      <Image source={Icons.star} style={s.videoBlockStarIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={s.videoBlockBasket}>
                      <Image
                        source={Icons.basket}
                        style={s.videoBlockBasketIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(Routes.CameraScreen)
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
                <Button
                  title={'Сохранить'}
                  onPress={() => this.props.navigation.navigate(Routes.Profile)}
                  type={buttonType.purple}
                  style={s.saveButton}
                />
              </View>
            )}
          </ScrollView>
        </Container>
      </View>
    );
  }
}

const s = StyleSheet.create({
  block: {
    paddingTop: 25,
  },
  header: {
    paddingBottom: 10,
  },
  closeIcon: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    right: 10,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  avatarBtn: {},
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  photoFrame: {
    position: 'absolute',
    width: 120,
    height: 120,
  },
  inputBlock: {
    paddingBottom: 20,
  },
  btnContainer: {
    paddingTop: 20,
  },
  btnChoise: {
    padding: 15,
    paddingLeft: 0,
    borderTopColor: 'rgba(133,133,133,0.76)',
    borderBottomColor: 'rgba(133,133,133,0.76)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  btnChoiseText: {
    ...styles.fontMedium,
  },
  videoBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  videoBlockImg: {
    width: Width * 0.25,
    height: Width * 0.25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  videoBlockStar: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  videoBlockStarIcon: {
    width: 20,
    height: 20,
  },
  videoBlockBasket: {
    position: 'absolute',
    left: 5,
    bottom: 15,
  },
  videoBlockBasketIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  saveButton: {
    paddingBottom: 120,
  },
  guideBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  guideIcon: {
    width: 35,
    height: 35,
  },
  lineNotActive: {
    width: Width * 0.3,
    height: 2,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  lineActive: {
    backgroundColor: 'rgba(116, 45, 210, 0.3)',
  },
});
