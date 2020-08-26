/*
 * GennadySX @2020
 */

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Assets, Icons} from '../../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {swipeCardStyle as s} from '../styles/swipeCardStyle';
import {IconsSvg} from "../../../helpers/IconsSVG";

export interface ICard {
  latest?: boolean;
  active?: boolean;
  new?: boolean;
  onClick: () => void;
  disLikeAble?: boolean;
  feedback?: boolean;
  flagged?: boolean;
  inviteTitle?: string;
}

export default function SwipeCard(props: ICard) {
  const [active, setActive] = React.useState(false);
  const [feedback, setFeedback] = React.useState(!props.feedback);

  const renderLeftActions = (progress: any, dragX: any) => {
    return (
      <RectButton style={s.leftAction} onPress={() => {}}>
        <LinearGradient
          colors={['rgba(133,37,221,0.14)', 'rgba(255,226,255,0.72)']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={s.leftActionChild}>
          <TouchableOpacity onPress={() => {}} style={s.leftActionContainer}>
            <Image source={Icons.basket} style={s.leftActionIcon} />
            <Text style={s.leftActionText}>Удалить</Text>
          </TouchableOpacity>
          <View style={s.liner} />
          <TouchableOpacity onPress={() => {}} style={s.leftActionContainer}>
            <Image
              source={Icons.flag}
              style={[s.leftActionIcon, s.leftActionIconFlag]}
            />
            <Text style={s.leftActionText}>Отметить флажком</Text>
          </TouchableOpacity>
        </LinearGradient>
      </RectButton>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <View style={[s.block, props.latest && {marginBottom: 180}]}>
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
            {props.flagged && (
              <TouchableOpacity
                onPress={() => setActive(!active)}
                activeOpacity={1}>
                {React.createElement(IconsSvg.FlagRedIcon, {width: 17, height: 17})}
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

              {!props.feedback && (
                <>
                  <Text style={[s.salaryText, s.font]}>от 30000 р</Text>
                  <Text style={[s.experienceText, s.font]}>от 1 года</Text>
                </>
              )}
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
              {props.inviteTitle ?
                  <Text style={[s.footerText, s.inviteTitle, {color: 'rgba(128,125,125,0.69)'}]}>{props.inviteTitle}</Text>
                  : feedback  ? (
                      <Text style={[s.footerText, {color: '#D05F5F'}]}>Отказ</Text>
                  ) : (
                      <Text style={s.footerText}>Приглашение</Text>
                  )
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}
