import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import IntroBackground from '../../../../components/Background/introBackground';
import EmailInput from './components/EmailInput';
import ConfirmCode from './components/Confirm';
import BaseInput from './components/BaseInput';
import auth from '@react-native-firebase/auth';
import {Storage} from '../../../../helpers/Storage';
import {httpPOST} from '../../../../helpers/HTTP';
import {API} from '../../../../constants/API';

export interface IRegisterScreen {}

class RegisterEmailScreen extends React.Component<any, any> {
  constructor(props: IRegisterScreen) {
    super(props);
    this.state = {
      email: null,
      user: null,
      confirm: true,
      baseInput: false,
      confirmation: null,
    };
  }

  componentDidMount = () => {
    Storage.get('user', (user: any) => this.setState({user}));
  };

  async signInWithPhoneNumber(email: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(email);
      this.setState({
        email: email,
        confirm: true,
        confirmation: confirmation,
      });
    } catch (e) {
      console.log('phone send error', e);
    }
    this.setState({
      email: email,
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
    const {user} = this.state;
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
    const {confirm,  email} = this.state;
    return (
      <IntroBackground hiddenDot hideBack={confirm}>
        {!email && (
          <EmailInput
            onSubmit={(email: string) => this.signInWithPhoneNumber(email)}
          />
        )}
        {confirm && email ? (
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

export default connect()(RegisterEmailScreen);
