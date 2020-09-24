import {StyleSheet} from 'react-native';
import {styles} from '../../../styles/style';
import {Width} from '../../../helpers/Normalizer';

export const resumeScreenStyle = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    padding: 20,
    paddingBottom: 0,
  },
  headerBlock: {
    flexDirection: 'row',
  },
  headerImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    bottom: 2,
  },
  avatarBlock: {
    paddingTop: 20,
    marginBottom: 20,
  },
  avatar: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 70,
  },
  aboutText: {
    ...styles.fontMedium,
    fontSize: 15,
    paddingBottom: 7,
  },
  videoBlockImg: {
    width: Width * 0.25,
    height: Width * 0.25,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
