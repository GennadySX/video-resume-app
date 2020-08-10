import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

enum tabType {
  aa,
  bb,
}

export default function BlockTab() {
  const [tab, setTab] = React.useState(false);

  return (
    <View style={s.block}>
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
    paddingLeft: 39,
    paddingRight: 39,
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
    fontSize: 13,
    fontFamily: 'Manrope-Medium',
    color: 'gray',
  },
  tabActiveText: {
    color: '#000000',
  },
});
