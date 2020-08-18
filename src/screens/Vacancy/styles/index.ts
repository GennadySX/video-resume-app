import {StyleSheet} from 'react-native';
import {Width} from '../../../helpers/Normalizer';
import {styles} from "../../../styles/style";

export const vacancyScreenStyle = StyleSheet.create({
  mainBlock: {
    paddingLeft: 7, paddingRight: 7
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
    fontSize: 12,
    fontFamily: 'Manrope-Medium',
  },
  blockTitle: {
    fontSize: 17,
    fontFamily: 'Manrope-Bold',
    paddingTop: 12,
    paddingBottom: 10,
  },
  videoBlock: {
    flexDirection: 'row',
  },
  videoBlockImg: {
    width: Width * 0.25,
    height: Width * 0.25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  //Popup
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  desc: {
    ...styles.fontMedium,
    fontSize: 13,
    color: 'rgba(39,39,39,0.4)',
    marginBottom: 20

  },
  img: {
    width: 230,
    height: 230,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  btn: {
    paddingBottom: 0
  },
  btnText: {
    ...styles.fontMedium,
    color: 'rgba(72,19,128,0.8)'
  }

});
