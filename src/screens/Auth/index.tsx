import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, Linking} from 'react-native';
export interface IAuthScreeen {}
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
class AuthScreen extends React.Component<any, any> {
  constructor(props: IAuthScreeen) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  componentDidMount(): void {}

  async onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    console.log('data is: ', data);
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    console.log('facebookCredential is: ', facebookCredential);

    const fres = auth().signInWithCredential(facebookCredential);

    console.log('fres is: ', fres);
  }

  render() {
    return (
      <View>
        <Text> Test Text</Text>
        <Button
          title="FB Sign-In"
          onPress={() => this.onFacebookButtonPress()}
        />
      </View>
    );
  }
}

export default connect()(AuthScreen);
