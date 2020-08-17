import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {resumeCardStyle as s} from '../styles/components/ResumeCardStyle';
import Container from '../../../components/Container';

interface IValue {
  id: number;
  title: string;
  link?: string;
}

export interface IResumeCard {
  first?: boolean;
  value: IValue;
  active?: boolean;
  onClick: (item: any) => void;
}

const activeType = ['rgba(157,107,207,0.75)', 'rgba(182,112,255,0.34)'];
const unactiveType = ['rgba(157,107,207,0.29)', 'rgba(182,112,255,0.21)'];

export default function ResumeCard({
  first,
  value,
  active,
  onClick,
}: IResumeCard) {
  return (
    <Container
      linear
      colors={active ? activeType : unactiveType}
      style={[first && {marginLeft: 20}, s.block]}>
      <TouchableOpacity onPress={() => onClick(value.id)}>
        <Text style={s.title}>{value.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={s.showText}>Посмотреть</Text>
      </TouchableOpacity>
    </Container>
  );
}
