import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {blockTabStyle as s} from '../styles/blockTabStyle';
import Container from "../../../components/Container";

export default function BlockTab() {
  const [tab, setTab] = React.useState(false);

  return (
    <Container style={s.block}>
      <TouchableOpacity onPress={() => setTab(false)}>
        <LinearGradient
          style={[s.tab, s.line]}
          colors={
            !tab
              ? ['rgba(133,37,221,0.14)', 'rgba(255,226,255,0.72)']
              : ['rgba(133,37,221,0.04)', 'rgba(255,226,255,0.44)']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={[s.tabText, !tab && s.tabActiveText]}> Подходящие</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab(true)}>
        <LinearGradient
          style={[s.tab, s.outLine]}
          colors={
            tab
              ? ['rgba(133,37,221,0.14)', 'rgba(255,226,255,0.72)']
              : ['rgba(133,37,221,0.02)', 'rgba(255,226,255,0.44)']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={[s.tabText, tab && s.tabActiveText]}> Поблизости</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Container>
  );
}
