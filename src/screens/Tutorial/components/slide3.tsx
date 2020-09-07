import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Title from '../../../components/ui/Title';
import {Icons, Slide} from '../../../helpers/Assets';
import {slide3Style as s} from '../styles/slide3Style';

export default function Slide3(props: any) {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip} onPress={() => props.onSkip()}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Работа в короткие сроки'} style={s.title} left />
      <Text style={s.text}>
        Экономия времени позволяет найти работу в короткие сроки
      </Text>
      <Image source={Slide.slide3} style={s.img} />

    </View>
  );
}
