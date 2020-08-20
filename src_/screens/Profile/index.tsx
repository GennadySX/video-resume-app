import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

export interface IAuthScreeen {}

class ProfileScreen extends React.Component<any, any> {
  constructor(props: IAuthScreeen) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  componentDidMount(): void {
    GoogleSignin.configure({
      webClientId:
        '581895421213-qfnh61g6vgd1taa014qgpvqhj8f59ujv.apps.googleusercontent.com',
      scopes: ['openid', 'email', 'profile'],
      offlineAccess: true,
    });
  }

  signIn = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo}, () => console.log('state', this.state));
    } catch (error) {
      // some other error happened.
      console.log('err', error);
    }
  };

  render() {
    return (
      <View>
        <Text> Test Text</Text>
        <Button title="Google Sign-In" onPress={() => this.signIn()} />
      </View>
    );
  }
}

export default connect()(ProfileScreen);
