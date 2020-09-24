import React from 'react';
import Button, {buttonType} from '../../../components/ui/buttons';
import {Icons} from '../../../helpers/Assets';
import {View, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Storage} from '../../../helpers/Storage';
import Title from '../../../components/ui/Title';
import {Routes} from '../../../routes/Routes';
import VKLogin from 'react-native-vkontakte-login';
import {VKAPI} from '../../../constants/API';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
export interface ISocialAuth {
  onClose: () => void;
}

export function SocialAuth(props: ISocialAuth) {
  const navigation = useNavigation();

  //const [user, setUser] = React.useState<any>();

  const init = () => {
    GoogleSignin.configure({
      webClientId:
        '581895421213-qfnh61g6vgd1taa014qgpvqhj8f59ujv.apps.googleusercontent.com',
      scopes: ['openid', 'email', 'profile'],
      offlineAccess: true,
    });

    VKLogin.initialize(VKAPI.id);
    // VKLogin.getCertificateFingerprint().then((isFinger) => console.log('fingerPrint is: ', isFinger))
  };
  init();

  const closeIt = (screen?: Routes) =>
    Promise.resolve(props.onClose()).then(() =>
      navigation.navigate(screen || 'Register'),
    );

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      Promise.all([
        Storage.set('user', userInfo.user),
        Storage.set('userIdToken', userInfo.idToken),
      ]).then(() => closeIt());
    } catch (error) {
      console.log('err', error);
    }
  };

  const signVk = async () => {
    console.log('start running auth: ');
    try {
      const isLoggedIn = await VKLogin.isLoggedIn();
      if (!isLoggedIn) {
        const auth = await VKLogin.login(['email', 'photo', 'friend']);
        console.log('auth data: ', auth);
      }
      closeIt(Routes.Profile);
    } catch (e) {
      console.log('e is', e);
    }
    //await VKLogin.logout();
  };

  const signFacebook = async () => {
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
    const facebookCredential = await auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    console.log('facebookCredential is: ', facebookCredential);
    if (facebookCredential && facebookCredential.token) {
      await closeIt(Routes.Profile);
    }
    auth().signInWithCredential(facebookCredential);
  };

  return (
    <View>
      <Title text={'Войти'} bottom={15} />
      <Button
        onPress={closeIt}
        title={'С помощью номера телефона'}
        type={buttonType.purple}
      />
      <Button
        onPress={() => signVk()}
        title={'Вконтакте'}
        icon={Icons.vk}
        type={buttonType.lightblue}
        textStyle={{top: 1}}
      />
      <Button
        onPress={() => signFacebook()}
        title={'Facebook'}
        type={buttonType.blue}
        icon={Icons.facebook}
        textStyle={{top: 2}}
      />
      <Button
        onPress={() => closeIt(Routes.Error)}
        title={'Одноклассники'}
        type={buttonType.orange}
        icon={Icons.ok}
      />
      <Button
        onPress={() => signIn()}
        title={'Google'}
        type={buttonType.white}
        icon={Icons.google}
        shadow
      />
      {Platform.OS === 'ios' && (
        <Button
          onPress={() => closeIt(Routes.Error)}
          title={'Apple ID'}
          type={buttonType.black}
          icon={Icons.apple}
        />
      )}
      <Button
        onPress={() => closeIt(Routes.SearchPage)}
        title={'Продолжить без входа'}
        type={buttonType.transparent}
        textStyle={{color: 'gray'}}
      />
    </View>
  );
}
