import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import IntroBackground from '../../../../components/Background/introBackground';
import EmailInput from './components/EmailInput';
import ConfirmCode from './components/Confirm';
import SentPass from './components/SentPass';
import {Routes} from "../../../../routes/Routes";

export interface IRegisterScreen {}

class RegisterEmailScreen extends React.Component<any, any> {
  constructor(props: IRegisterScreen) {
    super(props);
    this.state = {
      email: null,
      sentPass: false,
      emailScreen: true,
      confirm: false,
    };
  }

  async emailSent(email: string) {
    this.setState({
      email: email,
      emailScreen: false,
      sentPass: true,
    });
  }

  async confirmCode() {
    this.props.navigation.reset({
      index: 0,
      routes: [{name: Routes.Profile}],
    });
    this.setState({confirm: false});
  }

  render() {
    const {confirm, emailScreen, sentPass} = this.state;
    return (
      <IntroBackground hiddenDot hideBack={confirm}>
        {emailScreen ? (
          <EmailInput goBack={() => this.props.navigation.goBack()} onSubmit={(email: string) => this.emailSent(email)} />
        ) : !emailScreen && sentPass ? (
          <SentPass
            onSubmit={() => this.setState({emailScreen: false, sentPass: false, confirm: true})}
            goBack={() => this.setState({emailScreen: true, sentPass: false})}
          />
        ) : (
          <ConfirmCode
              goBack={() => this.setState({sentPass: true})}
              onSubmit={() => this.confirmCode()} />
        )}
      </IntroBackground>
    );
  }
}

export default connect()(RegisterEmailScreen);
