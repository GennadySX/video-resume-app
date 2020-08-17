import {StyleSheet} from 'react-native';

export const searchResultScreenStyle = StyleSheet.create({
  typeBlock: {
    marginTop: 15,
    backgroundColor: '#742DD2',
    padding: 15,
    borderRadius: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },
  typeBlockTitle: {
    color: '#fafafa',
    fontSize: 17,
    paddingBottom: 10,
    paddingEnd: 10,
  },
  typeBlockListCount: {
    color: '#fafafa',
    fontFamily: 'Manrope-Regular',
  },
  mainBlock: {paddingLeft: 7, paddingRight: 7},
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
  font: {
    fontFamily: 'Manrope-Medium',
  },
  descText: {
    paddingTop: 7,
    color: 'gray',
    fontFamily: 'Manrope-Medium',
  },
  blockTitle: {
    fontSize: 17,
    fontFamily: 'Manrope-Bold',
    paddingTop: 12,
    paddingBottom: 10,
  },
});
