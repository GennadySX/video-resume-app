import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icons} from '../../helpers/Assets';
import {Width} from "../../helpers/Normalizer";

interface IMenuList {
  title: string;
  icon: any;
  iconActive: any;
}

export interface ITabBar {
  menuList: IMenuList[];
  active?: string;
  onClick?: (menu: string, index?: number) => void;
}

export default function TabBar({menuList, active, onClick}: ITabBar) {
  const isActive = (menu: IMenuList) => {
    return menu.title === active;
  };

  return (
    <View style={s.container}>
      {menuList.map((menu: IMenuList, index: number) => (
        <TouchableOpacity
          style={s.tab}
          activeOpacity={1}
          onPress={() => (onClick ? onClick(menu.title, index) : null)}
          key={index}>
          <Image
            source={isActive(menu) ? menu.iconActive : menu.icon}
            style={[s.tabIcon]}
          />
          <Text style={[s.title, isActive(menu) && s.titleActive]}>
            {menu.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: Width,
    backgroundColor: '#F8F2FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 15,
  },
  tab: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  title: {
    color: '#868686',
  },
  titleActive: {
    color: '#481380',
  },
});
