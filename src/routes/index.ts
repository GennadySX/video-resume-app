/*
 * GennadySX @2020
 */
import {Routes} from './Routes';
import AuthScreen from '../screens/Auth';
import IntroScreen from '../screens/Intro';
import RegisterScreen from '../screens/Register';
import TutorialScreen from '../screens/Tutorial';
import SearchPageScreen from '../screens/SearchPage';
import VacancyScreen from '../screens/Vacancy';
import SearchResultScreen from '../screens/SearchResult';
import CompanyScreen from '../screens/Company';
import FavoritesScreen from '../screens/Favorites';
import FeedbackScreen from '../screens/Feedback';
import ChatScreen from "../screens/Chat";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import ProfileEditScreen from "../screens/Profile/screens/ProfileEdit";

export const RouteComponents = [
  {
    name: Routes.Intro,
    component: IntroScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Auth,
    component: AuthScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Register,
    component: RegisterScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Tutorial,
    component: TutorialScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.SearchPage,
    component: SearchPageScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.SearchResult,
    component: SearchResultScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Vacancy,
    component: VacancyScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Company,
    component: CompanyScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Favorites,
    component: FavoritesScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Feedback,
    component: FeedbackScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Chat,
    component: ChatScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Profile,
    component: ProfileScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.ProfileEdit,
    component: ProfileEditScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Settings,
    component: SettingsScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
];
