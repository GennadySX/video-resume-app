import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../helpers/Assets';
import {miniCardStyle as s} from '../styles/miniCardStyle';
import Container from "../../../components/Container";
import {useNavigation} from '@react-navigation/native';
import {Routes} from "../../../routes/Routes";

export interface IMiniCard {
  latest?: boolean;
  active?: boolean;
  new?: boolean;
}

export default function MiniCard(props: IMiniCard) {
  const [feedback, setFeedback] = React.useState(false);
  const navigation = useNavigation();
  return (
    <Container style={[s.block, props.latest && {marginBottom: 30}]}>
      <View style={s.blockChild}>
        <TouchableOpacity style={s.body} onPress={() => navigation.navigate(Routes.Company)} activeOpacity={1}>
          <View style={s.bodyPart}>
            <View>
              <Text style={[s.bodyCardTitle, s.font]}>Google</Text>
            </View>
            <Text style={[s.vacancyText, s.font]}>1200  вакансий</Text>
          </View>
          <TouchableOpacity onPress={() => {}} activeOpacity={1}>
            <LinearGradient
              colors={['#6b35af', 'rgba(191,129,232,0.69)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={s.badge}>
              <Text style={[s.badgeTitle, s.font]}>1 вакансии</Text>
            </LinearGradient>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={s.footer}>
          <View style={s.bodyGeo}>
            <Image source={Icons.geo} style={s.geoIcon} />
            <Text style={[s.font, s.geoText]}>Казань</Text>
          </View>
          <TouchableOpacity
            onPress={() => setFeedback(!feedback)}
            activeOpacity={1}>
            {feedback ? (
              <Text style={[s.footerText, {color: '#33be86'}]}>
                Вы отписаны
              </Text>
            ) : (
              <Text style={s.footerText}>Отписаться</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
