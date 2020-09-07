import {StyleSheet} from 'react-native';

export const tutorialScreenStyle = StyleSheet.create({
  wrapper: {},
  btnWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  nextBtn: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    marginBottom: 25,
    marginRight: 20,
  },
});
