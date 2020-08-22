/*
 * GennadySX @2020
 */

import {Icon} from '../helpers/Icons';
import {Routes} from "../routes/Routes";


export const TAB_MENU = [
  {
    title: 'Поиск',
    icon: Icon.SearchIcon,
    iconActive: Icon.SearchActiveIcon,
    route: Routes.SearchPage,
  },
  {
    title: 'Отклики',
    icon: Icon.FeedbackIcon,
    iconActive: Icon.FeedbackActiveIcon,
    route: Routes.Feedback,
  },
  {
    title: 'Профиль',
    icon: Icon.ProfileIcon,
    iconActive: Icon.ProfileActiveIcon,
    route: Routes.Profile,
  },
  {
    title: 'Чат',
    icon: Icon.ChatIcon,
    iconActive: Icon.ChatActiveIcon,
    route: Routes.Chat,
  },
  {
    title: 'Избранное',
    icon: Icon.LikeIcon,
    iconActive: Icon.LikeActiveTabIcon,
    route: Routes.Favorites,
  },
];
