import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {View, Image, TouchableOpacity} from 'react-native';
import IntroBackground from '../../components/Background/introBackground';
import Swiper from 'react-native-swiper';
import {Icons} from '../../helpers/Assets';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import {tutorialScreenStyle as s} from './styles';
import {Routes} from '../../routes/Routes';

export interface IResumeTutorialScreen {}

class ResumeTutorialScreen extends React.Component<any, any> {
  public swiperRef: any;
  constructor(props: IResumeTutorialScreen) {
    super(props);
    this.state = {
      number: '',
      confirm: true,
      baseInput: false,
      swipeIndex: 0,
    };
    this.swiperRef = React.createRef();
  }

  next(index: number) {
    Promise.resolve(this.swiperRef.scrollTo(index)).then(() =>
      index < 2 ? this.setState({swipeIndex: index}) : this.skip(),
    );
  }

  skip() {
    this.props.navigation.navigate(Routes.ResumeCreate);
  }

  render() {
    const {swipeIndex} = this.state;
    return (
      <IntroBackground>
        <Swiper
          ref={(ref: any) => (this.swiperRef = ref)}
          loop={false}
          showsButtons={true}
          buttonWrapperStyle={s.btnWrapper}
          onIndexChanged={(index: number) => this.setState({swipeIndex: index})}
          style={s.wrapper}
          index={swipeIndex}
          prevButton={<View />}
          paginationStyle={{
            position: 'relative',
            left: -120,
            bottom: 50,
          }}
          dotStyle={{
            width: 14,
            height: 14,
            borderRadius: 50,
          }}
          activeDotStyle={{
            width: 14,
            height: 14,
            borderRadius: 50,
          }}
          activeDotColor={'#481380'}
          nextButton={<View />}>
          <View style={s.slide1}>
            <Slide1 onSkip={() => this.skip()} />
          </View>
          <View style={s.slide2}>
            <Slide2 onSkip={() => this.skip()} />
          </View>
        </Swiper>
        <TouchableOpacity
          activeOpacity={1}
          style={s.nextBtn}
          onPress={() => this.next(swipeIndex + 1)}>
          <Image source={Icons.next} />
        </TouchableOpacity>
      </IntroBackground>
    );
  }
}

export default connect()(ResumeTutorialScreen);
