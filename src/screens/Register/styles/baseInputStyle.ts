import {StyleSheet} from 'react-native';
import {Width} from '../../../helpers/Normalizer';

export const baseInputStyle = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  logoSmall: {
    position: 'absolute',
    top: '-2%',
    marginBottom: 40,
    width: Width * 0.27,
    height: Width * 0.27,
    resizeMode: 'contain',
  },
  bottomButton: {
    marginTop: 20,
  },
  textDescription: {
    position: 'relative',
    left: 0,
    width: Width * 0.8,
    marginBottom: 30,
    color: '#272727',
    opacity: 0.8,
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
