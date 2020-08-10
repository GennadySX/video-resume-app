import React from 'react';
import {connect} from 'react-redux';
import IntroBackground from '../../components/Background/introBackground';
import PhoneInput from './components/PhoneInput';
import ConfirmCode from './components/Confirm';
import BaseInput from './components/BaseInput';
export interface IRegisterScreen {}

class RegisterScreen extends React.Component<any, any> {
  constructor(props: IRegisterScreen) {
    super(props);
    this.state = {
      number: '',
      confirm: true,
      baseInput: false,
    };
  }

  render() {
    const {confirm, number, baseInput} = this.state;
    return (
      <IntroBackground>
        {!number ? (
          <PhoneInput
            onSubmit={(number: string) =>
              this.setState({number: number, confirm: true})
            }
          />
        ) : confirm ? (
          <ConfirmCode onSubmit={() => this.setState({confirm: false})} />
        ) : (
          <BaseInput onSubmit={() => this.props.navigation.navigate('Tutorial')} />
        )}
      </IntroBackground>
    );
  }
}

export default connect()(RegisterScreen);
