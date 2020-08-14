import React from 'react';
import Button, {buttonType} from '../../../components/ui/buttons';
import {Icons} from '../../../helpers/Assets';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from "@react-native-community/google-signin";
import {setStorage, Storage} from "../../../helpers/Storage";

export interface ISocialAuth {
  onClose: () => void;
}

export function SocialAuth(props: ISocialAuth) {
  const navigation = useNavigation();

  const [user, setUser] = React.useState<any>()

  const init = () => {
      GoogleSignin.configure({
          webClientId: '581895421213-qfnh61g6vgd1taa014qgpvqhj8f59ujv.apps.googleusercontent.com',
          scopes: ['openid', 'email', 'profile'],
          offlineAccess: true,

      });
  }
  init();


  const closeIt = () =>
    Promise.resolve(props.onClose()).then(() => navigation.navigate('Register'));


   const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo: any = await GoogleSignin.signIn();
            Promise.all([
                Storage.set('user', userInfo.user),
                Storage.set('userIdToken', userInfo.idToken),
            ]).then(() => closeIt())
        } catch (error) {
            console.log('err', error);
        }
    };


  return (
    <View>
      <Button
        onPress={closeIt}
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
        onPress={() => signIn()}
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
    </View>
  );
}
