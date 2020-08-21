/*
 * GennadySX @2020
 */

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
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
import {useNavigation} from "@react-navigation/native";

export interface IProfileEditScreen {}

export default function ProfileEditScreen(props: IProfileEditScreen) {
  const navigation = useNavigation()

  return (
    <TabBar active={Routes.Profile}>
      <Container style={s.block}>
        <Title text={'Редактирование'} left style={s.title} />
        <ScrollView showsVerticalScrollIndicator={false} >
          <Container style={s.avatarContainer}>
            <TouchableOpacity style={s.avatarBtn} onPress={() => {}}>
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
    paddingBottom: 55
  }
});
