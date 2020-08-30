import React from 'react';
import IntroBackground from '../../components/Background/introBackground';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Width} from '../../helpers/Normalizer';
import Container from '../../components/Container';
import {styles} from '../../styles/style';
import Title from '../../components/ui/Title';
import {useNavigation} from '@react-navigation/native';

//icons
import SlidePremium from '../../assets/svg/slide/premium.svg';
import CheckMark from '../../assets/svg/checkmark.svg';
import Button, {buttonType} from '../../components/ui/buttons';
import {Routes} from '../../routes/Routes';

export interface IPremiumScreen {}

export default function PremiumScreen(props: IPremiumScreen) {
  const navigation = useNavigation();
  return (
    <IntroBackground>
      <Container style={s.topBlock}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
          <Text style={s.skipText}>В другой раз</Text>
        </TouchableOpacity>
      </Container>
      <Title text={'Premium-аккаунт'} center />
      <Container style={s.slideMarkContainer}>
        <SlidePremium />
      </Container>
      <Container>
        <View style={s.checkMarkBlock}>
          <CheckMark width={20} height={20} />
          <Text style={s.checkmarkText}>
            {' '}
            Первое место Вашего резюме у работодателей
          </Text>
        </View>
        <Text style={[s.checkmarkText, s.descText]}>
          Позволяет более эффективнее и быстрее найти хорошую вакансию
        </Text>
      </Container>
      <Button
        title={'Попробовать'}
        onPress={() => navigation.navigate(Routes.Profile)}
        type={buttonType.purple}
        style={s.btnSubmit}
      />
    </IntroBackground>
  );
}

const s = StyleSheet.create({
  topBlock: {
    width: Width,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 40,
    marginBottom: 40,
  },
  skipText: {
    ...styles.fontMedium,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  slideMarkContainer: {
    marginBottom: 45,
  },
  checkMarkBlock: {
    flexDirection: 'row',
    padding: 15,
  },
  checkmarkText: {
    ...styles.fontMedium,
    paddingLeft: 10,
    paddingRight: 5,
  },
  descText: {
    marginTop: 40,
  },
  btnSubmit: {
    position: 'absolute',
    bottom: 50,
  },
});
