import React from 'react';

import Video from 'react-native-video';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';

import {Assets, Icons} from '../../helpers/Assets';
import {videoScreenStyle as s} from './styles';

//icons
import NextIcon from '../../assets/svg/nextSpeed.svg';
import PlayIcon from '../../assets/svg/play.svg';
import PauseIcon from '../../assets/svg/pause.svg';
import PrevIcon from '../../assets/svg/prevSpeed.svg';
import ArrowDown from '../../assets/svg/arrowDown.svg';

//components
import BottomDrawer from '../../components/BottomDrawer';
import Container from '../../components/Container';
import Title from '../../components/ui/Title';
import {useNavigation} from '@react-navigation/native';

export interface IVideoScreen {}

export default function VideoScreen(props: IVideoScreen) {
  const videoPlayer = React.useRef(null);
  const [pause, setPause] = React.useState(false);
  const [speed, setSpeed] = React.useState(1.0);
  const [videoList, setVideoList] = React.useState(false);

  const navigation = useNavigation();

  const onChoise = () => {
    setVideoList(false);
    videoPlayer.current.seek(0)
  }
  const Vcd = 'https://srv-file8.gofile.io/downloadStore/srv-store1/Qr9BKF/headstrong-tears.mp4';
  return (
    <View style={s.backgroundVideo}>
      <View style={s.header}>
        <TouchableOpacity style={s.headerBack} onPress={() => navigation.goBack()}>
          <Image source={Icons.backWhite} style={s.headerBackIcon} />
        </TouchableOpacity>
        <Text style={s.title}>О компании</Text>
        <View />
      </View>
      <Video
        paused={pause}
        rate={speed}
        source={{uri: Vcd}}
        ref={videoPlayer}
        style={s.backgroundVideo}
        resizeMode={'contain'}
        fullscreen={true}
        fullscreenOrientation={'portrait'}
      />
      <View style={s.controlsBlock}>
        <TouchableOpacity
          style={s.play}
          onPress={() => {
            videoPlayer.current.seek(0)
           // setSpeed(speed - 0.2)
          }}>
          <PrevIcon width={s.icon.width} />
        </TouchableOpacity>
        <TouchableOpacity style={s.play} onPress={() => setPause(!pause)}>
          {pause ? (
            <PlayIcon width={s.icon.width} />
          ) : (
            <PauseIcon width={s.icon.width} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={s.play}
          onPress={() => {
            videoPlayer.current.seek(0)
            //setSpeed(speed + 0.2)
          }}>
          <NextIcon width={s.icon.width} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[s.play, s.arrowDown]}
        onPress={() => setVideoList(true)}>
        <Text style={s.arrowDownText}>Другие видео Ивана</Text>
        <ArrowDown width={s.icon.width} style={s.arrowDownIcon} />
      </TouchableOpacity>
      <BottomDrawer startUp={videoList} height={320} full onClose={() => setVideoList(false)} duration={300}>
        <Container>
          <Title
            text={'Другие видео Ивана'}
            left
            fontSize={18}
            style={{top: 10, left: 10}}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={s.videoContainer}>
              <TouchableOpacity style={s.videoItem} onPress={onChoise}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={onChoise}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={onChoise}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={onChoise}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={onChoise}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={onChoise}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Container>
      </BottomDrawer>
    </View>
  );
}
