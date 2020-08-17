/*
 * GennadySX @2020
 */

import {Icons} from '../helpers/Assets';
import {Routes} from "../routes/Routes";

export const TAB_MENU = [
  {
    title: 'Поиск',
    icon: Icons.search,
    iconActive: Icons.searchActiveOutline,
    route: Routes.SearchPage,
  },
  {
    title: 'Отклики',
    icon: Icons.feedback,
    iconActive: Icons.feedbackActive,
    route: Routes.Feedback,
  },
  {
    title: 'Профиль',
    icon: Icons.profile,
    iconActive: Icons.profileActive,
    route: Routes.Profile,
  },
  {
    title: 'Чат',
    icon: Icons.chat,
    iconActive: Icons.chatActive,
    route: Routes.Chat,
  },
  {
    title: 'Избранное',
    icon: Icons.heart,
    iconActive: Icons.heartActiveOutline,
    route: Routes.Favorites,
  },
];
