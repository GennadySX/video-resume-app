/*
 * GennadySX @2020
 */

import {Icons} from '../helpers/Assets';
import {Routes} from "../routes/Routes";
import {IconsSvg} from "../helpers/IconsSVG";


export const TAB_MENU = [
  {
    title: 'Поиск',
    icon: IconsSvg.SearchIcon,
    iconActive: IconsSvg.SearchActiveIcon,
    route: Routes.SearchPage,

  },
  {
    title: 'Отклики',
    icon: IconsSvg.FeedbackIcon,
    iconActive: IconsSvg.FeedbackActiveIcon,
    route: Routes.Feedback,
  },
  {
    title: 'Профиль',
    icon: IconsSvg.ProfileIcon,
    iconActive: IconsSvg.ProfileActiveIcon,
    route: Routes.Profile,
  },
  {
    title: 'Чат',
    icon: IconsSvg.ChatIcon,
    iconActive: IconsSvg.ChatActiveIcon,
    route: Routes.Chat,
  },
  {
    title: 'Избранное',
    icon: IconsSvg.LikeIcon,
    iconActive: IconsSvg.LikeActiveTabIcon,
    route: Routes.Favorites,
  },
];
