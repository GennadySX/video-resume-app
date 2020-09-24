import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Assets, AssetsPopup, Icons} from '../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {CardStyle as s} from './styles';
import {styles} from '../../styles/style';
import Container from '../Container';
import BottomDrawer from '../BottomDrawer';
import Title from '../ui/Title';
import {resumeListJSON} from '../../json/resumeList';
import ResumeCard from '../../screens/Vacancy/components/ResumeCard';
import Button, {buttonType} from '../ui/buttons';
import Popup from '../Popup';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../routes/Routes';
import {IconsSvg} from '../../helpers/IconsSVG';

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
  const [isBottomDrawer, setIsBottomDrawer] = React.useState(false);
  const [onChoose, setOnChoose] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [isSend, setIsSend] = React.useState(false);
  const [likedPopup, setLikedPopup] = React.useState(false);
  const navigation = useNavigation();

  const passScreen = (screen: Routes) => {
    Promise.resolve(setLikedPopup(!likedPopup)).then(() =>
      navigation.navigate(screen),
    );
  };

  return (
    <View>
      <Container
        style={[
          s.block,
          props.latest && {marginBottom: 180},
          props.unPadding && {paddingLeft: 0, paddingRight: 0},
        ]}>
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
                  onPress={() => {
                    setActive(!active);
                    if (!active) {
                      setLikedPopup(!likedPopup);
                    }
                  }}
                  activeOpacity={1}>
                  {(
                    React.createElement(
                        active ?  IconsSvg.HeartActiveFullIcon : IconsSvg.LikeIcon,
                      s.headerHeartIcon,
                    )
                  )}
                </TouchableOpacity>
              )}
            </View>
            <View style={s.body}>
              <TouchableOpacity
                onPress={() => props.onClick()}
                activeOpacity={1}>
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
                  onPress={() => {
                    setActive(!active);
                    if (!active) {
                      setLikedPopup(!likedPopup);
                    }
                  }}
                  activeOpacity={1}>
                  <Image
                    source={active ? Icons.heartActive : Icons.heart}
                    style={s.headerHeartIcon}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={s.body}>
              <TouchableOpacity
                onPress={() => navigation.navigate(Routes.VideoScreen)}
                activeOpacity={1}>
                <Image source={Assets.cardAsset} style={s.bodyImage} />
              </TouchableOpacity>

              <View style={s.bodyPart}>
                <TouchableOpacity
                  onPress={() => props.onClick()}
                  activeOpacity={1}>
                  <Text style={[s.bodyCardTitle, s.font]}>Web-дизайнер</Text>
                  <Text style={[s.companyText, s.font]}>Компания</Text>
                  <Text style={[s.salaryText, s.font]}>от 30000 р</Text>
                  <Text style={[s.experienceText, s.font]}>от 1 года</Text>
                  <View style={s.bodyGeo}>
                    <Image source={Icons.geo} style={s.geoIcon} />
                    <Text style={[s.font, s.geoText]}>Казань</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.footer}>
              <TouchableOpacity
                onPress={() => {
                  setIsBottomDrawer(true);
                }}
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
      <BottomDrawer
        full
        height={onChoose ? 280 : 230}
        startUp={isBottomDrawer}
        onClose={() => setIsBottomDrawer(false)}>
        <Container unPadding>
          <Title text={'Выберите резюме'} fontSize={18} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 10}}>
            {resumeListJSON.map((resume: any, index: number) => (
              <ResumeCard
                key={index}
                value={resume}
                first={index === 0}
                onClick={(item: any) => {
                  setOnChoose(true);
                  setSelected(item);
                }}
                active={selected === resume.id || !selected}
              />
            ))}
          </ScrollView>
          <View>
            {onChoose && (
              <Button
                title={'Отправить'}
                onPress={() => {
                  setIsSend(true);
                  setIsBottomDrawer(false);
                  setFeedback(!feedback);
                }}
                type={buttonType.purple}
                style={{paddingBottom: 1}}
                textStyle={{fontSize: 13}}
              />
            )}
            <Button
              title={'Отмена'}
              onPress={() => setIsBottomDrawer(false)}
              type={buttonType.transparent}
              textStyle={{color: '#575456', fontSize: 13}}
            />
          </View>
        </Container>
      </BottomDrawer>

      <Popup visible={isSend} onClose={() => setIsSend(false)}>
        <Container style={s.container}>
          <Title
            text={'Резюме отправлено'}
            left
            fontSize={18}
            style={{marginBottom: 10}}
          />
          <Text style={s.desc}>
            Ваше резюме успешно отправлено, его состояние можно отследить в
            разделе “Отклики”
          </Text>
          <Image source={AssetsPopup.vacancy} style={s.img} />
          <Button
            title={'Понятно'}
            onPress={() => setIsSend(false)}
            type={buttonType.transparent}
            textStyle={s.btnText}
            style={s.btn}
          />
        </Container>
      </Popup>
      <Popup visible={likedPopup} onClose={() => setLikedPopup(!likedPopup)}>
        <Container style={s.container}>
          <Title
            text={'Профессия в Избранном'}
            left
            fontSize={18}
            style={{marginBottom: 10}}
          />
          <Text style={s.desc}>
            Добавляя профессию в Избранное, можно отслеживать за их новыми
            вакансиями
          </Text>
          <Image source={AssetsPopup.liked} style={s.img} />
          <Button
            title={'Перейти в Избранное'}
            onPress={() => passScreen(Routes.Favorites)}
            type={buttonType.purple}
            style={s.btn}
          />
          <Button
            title={'Закрыть'}
            onPress={() => setLikedPopup(!likedPopup)}
            type={buttonType.transparent}
            textStyle={[s.btnText, {...styles.fontBold}]}
            style={s.btn}
          />
        </Container>
      </Popup>
    </View>
  );
}
