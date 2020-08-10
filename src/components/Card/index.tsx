import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Assets, Icons} from '../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
export interface ICard {
  latest?: boolean;
  active?: boolean;
  new?: boolean;
  onClick: () => void;
}

export default function Card(props: ICard) {
  const [active, setActive] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);

  return (
    <View style={[s.block, props.latest && {marginBottom: 180}]}>
      {props.new ? (
        <LinearGradient
          colors={['#d3b1ff', 'rgba(233,200,255,0.83)']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={s.blockChild}>
          <View style={s.header}>
            <Text style={[s.cardDate, s.font]}>Сегодня</Text>
            <TouchableOpacity onPress={() => setActive(!active)}>
              <Image
                source={active ? Icons.heartActive : Icons.heart}
                style={s.headerHeartIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={s.body}>
            <TouchableOpacity onPress={() => props.onClick()}>
              <Image source={Assets.cardAsset} style={s.bodyImage} />
            </TouchableOpacity>

            <View style={s.bodyPart}>
              <TouchableOpacity onPress={() => props.onClick()}>
                <Text style={[s.bodyCardTitle, s.font]}>Web-дизайнер</Text>
              </TouchableOpacity>
              <Text style={[s.companyText, s.font]}>Компания</Text>
              <Text style={[s.salaryText, s.font]}>от 30000 р</Text>
              <Text style={[s.experienceText, s.font]}>от 1 года</Text>
              <View style={s.bodyGeo}>
                <Image source={Icons.geo} style={s.geoIcon} />
                <Text style={[s.font, s.geoText]}>Казань</Text>
              </View>
            </View>
          </View>
          <View style={s.footer}>
            <TouchableOpacity onPress={() => setFeedback(!feedback)}>
              {feedback ? (
                <Text style={[s.footerText, {color: '#33be86'}]}>
                  Вы откликнулись
                </Text>
              ) : (
                <Text style={s.footerText}>Откликнуться</Text>
              )}
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : (
        <View style={s.blockChild}>
          <View style={s.header}>
            <Text style={[s.cardDate, s.font]}>Сегодня</Text>
            <TouchableOpacity onPress={() => setActive(!active)}>
              <Image
                source={active ? Icons.heartActive : Icons.heart}
                style={s.headerHeartIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={s.body}>
            <TouchableOpacity onPress={() => props.onClick()}>
              <Image source={Assets.cardAsset} style={s.bodyImage} />
            </TouchableOpacity>

            <View style={s.bodyPart}>
              <TouchableOpacity onPress={() => props.onClick()}>
                <Text style={[s.bodyCardTitle, s.font]}>Web-дизайнер</Text>
              </TouchableOpacity>
              <Text style={[s.companyText, s.font]}>Компания</Text>
              <Text style={[s.salaryText, s.font]}>от 30000 р</Text>
              <Text style={[s.experienceText, s.font]}>от 1 года</Text>
              <View style={s.bodyGeo}>
                <Image source={Icons.geo} style={s.geoIcon} />
                <Text style={[s.font, s.geoText]}>Казань</Text>
              </View>
            </View>
          </View>
          <View style={s.footer}>
            <TouchableOpacity onPress={() => setFeedback(!feedback)}>
              {feedback ? (
                <Text style={[s.footerText, {color: '#33be86'}]}>
                  Вы откликнулись
                </Text>
              ) : (
                <Text style={s.footerText}>Откликнуться</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardDate: {
    fontSize: 11,
    paddingStart: 3,
    color: 'rgba(39,39,39,0.5)',
  },
  headerHeartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  body: {
    paddingTop: 7,
    flexDirection: 'row',
  },
  bodyImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginRight: 17,
  },
  bodyPart: {
    paddingLeft: 10,
  },
  bodyCardTitle: {
    fontWeight: '500',
    fontSize: 15,
  },
  companyText: {
    fontSize: 12,
    color: 'rgba(39,39,39,0.5)',
  },
  salaryText: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  experienceText: {
    fontSize: 11,
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
    justifyContent: 'flex-end',
  },
  footerText: {
    alignSelf: 'flex-end',
    color: '#481380',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
