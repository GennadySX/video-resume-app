import React from 'react';
import {Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import IntroBackground from '../../components/Background/introBackground';
import Button, {buttonType} from '../../components/ui/buttons';
import BottomDrawer from '../../components/BottomDrawer';
import {SocialAuth} from './components/SocialAuth';
import {Routes} from '../../routes/Routes';
import {introScreenStyle as s} from './styles';

export interface IIntroScreen {}

const logo = require('../../assets/img/logo.png');

class IntroScreen extends React.Component<any, any> {
  constructor(props: IIntroScreen) {
    super(props);
    this.state = {
      isPanel: false,
    };
  }
  render() {
    return (
      <IntroBackground>
        <View style={s.block}>
          <Image source={logo} style={s.logo} />
          <View style={s.blockBottom}>
            <Text style={s.introText}>Добро пожаловать!</Text>
            <Button
              onPress={() => this.setState({isPanel: true})}
              title={'Войти'}
              type={buttonType.purple}
              style={s.bottomButton}
            />
            <Button
              onPress={() => this.props.navigation.navigate(Routes.SearchPage)}
              title={'Продолжить без входа'}
              type={buttonType.transparent}
              textStyle={{color: 'gray'}}
            />
          </View>
          <BottomDrawer startUp={this.state.isPanel} >
            <SocialAuth onClose={() => this.setState({isPanel: false})} />
          </BottomDrawer>
        </View>
      </IntroBackground>
    );
  }
}

export default connect()(IntroScreen);
