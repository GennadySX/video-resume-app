import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import {TAB_MENU} from "../../constants/TabMenu";
import {tabBarStyle as s} from "./styles";

interface IMenuList {
  title: string;
  icon: any;
  iconActive: any;
  route: string;
}

export interface ITabBar {
  active?: string;
  onClick?: (menu: string, index?: number) => void;
}

export default function TabBar({ active, onClick}: ITabBar) {
  const navigation = useNavigation()
  const route = useRoute()
  const isActive = (menu: IMenuList) => {
    return menu.route === route.name;
  };

  return (
    <View style={s.container}>
      {TAB_MENU.map((menu: IMenuList, index: number) => (
        <TouchableOpacity
          style={s.tab}
          activeOpacity={1}
          onPress={() => navigation.navigate(menu.route)}
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
