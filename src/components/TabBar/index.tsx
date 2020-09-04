import React, {ReactChild, ReactChildren} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TAB_MENU} from '../../constants/TabMenu';
import {tabBarStyle as s} from './styles';
import {Routes} from '../../routes/Routes';
import {IconsSvg} from "../../helpers/IconsSVG";

interface IMenuList {
  title: string;
  icon: any;
  iconActive: any;
  route: Routes;
  isSvg?: ReactChild | any;
}

export interface ITabBar {
  active?: Routes;
  onClick?: (menu: string, index?: number) => void;
  children: ReactChildren | ReactChild | ReactChild[];
}

export default function TabBar({active, onClick, children}: ITabBar) {
  const navigation = useNavigation();
  const route = useRoute();

  const isActive = (menu: IMenuList) => {
    return active ? menu.route === active : menu.route === route.name;
  };

  const propsSvg = {
    width: 27,
    height: 27,
  };

  return (
    <View style={s.block}>
      <View style={s.container}>{children}</View>
      {React.createElement(IconsSvg.Background_Ellipse, s.background)}
      <View style={s.tabContainer}>
        {TAB_MENU.map((menu: IMenuList, index: number) => (
          <TouchableOpacity
            style={s.tab}
            activeOpacity={1}
            onPress={() => navigation.navigate(menu.route)}
            key={index}>
            {isActive(menu)
              ? React.createElement(menu.iconActive, propsSvg)
              : React.createElement(menu.icon, propsSvg)}
            <Text style={[s.title, isActive(menu) && s.titleActive]}>
              {menu.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
