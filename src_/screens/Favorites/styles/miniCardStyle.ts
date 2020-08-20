import {StyleSheet} from 'react-native';

export const miniCardStyle = StyleSheet.create({
  block: {
    marginTop: 15,
    padding: 2,
  },
  blockChild: {
    flexDirection: 'column',
    paddingBottom: 7,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#fafafa',
    padding: 17,
    paddingTop: 10,
  },
  font: {
    fontFamily: 'Manrope-Medium',
  },

  body: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyPart: {},
  bodyCardTitle: {
    fontSize: 15,
  },
  badge: {
    padding: 5,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50,
  },
  badgeTitle: {
    fontSize: 10,
    color: '#fafafa',
  },
  vacancyText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    color: 'rgba(39,39,39,0.5)',
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
    fontSize: 11,
    color: 'rgba(39,39,39,0.5)',
  },
  footer: {
    width: '100%',
    paddingTop: 7,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footerText: {
    alignSelf: 'flex-end',
    color: '#481380',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
