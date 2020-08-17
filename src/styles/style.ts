import {StyleSheet} from 'react-native';
import {Width, Height} from '../helpers/Normalizer';

const active = '#481380';
const unActive = '#868686';
const tabColor = '#F8F2FF';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
    height: Height,
    padding: 15,
  },
  card: {},
  active: {
    color: active,
  },
  defaultText: {
    color: unActive,
  },
  introScreen: {},
  textActive: {color: '#33be86'},
  fontMedium: {
    fontFamily: 'Manrope-Medium',
  },
  fontThin: {
    fontFamily: 'Manrope-Thin',
  },
  fontBold: {
    fontFamily: 'Manrope-Bold',
  },
  fontWhite: {
    color: '#fafafa'
  },
});
