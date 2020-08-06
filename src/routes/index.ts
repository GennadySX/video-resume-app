import AuthScreen from '../screens/Auth';
import IntroScreen from '../screens/Intro';
import RegisterScreen from '../screens/Register';

export const Routes = [
  {
    name: 'Intro',
    component: IntroScreen,
  },
  {
    name: 'Auth',
    component: AuthScreen,
  },
  {
    name: 'Register',
    component: RegisterScreen,
  },
];
