import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {blockTabStyle as s} from '../styles/blockTabStyle';

export interface IBlockTab {
  titles: string[];
  onClick: (value: boolean) => void;
  selected?: boolean;
}

export default function BlockTab(props: IBlockTab) {
  const [tab, setTab] = React.useState(props.selected);

  return (
    <View style={s.block}>
      <TouchableOpacity
        onPress={() => {
          props.onClick(false);
          setTab(false);
        }}
        activeOpacity={1}>
        <LinearGradient
          style={[s.tab, s.line]}
          colors={
            !tab
              ? ['rgba(133,37,221,0.14)', 'rgba(255,226,255,0.72)']
              : ['rgba(133,37,221,0.04)', 'rgba(255,226,255,0.44)']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={[s.tabText, !tab && s.tabActiveText]}>
            {props.titles[0]}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.onClick(true);
          setTab(true);
        }}
        activeOpacity={1}>
        <LinearGradient
          style={[s.tab, s.outLine]}
          colors={
            tab
              ? ['rgba(133,37,221,0.14)', 'rgba(255,226,255,0.72)']
              : ['rgba(133,37,221,0.02)', 'rgba(255,226,255,0.44)']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={[s.tabText, tab && s.tabActiveText]}>
            {props.titles[1]}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
