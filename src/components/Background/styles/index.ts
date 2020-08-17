import {StyleSheet} from 'react-native';
import {Width} from '../../../helpers/Normalizer';

export const blockBackgroundStyle = StyleSheet.create({
  block: {
    position: 'relative',
    zIndex: 99,
  },
  background: {
    position: 'absolute',
    width: Width,
    resizeMode: 'contain',
    height: '140%',
    zIndex: 1,
  },
});

export const IntroBackgroundStyle = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    bottom: 0,
  },
  backImage: {
    position: 'absolute',
  },
  tl: {
    left: 0,
    height: Width * 0.3,
    width: Width * 0.25,
  },
  tr: {
    top: '10%',
    right: '4%',
  },
  br: {
    top: '50%',
    resizeMode: 'cover',
  },
});
