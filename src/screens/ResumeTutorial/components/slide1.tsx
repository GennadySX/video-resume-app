import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Index from '../../../components/ui/Title';
import {Slide} from '../../../helpers/Assets';
import {slide1Style as s} from '../styles/slide1Style';

export default function Slide1(props: any) {
  return (
    <View style={s.block}>
      <TouchableOpacity style={s.btnSkip} onPress={() => props.onSkip()}>
        <Text style={s.btnSkipText}>Пропустить</Text>
      </TouchableOpacity>
      <Index text={'Создание видео-резюме'} style={{left: 0, marginTop: 25}} left />
      <Text style={s.text}>
          Создание видео-резюме - это прекрасная возможность значительно сократить своё время поиска работы засчёт коротких видеороликов
      </Text>
      <Image source={Slide.slideResume1} style={s.img} />
    </View>
  );
}
