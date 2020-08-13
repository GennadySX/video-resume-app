import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Assets, Icons} from '../../../helpers/Assets';

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

const s = StyleSheet.create({
  block: {
    marginTop: 15,
    padding: 2,
  },
  blockChild: {
    flexDirection: 'column',
    paddingBottom: 7,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#fafafa',
    padding: 17,
    paddingTop: 10,
  },
  font: {
    fontFamily: 'Manrope-Medium',
  },

  body: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  bodyPart: {},
  bodyCardTitle: {
    fontSize: 15,
  },
  badge: {
    padding: 5,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50
  },
  badgeTitle: {
    fontSize: 10,
    color: '#fafafa'
  },
  vacancyText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    color: 'rgba(39,39,39,0.5)',
  },
  bodyGeo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    height: 25,
  },
  geoIcon: {
    position: 'relative',
    right: 3,
    resizeMode: 'contain',
    width: 20,
  },
  geoText: {
    fontSize: 11,
    color: 'rgba(39,39,39,0.5)',
  },
  footer: {
    width: '100%',
    paddingTop: 7,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footerText: {
    alignSelf: 'flex-end',
    color: '#481380',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
