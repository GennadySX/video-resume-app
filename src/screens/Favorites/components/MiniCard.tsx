import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../helpers/Assets';
import {miniCardStyle as s} from '../styles/miniCardStyle';

export interface IMiniCard {
  latest?: boolean;
  active?: boolean;
  new?: boolean;
}

export default function MiniCard(props: IMiniCard) {
  const [feedback, setFeedback] = React.useState(false);

  return (
    <View style={[s.block, props.latest && {marginBottom: 30}]}>
      <View style={s.blockChild}>
        <View style={s.body}>
          <View style={s.bodyPart}>
            <TouchableOpacity onPress={() => {}} activeOpacity={1}>
              <Text style={[s.bodyCardTitle, s.font]}>Google</Text>
            </TouchableOpacity>
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
        </View>
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
    </View>
  );
}
