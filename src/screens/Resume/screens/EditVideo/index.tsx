import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Assets} from '../../../../helpers/Assets';
import Container from '../../../../components/Container';
import Title from '../../../../components/ui/Title';
import InputUI from '../../../../components/ui/inputs/input';
import CheckBoxUI from '../../../../components/ui/checkbox';
import Button, {buttonType} from '../../../../components/ui/buttons';
import {useNavigation} from '@react-navigation/native';
import {IconsSvg} from '../../../../helpers/IconsSVG';
import {Routes} from '../../../../routes/Routes';

//styles
import {editVideoScreenStyle as s} from './styles';
import RadioUI from '../../../../components/ui/radio';
import ToggleButton from '../../../../components/ui/buttons/ToggleButton';
import ScrollShadow from "../../../../components/ScrollShadow";

export interface IEditVideoScreen {}

export default function EditVideoScreen(props: IEditVideoScreen) {
  const [inputX, setInputX] = React.useState('');
  const [checkX, setCheckX] = React.useState(true);
  const navigation = useNavigation();

  return (
    <ScrollShadow style={s.block} showsVerticalScrollIndicator={false}>
      <View style={s.topBlock}>
        <Image source={Assets.videEdit} style={s.topBlockBackground} />
        <TouchableOpacity
          style={s.playButton}
          onPress={() => navigation.navigate(Routes.VideoScreen)}>
          {React.createElement(IconsSvg.Play2Icon, s.playButtonIcon)}
        </TouchableOpacity>
      </View>
      <View style={s.bottomBlock}>
        <Container>
          <Title text={'Редактирование'} left fontSize={20} />

          <InputUI
            value={inputX}
            onChangeText={setInputX}
            placeholder={'Название видео'}
            fullWidth
          />
          <ToggleButton
            style={s.toggleButton}
            value={checkX}
            onClick={setCheckX}
            title={'Основное видео'}
          />

          <Button
            title={'Сохранить'}
            onPress={() => navigation.goBack()}
            type={buttonType.purple}
            style={s.saveButton}
          />
        </Container>
      </View>
    </ScrollShadow>
  );
}
