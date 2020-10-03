import {StyleSheet} from 'react-native';
import {Height, Width} from '../../../../../helpers/Normalizer';

export const sentPass = StyleSheet.create({
  block: {
    flex: 1,
    height: Height,
    justifyContent: 'center',
    alignItems: 'center',
    width: Width * 0.89,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Width,
    bottom: Height * 0.04,
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

  //
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 0},
  cell: {
    width: 40,
    height: 35,
    lineHeight: 38,
    fontSize: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#272727',
    textAlign: 'center',
    marginRight: 10,
  },
  focusCell: {
    borderColor: '#000',
  },
});
