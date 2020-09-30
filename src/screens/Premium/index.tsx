import React from 'react';
import IntroBackground from '../../components/Background/introBackground';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Width} from '../../helpers/Normalizer';
import Container from '../../components/Container';
import {styles} from '../../styles/style';
import Title from '../../components/ui/Title';
import {useNavigation} from '@react-navigation/native';
//icons
import CheckMark from '../../assets/svg/checkmark.svg';
import Button, {buttonType} from '../../components/ui/buttons';
import {Routes} from '../../routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {PREMIUM_ACCOUNT} from '../../store/actions/profileAction';
import {IconsSvg} from "../../helpers/IconsSVG";
import ScrollShadow from "../../components/ScrollShadow";

export interface IPremiumScreen {}

export default function PremiumScreen(props: IPremiumScreen) {
  const dispatch = useDispatch();

  const premium: boolean = useSelector(({profile}: any) => profile.premium);

  const navigation = useNavigation();
  return (
      <ScrollShadow showsVerticalScrollIndicator={false}>
        <IntroBackground>
            <Container style={s.topBlock}>
              <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
                <Text style={s.skipText}>В другой раз</Text>
              </TouchableOpacity>
            </Container>
            <Title text={'Premium-аккаунт'} center />
            <Container style={s.slideMarkContainer}>
              {React.createElement(IconsSvg.Premium, {width: Width*0.4})}
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
              title={premium ? 'Отключить режим премиума' : 'Попробовать'}
              onPress={() => {
                dispatch({type: PREMIUM_ACCOUNT, premium: true});
                navigation.navigate(Routes.Profile, {active: true});
              }}
              type={premium ? buttonType.lightred : buttonType.purple}
              style={s.btnSubmit}
            />
        </IntroBackground>
      </ScrollShadow>
  );
}

const s = StyleSheet.create({
  topBlock: {
    width: Width,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 30,
  },
  skipText: {
    ...styles.fontMedium,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  slideMarkContainer: {
    marginBottom: 20,
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
    marginTop: 20,
  },
  btnSubmit: {
    marginTop: 10,
    marginBottom: 20
  },
});
