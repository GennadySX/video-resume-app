import React from 'react';
import {connect} from 'react-redux';
import {View, Image, TouchableOpacity} from 'react-native';
import IntroBackground from '../../components/Background/introBackground';
import Swiper from 'react-native-swiper';
import {Icons} from '../../helpers/Assets';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';
import {tutorialScreenStyle as s} from './styles';
import {Routes} from "../../routes/Routes";

export interface ITutorialScreen {}

class TutorialScreen extends React.Component<any, any> {
  constructor(props: ITutorialScreen) {
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
      index <= 2
        ? this.setState({swipeIndex: index})
        : this.skip(),
    );
  }

  skip() {
    this.props.navigation.navigate(Routes.SearchPage)
  }

  render() {
    const {swipeIndex} = this.state;
    return (
      <IntroBackground hiddenDot >
        <Swiper
          ref={(ref: any) => (this.swiperRef = ref)}
          loop={false}
          showsButtons={true}
          buttonWrapperStyle={s.btnWrapper}
          style={s.wrapper}
          index={swipeIndex}
          prevButton={<View />}
          paginationStyle={{
            position: 'relative',
            left: -140,
            bottom: 50,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 50,
          }}
          activeDotStyle={{
            width: 10,
            height: 10,
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
          <View style={s.slide3}>
            <Slide3 onSkip={() => this.skip()} />
          </View>
        </Swiper>
        <TouchableOpacity
          activeOpacity={1}
          style={s.nextBtn}
          onPress={() => this.next(swipeIndex + 1)}>
          <Image source={Icons.next}  style={{resizeMode: 'contain', width: 25, height: 25}} />
        </TouchableOpacity>
      </IntroBackground>
    );
  }
}

export default connect()(TutorialScreen);
