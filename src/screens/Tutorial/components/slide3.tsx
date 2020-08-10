import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Title from '../../../components/Title';
import {Icons, Slide} from '../../../helpers/Assets';
import {Width} from "../../../helpers/Normalizer";

export default function Slide3(props: any) {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip} onPress={() => {}}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Работа в короткие сроки'} style={s.title} />
      <Text style={s.text}>
        Экономия времени позволяет найти работу в короткие сроки
      </Text>
      <Image source={Slide.slide3} style={s.img} />
      <TouchableOpacity onPress={() => props.onClick()} style={s.next}>
          <Image source={Icons.next} style={[s.img]} />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    padding: 25,
  },
  title: {left: 0, marginTop: 25, position: 'relative', top: 25},
  text: {
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
    position: 'relative',
    top: 15
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
    top: 10
  },
  btnSkipText: {
    color: 'gray',
    fontSize: 16,
  },
  next: {
    alignSelf: 'flex-end',
    left: Width * 0.379,
    bottom: 22,
  }
});
