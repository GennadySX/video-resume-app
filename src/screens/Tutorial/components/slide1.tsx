import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Title from '../../../components/ui/Title';
import {Slide} from '../../../helpers/Assets';
import {slide1Style as s} from '../styles/slide1Style';

export default function Slide1(props: any) {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip} onPress={() => props.onSkip()}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Title text={'Быстрый поиск работы'} style={{marginTop: 25}} left />
      <Text style={s.text}>
        Video Resume - cервис по поиску работы и работников, позволяющий
        сократить время первого касания за счет короткого и емкого видео о
        соискателе или работодателе
      </Text>
      <Image source={Slide.slide1} style={s.img} />
    </View>
  );
}
