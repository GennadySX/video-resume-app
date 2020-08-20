import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Index from '../../../components/ui/Title';
import {Slide} from '../../../helpers/Assets';
import {slide2Style as s} from '../styles/slide2Style';

export default function Slide2() {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Index text={'Собеседования в телефоне'} style={s.title} />
      <Text style={s.text}>
        Соискатели загружают свои видео-резюме для работодателей, а работодатели
        размещают видео-вакансии. С подходящими кандидатами проводят
        видео-собеседования
      </Text>
      <Image source={Slide.slide2} style={s.img} />
    </View>
  );
}
