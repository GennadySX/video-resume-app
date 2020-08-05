import {StyleSheet} from 'react-native';
import {Width, Height} from '../helpers/Normalizer';

const active = '#481380';
const unActive = '#868686';
const tabColor = '#F8F2FF';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
    height: Height,
    padding: 15,
  },
  card: {},
  active: {
    color: active,
  },
  defaultText: {
    color: unActive,
  },
});
