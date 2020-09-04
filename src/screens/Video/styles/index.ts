import {StyleSheet} from 'react-native';
import {Width} from '../../../helpers/Normalizer';
import {styles} from '../../../styles/style';

export const videoScreenStyle = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: '#000000',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
  },
  header: {
    position: 'absolute',
    padding: 20,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Width,
  },
  headerBack: {},
  headerBackIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    zIndex: 99,
    ...styles.fontMedium,
    color: '#fafafa',
    alignSelf: 'center',
  },
  controlsBlock: {
    position: 'absolute',
    zIndex: 10,
    width: Width,
    padding: 50,
    bottom: 40,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  play: {
    // backgroundColor: 'yellow'
  },
  playIcon: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 40,
  },
  arrowDown: {
    position: 'absolute',
    zIndex: 10,
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  arrowDownText: {
    ...styles.fontMedium,
    color: '#fafafa',
    paddingBottom: 10,
  },
  arrowDownIcon: {
    alignSelf: 'center',
  },
  videoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 70,
    justifyContent: 'space-between',
  },
  videoItem: {
    marginBottom: 15
  },
  videoCardIcon: {
    width: Width * 0.299,
    height: 100,
    resizeMode: 'contain',
  },
});
