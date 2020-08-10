import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Title from '../../../components/Title';
import {Slide} from '../../../helpers/Assets';
import {Width} from '../../../helpers/Normalizer';

export default function Slide1() {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Быстрый поиск работы'} style={{left: 0, marginTop: 25}} />
      <Text style={s.text}>
        Video Resume - cервис по поиску работы и работников, позволяющий
        сократить время первого касания за счет короткого и емкого видео о
        соискателе или работодателе
      </Text>
      <Image source={Slide.slide1} style={s.img} />
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
