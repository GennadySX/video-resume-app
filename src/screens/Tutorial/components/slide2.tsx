import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Title from '../../../components/Title';
import {Slide} from '../../../helpers/Assets';

export default function Slide2() {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Собеседования в телефоне'} style={{left: 0, marginTop: 25}} />
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
  text: {
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
  },
  img: {
    width: 320,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  btnSkip: {
    alignSelf: 'flex-end',
    position: 'relative',
  },
  btnSkipText: {
    color: 'gray',
    fontSize: 16,
  },
});
