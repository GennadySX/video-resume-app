import {StyleSheet} from 'react-native';
import {styles} from '../../../../styles/style';

export const resumeCardStyle = StyleSheet.create({
  block: {
    padding: 12,
    marginRight: 15,
    borderRadius: 7,
    maxHeight: 65,
  },
  title: {
    ...styles.fontMedium,
    ...styles.fontWhite,
    fontSize: 15,
    marginRight: 10,
    marginBottom: 7,
  },
  showText: {
    ...styles.fontMedium,
    ...styles.fontWhite,
    fontSize: 12,
  },
});
