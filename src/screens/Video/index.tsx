import React from 'react';

import Video from 'react-native-video';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Vcd from '../../assets/video/headstrong_tears.mp4';
import {Assets, Icons} from '../../helpers/Assets';
import {videoScreenStyle as s} from './styles';

//icons
import NextSpeedIcon from '../../assets/svg/nextSpeed.svg';
import PlayIcon from '../../assets/svg/play.svg';
import PauseIcon from '../../assets/svg/pause.svg';
import PrevSpeedIcon from '../../assets/svg/prevSpeed.svg';
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
        source={Vcd}
        ref={videoPlayer}
        style={s.backgroundVideo}
        resizeMode={'contain'}
        fullscreen={true}
        fullscreenOrientation={'portrait'}
      />
      <View style={s.controlsBlock}>
        <TouchableOpacity
          style={s.play}
          onPress={() =>  setSpeed(speed - 0.2)}>
          <PrevSpeedIcon width={s.icon.width} />
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
          onPress={() =>  setSpeed(speed + 0.2)}>
          <NextSpeedIcon width={s.icon.width} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[s.play, s.arrowDown]}
        onPress={() => setVideoList(true)}>
        <Text style={s.arrowDownText}>Другие видео Ивана</Text>
        <ArrowDown width={s.icon.width} style={s.arrowDownIcon} />
      </TouchableOpacity>
      <BottomDrawer startUp={videoList} height={320} full>
        <Container>
          <Title
            text={'Другие видео Ивана'}
            left
            fontSize={18}
            style={{top: 10, left: 10}}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={s.videoContainer}>
              <TouchableOpacity style={s.videoItem} onPress={() => {}}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={() => {}}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={() => {}}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={() => {}}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={() => {}}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={s.videoItem} onPress={() => {}}>
                <Image source={Assets.cardVideoA} style={s.videoCardIcon} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Container>
      </BottomDrawer>
    </View>
  );
}
