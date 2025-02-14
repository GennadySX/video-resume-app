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
import ChatScreen from '../screens/Chat';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import ProfileEditScreen from '../screens/Profile/screens/ProfileEdit';
import ResumeScreen from '../screens/Resume';
import ResumeEditScreen from '../screens/Resume/screens/ResumeEdit';
import ResumeTutorialScreen from '../screens/ResumeTutorial';
import ResumeCreateScreen from '../screens/Resume/screens/ResumeCreate';
import VideoScreen from '../screens/Video';
import PremiumScreen from '../screens/Premium';
import CameraScreen from '../screens/Camera';
import ErrorPageScreen from '../screens/ErrorPage';
import EditVideoScreen from '../screens/Resume/screens/EditVideo';
import VacancyListScreen from '../screens/VacancyList';
import RegisterEmailScreen from "../screens/Register/screens/RegisterEmail";

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
    name: Routes.VacancyList,
    component: VacancyListScreen,
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
  {
    name: Routes.Resume,
    component: ResumeScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.ResumeCreate,
    component: ResumeCreateScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.ResumeEdit,
    component: ResumeEditScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.ResumeTutorial,
    component: ResumeTutorialScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.VideoScreen,
    component: VideoScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.CameraScreen,
    component: CameraScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Premium,
    component: PremiumScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.Error,
    component: ErrorPageScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.EditVideoScreen,
    component: EditVideoScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
  {
    name: Routes.RegisterEmail,
    component: RegisterEmailScreen,
    options: {
      headerShow: false,
      animationEnabled: false,
    },
  },
];
