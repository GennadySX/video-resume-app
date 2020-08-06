import {StyleSheet, Animated, Easing} from 'react-native';
import React from 'react';
import Button, {buttonType} from '../ui/buttons';
import {Height, Width} from '../../helpers/Normalizer';
import {Icons} from '../../helpers/Assets';

export default class SignDrawer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      topAnim: -500,
    };
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(-500);
    Animated.timing(this.spinValue, {
      useNativeDriver: false,
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
    }).start();
  }

  render() {
    return (
      <Animated.View style={[styles.container, {bottom: this.spinValue}]}>
        <Button
          onPress={() => {}}
          title={'С помощью номера телефона'}
          type={buttonType.purple}
        />
        <Button
          onPress={() => {}}
          title={'Вконтакте'}
          icon={Icons.vk}
          type={buttonType.lightblue}
          textStyle={{top: 1}}
        />
        <Button
          onPress={() => {}}
          title={'Facebook'}
          type={buttonType.blue}
          icon={Icons.facebook}
          textStyle={{top: 2}}
        />
        <Button
          onPress={() => {}}
          title={'Одноклассники'}
          type={buttonType.orange}
          icon={Icons.ok}
        />
        <Button
          onPress={() => {}}
          title={'Google'}
          type={buttonType.white}
          icon={Icons.google}
          shadow
        />
        <Button
          onPress={() => {}}
          title={'Apple ID'}
          type={buttonType.black}
          icon={Icons.apple}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Width * 0.9,
    backgroundColor: '#fafafa',
    paddingTop: 40,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: 'absolute',
    bottom: -500,
    paddingBottom: 100,
    shadowColor: 'lightgray',
    elevation: 7,
  },
  welcome: {},
  instructions: {},
});
