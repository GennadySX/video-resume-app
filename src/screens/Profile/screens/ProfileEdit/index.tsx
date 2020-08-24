/*
 * GennadySX @2020
 */

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../../../components/Container';
import Title from '../../../../components/ui/Title';
import {Assets, Icons} from '../../../../helpers/Assets';
import InputUI from '../../../../components/ui/inputs/input';
import Button, {buttonType} from '../../../../components/ui/buttons';
import TabBar from '../../../../components/TabBar';
import {Routes} from '../../../../routes/Routes';
import {useNavigation} from '@react-navigation/native';
import BottomDrawer from '../../../../components/BottomDrawer';
import {styles} from '../../../../styles/style';

export interface IProfileEditScreen {}

export default function ProfileEditScreen(props: IProfileEditScreen) {
  const navigation = useNavigation();
  const [bottomDrawer, setBottomDrawer] = React.useState(false);

  return (
    <TabBar active={Routes.Profile}>
      <Container style={s.block}>
        <Title text={'Редактирование'} left style={s.title} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={s.avatarContainer}>
            <TouchableOpacity
              style={s.avatarBtn}
              onPress={() => setBottomDrawer(true)}>
              <Image source={Assets.photo} style={s.avatar} />
              <Image source={Icons.photoFrame} style={s.photoFrame} />
            </TouchableOpacity>
          </Container>
          <View style={s.inputBlock}>
            <Title
              text={'Основные данные'}
              fontSize={18}
              left
              style={s.title}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Имя'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Фамилия'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Почта'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Телефон номера'}
            />

            <Button
              title={'Сохранить'}
              onPress={() => navigation.navigate(Routes.Profile)}
              type={buttonType.purple}
              style={{paddingBottom: 0}}
            />
            <Button
              title={'Отменить'}
              onPress={() => navigation.navigate(Routes.Profile)}
              type={buttonType.transparent}
              textStyle={{color: '#808080'}}
            />
          </View>
        </ScrollView>
        <BottomDrawer full height={240} startUp={bottomDrawer}>
          <Container>
            <Title text={'Добавить фотографию'} left unBottom fontSize={18} />
            <View style={s.btnContainer}>
              <TouchableOpacity style={s.btnChoise} onPress={() => {}}>
                <Text style={s.btnChoiseText}>Сделать фотографию</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[s.btnChoise, {borderTopColor: 'transparent'}]}
                onPress={() => {}}>
                <Text style={s.btnChoiseText}>Загрузить из галереи</Text>
              </TouchableOpacity>
            </View>
            <Button
              title={'Отмена'}
              onPress={() => setBottomDrawer(false)}
              type={buttonType.transparent}
              textStyle={{color: '#858585'}}
            />
          </Container>
        </BottomDrawer>
        <BottomDrawer full height={240} startUp={bottomDrawer}>
          <Container>
            <Title text={'Добавить фотографию'} left unBottom fontSize={18} />
            <View style={s.btnContainer}>
              <TouchableOpacity style={s.btnChoise} onPress={() => navigation.navigate(Routes.CameraScreen) }>
                <Text style={s.btnChoiseText}>Сделать фотографию</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[s.btnChoise, {borderTopColor: 'transparent'}]}
                onPress={() => {}}>
                <Text style={s.btnChoiseText}>Загрузить из галереи</Text>
              </TouchableOpacity>
            </View>
            <Button
              title={'Отмена'}
              onPress={() => setBottomDrawer(false)}
              type={buttonType.transparent}
              textStyle={{color: '#858585'}}
            />
          </Container>
        </BottomDrawer>
      </Container>
    </TabBar>
  );
}

const s = StyleSheet.create({
  block: {
    paddingTop: 20,
  },
  title: {
    marginBottom: 20,
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
  photoFrame: {
    position: 'absolute',
    width: 120,
    height: 120,
  },
  inputBlock: {
    paddingBottom: 55,
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
});
