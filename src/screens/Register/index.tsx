import React from 'react';
import {connect} from 'react-redux';
import IntroBackground from '../../components/Background/introBackground';
import PhoneInput from './components/PhoneInput';
import ConfirmCode from './components/Confirm';
import BaseInput from './components/BaseInput';
import auth from '@react-native-firebase/auth';
import {Storage} from '../../helpers/Storage';
import {httpPOST} from '../../helpers/HTTP';
import {API} from '../../constants/API';

export interface IRegisterScreen {}

class RegisterScreen extends React.Component<any, any> {
  constructor(props: IRegisterScreen) {
    super(props);
    this.state = {
      number: null,
      user: null,
      confirm: true,
      baseInput: false,
      confirmation: null,
    };
  }

  componentDidMount = () => {
    Storage.get('user', (user: any) => this.setState({user}));
  };

  async signInWithPhoneNumber(phoneNumber: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      this.setState({
        number: phoneNumber,
        confirm: true,
        confirmation: confirmation,
      });
    } catch (e) {
      console.log('phone send error', e);
    }
    this.setState({
      number: phoneNumber,
      confirm: true,
    });
  }

  async confirmCode(code: string) {
    try {
      await this.state.confirmation.confirm(code).then(() => this.sendIt());

    } catch (error) {
      console.log('Invalid code.', error);
    }

    this.setState({confirm: false});
  }

  sendIt() {
    const {number, user} = this.state;
    const data = {
      email: user.email,
      last_name: user.familyName,
      first_name: user.givenName,
      phone_number: '+79991571858',
    };
    // console.log('data is',data )
    return httpPOST(API.signUp, JSON.stringify(data)).then((res: any) => {
      console.log('result ', res);
    });
  }

  render() {
    const {confirm, number, baseInput} = this.state;
    return (
      <IntroBackground hiddenDot>
        {!number ? (
          <PhoneInput
            onSubmit={(number: string) => this.signInWithPhoneNumber(number)}
          />
        ) : confirm ? (
          <ConfirmCode onSubmit={(code: string) => this.confirmCode(code)} />
        ) : (
          <BaseInput
            onSubmit={() => this.props.navigation.navigate('Tutorial')}
          />
        )}
      </IntroBackground>
    );
  }
}

export default connect()(RegisterScreen);
