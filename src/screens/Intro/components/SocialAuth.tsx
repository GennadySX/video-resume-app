import React from 'react';
import Button, {buttonType} from '../../../components/ui/buttons';
import {Icons} from '../../../helpers/Assets';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export interface ISocialAuth {
  onClose: () => void;
}

export function SocialAuth(props: ISocialAuth) {
  const navigation = useNavigation();

  const closeIt = () =>
    Promise.resolve(props.onClose()).then(() => navigation.navigate('Register'));

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
        onPress={() => {}}
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
