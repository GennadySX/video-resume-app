import {StyleSheet} from 'react-native';
import {Width} from '../../../helpers/Normalizer';

export const companyScreenStyle = StyleSheet.create({
  mainBlock: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  block: {
    padding: 15,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
  },
  headerImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  companyText: {
    fontSize: 17,
  },
  salaryText: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 17,
  },
  experienceText: {
    fontSize: 14,
  },
  bodyGeo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    height: 25,
  },
  geoIcon: {
    position: 'relative',
    right: 3,
    resizeMode: 'contain',
    width: 20,
  },
  geoText: {
    fontSize: 14,
  },
  font: {
    fontFamily: 'Manrope-Medium',
  },
  descText: {
    fontSize: 13,
    fontFamily: 'Manrope-Medium',
  },
  blockTitle: {
    fontSize: 19,
    fontFamily: 'Manrope-Bold',
    paddingTop: 12,
    paddingBottom: 10,
  },
  videoBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  videoBlockImg: {
    width: Width * 0.25,
    height: Width * 0.25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  hired: {
    marginTop: 55,
    marginBottom: 20,
  },
});
