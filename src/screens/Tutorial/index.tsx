import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import IntroBackground from '../../components/Background/introBackground';
import Swiper from 'react-native-swiper';
import {Icons} from '../../helpers/Assets';
import {Height} from '../../helpers/Normalizer';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';

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
    Promise.resolve(this.swiperRef.scrollTo(index)).then(() => index < 2 &&
      this.setState({swipeIndex: index }),
    );
  }

  render() {
    const {swipeIndex} = this.state;
    return (
      <IntroBackground>
        <Swiper
          ref={(ref: any) => (this.swiperRef = ref)}
          loop={false}
          showsButtons={true}
          buttonWrapperStyle={styles.btnWrapper}
          style={styles.wrapper}
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
          nextButton={
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => this.next(swipeIndex + 1)}>
              <Image source={Icons.next} />
            </TouchableOpacity>
          }>
          <View style={styles.slide1}>
            <Slide1 />
          </View>
          <View style={styles.slide2}>
            <Slide2 />
          </View>
          <View style={styles.slide3}>
            <Slide3 onClick={() => this.props.navigation.navigate('SearchPage')} />
          </View>
        </Swiper>
      </IntroBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  btnWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  nextBtn: {
    marginBottom: 25,
    marginRight: 20,
  },
});

export default connect()(TutorialScreen);
