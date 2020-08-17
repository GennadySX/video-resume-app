import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Index from '../../../components/ui/Title';
import {Slide} from '../../../helpers/Assets';
import {slide1Style as s} from '../styles/slide1Style';

export default function Slide1() {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Index text={'Быстрый поиск работы'} style={{left: 0, marginTop: 25}} />
      <Text style={s.text}>
        Video Resume - cервис по поиску работы и работников, позволяющий
        сократить время первого касания за счет короткого и емкого видео о
        соискателе или работодателе
      </Text>
      <Image source={Slide.slide1} style={s.img} />
    </View>
  );
}
