import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Title from '../../../components/ui/Title';
import {Slide} from '../../../helpers/Assets';
import {slide2Style as s} from '../styles/slide2Style';

export default function Slide2(props: any) {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip} onPress={() => props.onSkip()}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Создание видео-резюме'} style={s.title} left />
      <Text style={s.text}>
          Заполни необходимую информацию, запиши небольшие видеоролики с рассказом о себе, твоём опыте и требованиях и жди отклики от работодателей
      </Text>
      <Image source={Slide.slideResume2} style={s.img} />
    </View>
  );
}
