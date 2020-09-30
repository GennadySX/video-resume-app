/*
 * GennadySX @2020
 */
import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TabBar from '../../components/TabBar';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Title from '../../components/ui/Title';
import {Routes} from '../../routes/Routes';
import CheckBoxUI from '../../components/ui/checkbox';
import {settingsScreenStyle as s} from './styles';
import Button, {buttonType} from '../../components/ui/buttons';
import ScrollShadow from "../../components/ScrollShadow";

export interface ISettings {}

class SettingsScreen extends React.Component<any, any> {
  constructor(props: ISettings) {
    super(props);
    this.state = {
      imLooking: false,
    };
  }

  lookingActive() {
    this.setState({
      imLooking: !this.state.imLooking,
    });
  }

  signOut(route?: Routes) {
    this.props.navigation.navigate(route || Routes.Intro);
  }

  render() {
    const {imLooking} = this.state;
    return (
      <TabBar active={Routes.Profile}>
        <Container style={{paddingTop: 20}}>
          <Header
            backClick={() => this.props.navigation.navigate(Routes.Profile)}
          />
          <Title text={'Настройки'} left />
        </Container>
        <ScrollShadow style={s.block}>
          <Container>
            <View style={s.resultBlock}>
              <CheckBoxUI
                checked={imLooking}
                title={'Я ищу работу'}
                onCheck={() => this.lookingActive()}
              />
              <CheckBoxUI
                checked={!imLooking}
                title={'Я не ищу работу'}
                onCheck={() => this.lookingActive()}
              />
            </View>
            <Text style={s.descBlock}>
              При нажатии на “Я не ищу работу” все резюме и профиль будут скрыты
              от работодателей
            </Text>

            <TouchableOpacity onPress={() => {}} style={[s.btn, s.btnCountry]}>
              <Text style={s.btnText}>Страна поиска</Text>
              <Text style={s.btnValue}>Россия</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signOut(Routes.Tutorial) } style={[s.btn]}>
              <Text style={s.btnText}>О приложении</Text>
            </TouchableOpacity>
          </Container>
          <Button
            style={{marginTop: 20}}
            title={'Выйти из аккаунта'}
            onPress={() => this.signOut()}
            type={buttonType.white}
            textStyle={{color: '#481380'}}
            shadow
          />
        </ScrollShadow>
      </TabBar>
    );
  }
}

export default connect()(SettingsScreen);
