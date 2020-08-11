import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Index from '../../../components/ui/Title';
import {Slide} from '../../../helpers/Assets';

export default function Slide2() {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Index text={'Собеседования в телефоне'} style={s.title} />
      <Text style={s.text}>
        Соискатели загружают свои видео-резюме для работодателей, а работодатели
        размещают видео-вакансии. С подходящими кандидатами проводят видео-собеседования
      </Text>
      <Image source={Slide.slide2} style={s.img} />
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    padding: 20,
  },
  title: {left: 0, marginTop: 25, position: 'relative', top: 10},
  text: {
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
  },
  img: {
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  btnSkip: {
    padding: 10,
    alignSelf: 'flex-end',
    position: 'relative',
  },
  btnSkipText: {
    color: 'gray',
    fontSize: 16,
  },
});
