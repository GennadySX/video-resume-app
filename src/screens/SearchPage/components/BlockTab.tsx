import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {blockTabStyle as s} from '../styles/blockTabStyle';
import Container from "../../../components/Container";

export default function BlockTab() {
  const [tab, setTab] = React.useState(false);

  return (
    <Container style={s.block}>
      <TouchableOpacity onPress={() => setTab(false)} activeOpacity={1}>
        <LinearGradient
          style={[s.tab, s.line]}
          colors={
            !tab
              ? ['rgba(133,37,221,0.14)', 'rgba(241,231,241,0.72)']
                : ['rgba(222,192,250,0.02)', 'rgba(241,222,241,0.44)']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={[s.tabText, !tab && s.tabActiveText]}> Подходящие</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab(true)}  activeOpacity={1}>
        <LinearGradient
          style={[s.tab, s.outLine]}
          colors={
            tab
                ? ['rgba(133,37,221,0.14)', 'rgba(241,231,241,0.72)']
              : ['rgba(222,192,250,0.02)', 'rgba(241,222,241,0.44)']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={[s.tabText, tab && s.tabActiveText]}> Поблизости</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Container>
  );
}
