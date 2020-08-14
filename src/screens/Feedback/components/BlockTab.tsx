import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Width} from '../../../helpers/Normalizer';

enum tabType {
  aa,
  bb,
}

export interface IBlockTab {
  titles: string[];
  onClick: (value: boolean) => void;
  selected?: boolean
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

const s = StyleSheet.create({
  block: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    padding: 10,
    width: Width * 0.44,
    backgroundColor: 'rgba(72, 19, 128, 0.07)',
    borderRadius: 5,
  },
  line: {
    borderRightColor: 'rgba(109,109,109,0.30)',
    borderRightWidth: 0.5,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  outLine: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  tabActive: {},
  tabText: {
    fontSize: 12,
    fontFamily: 'Manrope-Medium',
    color: 'gray',
    textAlign: 'center',
  },
  tabActiveText: {
    color: '#000000',
  },
});
