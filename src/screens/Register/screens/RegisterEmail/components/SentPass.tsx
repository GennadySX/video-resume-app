import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import Title from '../../../../../components/ui/Title';
import Button, {buttonType} from '../../../../../components/ui/buttons';
import {sentPass as s} from '../styles/SentPass';
import {IconsSvg} from '../../../../../helpers/IconsSVG';
import {Width} from '../../../../../helpers/Normalizer';
import {AssetsPopup, Icons} from '../../../../../helpers/Assets';
import Container from '../../../../../components/Container';

export interface ISentPass {
  onSubmit: () => void;
  goBack: () => void;
}

export default function SentPass({onSubmit, goBack}: ISentPass) {
  return (
    <Container style={s.block}>
      <View style={s.header}>
        <TouchableOpacity
          style={{width: 70, height: 70, alignItems: 'center'}}
          onPress={goBack}>
          <Image source={Icons.back} style={s.backImg} />
        </TouchableOpacity>
        {React.createElement(IconsSvg.LogoMINI, {...s.logoSmall})}
      </View>
      <Title
        left
        text={'Код подтверждения отправлен'}
        style={{width: Width * 0.9}}
      />
      <Text style={s.textDescription}>
        Введите код, который мы отправили Вам на почту sze*********.ru
      </Text>
      <Image
        source={AssetsPopup.vacancy}
        style={{
          width: Width * 0.6,
          height: Width * 0.6,
          resizeMode: 'contain',
          marginBottom: 20,
        }}
      />
      <Button
        title={'Ввести код подтверждения'}
        onPress={() => onSubmit()}
        type={buttonType.purple}
        style={{paddingBottom: 0, width: Width * 0.85}}
      />

      <Button
        title={'Отправить код повторно'}
        onPress={() => {}}
        type={buttonType.transparent}
        textStyle={{color: 'gray', fontSize: 13}}
        style={{marginTop: 5, marginBottom: 0, paddingBottom: 0}}
      />
    </Container>
  );
}
