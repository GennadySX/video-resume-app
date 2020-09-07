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
      <Title text={'Собеседования в телефоне'} style={s.title} left />
      <Text style={s.text}>
        Соискатели загружают свои видео-резюме для работодателей, а работодатели
        размещают видео-вакансии. С подходящими кандидатами проводят
        видео-собеседования
      </Text>
      <Image source={Slide.slide2} style={s.img} />
    </View>
  );
}
