import {StyleSheet} from 'react-native';
import {Height, Width} from '../../../../../helpers/Normalizer';

export const emailInputStyle = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Width * 0.89,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Width,
    bottom: Height * 0.217,
  },
  backImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    top: 25,
  },
  logoSmall: {
    left: Width * 0.17,
    position: 'relative',
    bottom: 30
  },
  bottomButton: {
    top: 20,
    marginTop: 20,
  },
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: Width * 0.8,
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    marginBottom: 20,
  },
});
