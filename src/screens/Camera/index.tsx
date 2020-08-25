import React from 'react';
import Container from '../../components/Container';
import {
  Image,
  PermissionsAndroid,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import CameraRoll from '@react-native-community/cameraroll';
//icons
import CaptureIcon from '../../assets/svg/capture.svg';
import TurnIcon from '../../assets/svg/turn.svg';
import FlashIcon from '../../assets/svg/splash.svg';
import FlashOnIcon from '../../assets/svg/splashOn.svg';
import TimerIcon from '../../assets/svg/timer.svg';

import {Icons} from '../../helpers/Assets';
import BottomDrawer from '../../components/BottomDrawer';
import Title from '../../components/ui/Title';
import Button, {buttonType} from '../../components/ui/buttons';

import {cameraScreenStyle as s } from "./styles";

export interface ICameraScreen {
  video?: boolean;
}

export default function CameraScreen(props: ICameraScreen) {
  const camera = React.useRef(null);
  const [front, setFront] = React.useState(false);
  const [flash, setFlash] = React.useState(false);
  const [timerDrawer, setTimerDrawer] = React.useState(false);
  const [record, setRecord] = React.useState(false);

  const navigation = useNavigation();

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      if (data && data.uri) {
        save(data.uri);
      }
    }
  };

  const recordVideo = async () => {
    if (camera && !record) {
      const {uri, codec = 'mp4'} = await camera.current.recordAsync();
      console.log(uri);
      save(uri);
    }
    setRecord(true);
  };

  const stopVideo = async () => {
    const {uri, codec = 'mp4'} = await camera.current.stopRecording();
    if (uri) {
      save(uri);
    }
    setRecord(false);
  };

  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  const save = async (uri: string) => {
    if (Platform.OS === 'android') {
      await checkAndroidPermission();
    }
    await CameraRoll.saveToCameraRoll(uri, 'photo');
  };

  return (
    <Container style={s.container}>
      <RNCamera
        ref={camera}
        style={s.preview}
        type={
          front ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
        }
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <Container style={s.header}>
        <TouchableOpacity
          style={s.headerBack}
          onPress={() => navigation.goBack()}>
          <Image source={Icons.backWhite} style={s.headerBackIcon} />
        </TouchableOpacity>
        <Text style={s.title}>Запись</Text>
        <View style={s.headerRightBlock}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => setFlash(!flash)}>
            {flash ? <FlashOnIcon width={28} height={28} /> : <FlashIcon width={28} height={28} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTimerDrawer(true)}>
            <TimerIcon width={28} height={28} />
          </TouchableOpacity>
        </View>
        <View />
      </Container>

      <Container style={s.controlsBlock}>
        <TouchableOpacity onPress={() => setFront(!front)} style={s.capture}>
          <TurnIcon width={25} height={25} />
        </TouchableOpacity>

        <TouchableOpacity onPress={takePicture} style={s.capture}>
          <CaptureIcon width={70} height={70} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={s.capture}>
          <Image source={Icons.cameraHistory} />
        </TouchableOpacity>
      </Container>
      <BottomDrawer
        startUp={timerDrawer}
        height={300}
        full
        onClose={() => setTimerDrawer(false)}>
        <View>
          <Title text={'Таймер'} fontSize={18} bottom={20} />
          <View style={s.btnContainer}>
            <TouchableOpacity onPress={() => {}} style={s.timerBtn}>
              <Text style={s.timerBtnTitle}>3 секунды</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={s.timerBtn}>
              <Text style={s.timerBtnTitle}>10 секунд</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={s.timerBtn}>
              <Text style={s.timerBtnTitle}>Выключен</Text>
            </TouchableOpacity>
          </View>
          <Button
            title={'Отмена'}
            onPress={() => setTimerDrawer(false)}
            type={buttonType.transparent}
            textStyle={{color: 'gray'}}
          />
        </View>
      </BottomDrawer>
    </Container>
  );
}
