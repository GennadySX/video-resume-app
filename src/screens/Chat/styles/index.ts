import {StyleSheet} from 'react-native';
import {Height} from '../../../helpers/Normalizer';

export const feedbackScreenStyle = StyleSheet.create({
  block: {
    padding: 15,
    paddingTop: 25,
    height: Height - 90,
    paddingBottom: 0,
  },
  bFilterBlock: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
