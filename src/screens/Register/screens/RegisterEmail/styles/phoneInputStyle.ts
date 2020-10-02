import {StyleSheet} from 'react-native';
import {Height, Width} from '../../../../../helpers/Normalizer';

export const phoneInputStyle = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSmall: {
    position: 'relative',
    bottom: Height * 0.27,
    width: 350,
    resizeMode: 'contain'
  },
  bottomButton: {
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
