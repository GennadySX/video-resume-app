import AuthScreen from '../screens/Auth';
import IntroScreen from '../screens/Intro';
import RegisterScreen from '../screens/Register';
import TutorialScreen from "../screens/Tutorial";
import SearchPageScreen from "../screens/SearchPage";

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
];
