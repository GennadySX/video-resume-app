/*
 * GennadySX @2020
 */

import AuthScreen from '../screens/Auth';
import IntroScreen from '../screens/Intro';
import RegisterScreen from '../screens/Register';
import TutorialScreen from "../screens/Tutorial";
import SearchPageScreen from "../screens/SearchPage";
import VacancyScreen from "../screens/Vacancy";
import SearchResultScreen from "../screens/SearchResult";
import CompanyScreen from "../screens/Company";
import FavoritesScreen from "../screens/Favorites";

export const Routes = [
  {
    name: 'Intro',
    component: IntroScreen,
    options: {headerShow: false},
  },
  {
    name: 'Auth',
    component: AuthScreen,
    options: {headerShow: false},
  },
  {
    name: 'Register',
    component: RegisterScreen,
    options: {headerShow: false},
  },
  {
    name: 'Tutorial',
    component: TutorialScreen,
    options: {headerShow: false},
  },
  {
    name: 'SearchPage',
    component: SearchPageScreen,
    options: {headerShow: false},
  },
  {
    name: 'SearchResult',
    component: SearchResultScreen,
    options: {headerShow: false},
  },
  {
    name: 'Vacancy',
    component: VacancyScreen,
    options: {headerShow: false},
  },
  {
    name: 'Company',
    component: CompanyScreen,
    options: {headerShow: false},
  },
  {
    name: 'Favorites',
    component: FavoritesScreen,
    options: {headerShow: false},
  },
];
