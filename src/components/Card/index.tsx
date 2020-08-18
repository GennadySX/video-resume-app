import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Assets, Icons} from '../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {CardStyle as s} from './styles';
import {styles} from '../../styles/style';
import Container from "../Container";

export interface ICard {
  unPadding?: boolean;
  latest?: boolean;
  active?: boolean;
  new?: boolean;
  onClick: () => void;
  disLikeAble?: boolean;
}

export default function Card(props: ICard) {
  const [active, setActive] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);

  return (
    <Container style={[s.block, props.latest && {marginBottom: 180}, props.unPadding && {paddingLeft: 0, paddingRight: 0}]}>
      {props.new ? (
        <LinearGradient
          colors={['#d3b1ff', 'rgba(233,200,255,0.83)']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={s.blockChild}>
          <View style={s.header}>
            <Text style={[s.cardDate, s.font]}>Сегодня</Text>
            {!props.disLikeAble && (
              <TouchableOpacity
                onPress={() => setActive(!active)}
                activeOpacity={1}>
                <Image
                  source={active ? Icons.heartActive : Icons.heart}
                  style={s.headerHeartIcon}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={s.body}>
            <TouchableOpacity onPress={() => props.onClick()} activeOpacity={1}>
              <Image source={Assets.cardAsset} style={s.bodyImage} />
            </TouchableOpacity>

            <View style={s.bodyPart}>
              <TouchableOpacity
                onPress={() => props.onClick()}
                activeOpacity={1}>
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
            <TouchableOpacity
              onPress={() => setFeedback(!feedback)}
              activeOpacity={1}>
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
            {!props.disLikeAble && (
              <TouchableOpacity
                onPress={() => setActive(!active)}
                activeOpacity={1}>
                <Image
                  source={active ? Icons.heartActive : Icons.heart}
                  style={s.headerHeartIcon}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={s.body}>
            <TouchableOpacity onPress={() => props.onClick()} activeOpacity={1}>
              <Image source={Assets.cardAsset} style={s.bodyImage} />
            </TouchableOpacity>

            <View style={s.bodyPart}>
              <TouchableOpacity
                onPress={() => props.onClick()}
                activeOpacity={1}>
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
            <TouchableOpacity
              onPress={() => setFeedback(!feedback)}
              activeOpacity={1}>
              {feedback ? (
                <Text style={[s.footerText, styles.textActive]}>
                  Вы откликнулись
                </Text>
              ) : (
                <Text style={s.footerText}>Откликнуться</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Container>
  );
}
