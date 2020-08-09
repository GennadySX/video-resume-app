import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Title from '../../../components/Title';
import {Icons, Slide} from '../../../helpers/Assets';
import {Width} from "../../../helpers/Normalizer";

export default function Slide3() {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Работа в короткие сроки'} style={{left: 0, marginTop: 25}} />
      <Text style={s.text}>
        Экономия времени позволяет найти работу в короткие сроки
      </Text>
      <Image source={Slide.slide3} style={s.img} />
      <Image source={Icons.next} style={[s.img, s.next]} />
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
    width: 300,
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
  next: {
    alignSelf: 'flex-end',
    left: Width * 0.333,
    top: 11
  }
});
