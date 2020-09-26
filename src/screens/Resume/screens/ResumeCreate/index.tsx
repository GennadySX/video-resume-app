import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Assets, Icons} from '../../../../helpers/Assets';
import Container from '../../../../components/Container';
import Title from '../../../../components/ui/Title';
import InputUI from '../../../../components/ui/inputs/input';
import Button, {buttonType} from '../../../../components/ui/buttons';
import {styles} from '../../../../styles/style';
import {Width, Height} from '../../../../helpers/Normalizer';
import {Routes} from '../../../../routes/Routes';

import RoundedGradient from '../../../../assets/svg/roundGradient.svg';
import RoundedGradientOutline from '../../../../assets/svg/roundGradientOutline.svg';
import BottomDrawer from '../../../../components/BottomDrawer';
import Camera from '../../../../components/Camera';
import ImagePicker from 'react-native-image-picker';
import {resumeCreateScreenStyle as s } from "./styles";

export interface IResumeCreateScreen {}

export default class ResumeCreateScreen extends React.Component<any, any> {
  constructor(props: IResumeCreateScreen) {
    super(props);
    this.state = {
      about: null,
      lastStep: false,
      bottomDrawer: false,
      isCamera: false,
      img: Assets.photo,
      mainVideo: true,
    };
  }

  fromGallery = () => {
    this.setState({bottomDrawer: false});
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response picker image', response);
      this.setState({img: {uri: response.uri}});
    });
  };

  getCameraData = (uri: string) => {
    this.setState({
      bottomDrawer: false,
      img: {uri: uri},
      isCamera: false,
    });
  };



  render() {
    const {about, lastStep, isCamera, img, bottomDrawer, mainVideo} = this.state;
    return isCamera ? (
      <Camera
        onCaptue={(data: string) => this.getCameraData(data)}
        onClose={() => this.setState({isCamera: false})}
      />
    ) : (
      <View style={s.block}>
        <Container style={s.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(Routes.Profile)}>
            <Image source={Icons.close} style={s.closeIcon} />
          </TouchableOpacity>
        </Container>
        <Container>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={s.scrollContainer}>
            <Title text={'Создание'} left unBottom />
            <Container style={s.guideBlock}>
              <TouchableOpacity
                style={s.guideBlockLeft}
                onPress={() => this.setState({lastStep: false})}
                activeOpacity={1}>
                <RoundedGradient
                  width={30}
                  height={30}
                  style={[s.guideIcon, {alignSelf: 'center'}]}
                />
                <Text style={styles.fontMedium}>Информация</Text>
              </TouchableOpacity>
              <View style={[s.lineNotActive, lastStep && s.lineActive]} />
              <TouchableOpacity
                style={s.guideBlockRight}
                onPress={() => this.setState({lastStep: true})}
                activeOpacity={1}>
                {lastStep ? (
                  <RoundedGradient
                    width={30}
                    height={30}
                    style={[s.guideIcon, {alignSelf: 'center'}]}
                  />
                ) : (
                  <RoundedGradientOutline
                    width={30}
                    height={30}
                    style={[s.guideIcon, {alignSelf: 'center'}]}
                  />
                )}
                <Text
                  style={[
                    styles.fontMedium,
                    {width: 110, textAlign: 'center'},
                  ]}>
                  Добавление видео
                </Text>
              </TouchableOpacity>
            </Container>

            <Container style={s.avatarContainer}>
              <TouchableOpacity
                style={s.avatarBtn}
                onPress={() => this.setState({bottomDrawer: true})}
                activeOpacity={1}>
                <Image source={img} style={s.avatar} />
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
                  <TouchableOpacity activeOpacity={1}   onPress={() => this.setState({mainVideo: true})} >
                    <Image
                      source={Assets.cardVideoV1}
                      style={s.videoBlockImg}
                    />
                    <View
                      style={s.videoBlockStar}>
                      {mainVideo && <Image source={Icons.star} style={s.videoBlockStarIcon}/> }
                    </View>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={s.videoBlockBasket}>
                      <Image
                        source={Icons.basket}
                        style={s.videoBlockBasketIcon}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1}   onPress={() => this.setState({mainVideo: false})} >
                    <Image
                      source={Assets.cardVideoV1}
                      style={s.videoBlockImg}
                    />
                    <View
                      style={s.videoBlockStar}>
                      {!mainVideo && <Image source={Icons.star} style={s.videoBlockStarIcon}/> }
                    </View>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={s.videoBlockBasket}>
                      <Image
                        source={Icons.basket}
                        style={s.videoBlockBasketIcon}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
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
          <BottomDrawer full height={240} startUp={bottomDrawer}>
            <Container>
              <Title text={'Добавить фотографию'} left unBottom fontSize={18} />
              <View style={s.btnContainer}>
                <TouchableOpacity
                  style={s.btnChoise}
                  onPress={() => this.setState({isCamera: true})}>
                  <Text style={s.btnChoiseText}>Сделать фотографию</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[s.btnChoise, {borderTopColor: 'transparent'}]}
                  onPress={() => this.fromGallery()}>
                  <Text style={s.btnChoiseText}>Загрузить из галереи</Text>
                </TouchableOpacity>
              </View>
              <Button
                title={'Отмена'}
                onPress={() => this.setState({bottomDrawer: false})}
                type={buttonType.transparent}
                textStyle={{color: '#858585'}}
              />
            </Container>
          </BottomDrawer>
        </Container>
      </View>
    );
  }
}

