import React from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Assets, Icons} from '../../../../helpers/Assets';
import Container from '../../../../components/Container';
import Title from '../../../../components/ui/Title';
import InputUI from '../../../../components/ui/inputs/input';
import Button, {buttonType} from '../../../../components/ui/buttons';
import {Routes} from "../../../../routes/Routes";
import {resumeEditScreenStyle as s} from "./styles";

export interface IResumeEdit {}

export default class ResumeEditScreen extends React.Component<any, any> {
  constructor(props: IResumeEdit) {
    super(props);
    this.state = {
      about: null,
    };
  }

  render() {
    const {about} = this.state;
    const {navigation } = this.props
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
            <Title text={'Редактирование'} left />
            <Container style={s.avatarContainer}>
              <TouchableOpacity style={s.avatarBtn} onPress={() => navigation.navigate(Routes.CameraScreen)}>
                <Image source={Assets.photo} style={s.avatar} />
                <Image source={Icons.photoFrame} style={s.photoFrame} />
              </TouchableOpacity>
            </Container>
            <View style={s.inputBlock}>
              <Title text={'Основные данные'} fontSize={18} left bottom={10} />
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
            </View>
            <View>
              <Title
                text={'Видео'}
                fontSize={18}
                left
                style={{marginBottom: 10}}
              />
              <View style={s.videoBlock}>
                <View>
                  <Image source={Assets.cardVideoV1} style={s.videoBlockImg} />
                  <TouchableOpacity onPress={() => {}} style={s.videoBlockStar}>
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
                  <Image source={Assets.cardVideoV1} style={s.videoBlockImg} />
                  <TouchableOpacity onPress={() => {}} style={s.videoBlockStar}>
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
                  onPress={() => navigation.navigate(Routes.CameraScreen)}
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
                onPress={() => {}}
                type={buttonType.purple}
                style={s.saveButton}
              />
            </View>
          </ScrollView>
        </Container>
      </View>
    );
  }
}
