import {StyleSheet} from 'react-native';
import {Width} from '../../../../helpers/Normalizer';


export const buttonStyle = StyleSheet.create({
  block: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    width: Width * 0.8,
  },
  btnIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 15,
  },
  btnText: {
    fontSize: 14.5,
    fontFamily: 'Manrope-Medium',
    color: '#fafafa',
  },
  shadow: {
    shadowColor: 'rgba(49,49,49,0.14)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
  },
});

export const buttonBadgeStyle = StyleSheet.create({
  dropBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Width * 0.87,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 50,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  btnIcon: {
    maxWidth: 17,
    maxHeight: 17,
    marginLeft: 5,
    marginRight: 10,
    resizeMode: 'contain',
  },
  btnTitle: {color: '#fafafa', width: '80%'},
});

export const toggleButtonStyle = StyleSheet.create({
  container: {
    width: Width * 0.87,
    backgroundColor: 'rgba(72, 19, 128, 0.02)',
    borderColor: 'rgba(72, 19, 128, 0.1)',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  label: {
    fontFamily: 'Manrope-Medium',
    color: 'rgba(0,0,0, 0.7)',
    width: '80%',
  },
});
