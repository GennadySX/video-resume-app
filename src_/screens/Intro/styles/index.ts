import {StyleSheet} from 'react-native';
import {Height} from '../../../helpers/Normalizer';

export const introScreenStyle = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
    bottom: '0%',
    marginBottom: 40,
    width: Height * 0.2,
    height: Height * 0.2,
  },
  introText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 28,
  },
  bottomButton: {
    marginTop: 30,
  },
  blockBottom: {
    position: 'relative',
    top: Height * 0.14,
  },
});
