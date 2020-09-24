import {StyleSheet} from 'react-native';
import {styles} from '../../../../../styles/style';
import {Height, Width} from '../../../../../helpers/Normalizer';

export const resumeCreateScreenStyle = StyleSheet.create({
  block: {
    paddingTop: 25,
  },
  header: {
    paddingBottom: 10,
  },
  closeIcon: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    right: 10,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  avatarBtn: {},
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  photoFrame: {
    position: 'absolute',
    width: 120,
    height: 120,
  },
  inputBlock: {
    paddingBottom: 20,
  },
  btnContainer: {
    paddingTop: 20,
  },
  btnChoise: {
    padding: 15,
    paddingLeft: 0,
    borderTopColor: 'rgba(133,133,133,0.76)',
    borderBottomColor: 'rgba(133,133,133,0.76)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  btnChoiseText: {
    ...styles.fontMedium,
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
  videoBlockStar: {
    position: 'absolute',
    left: 7,
    top: Height * 0.01,
  },
  videoBlockStarIcon: {
    width: 20,
    height: 20,
  },
  videoBlockBasket: {
    position: 'absolute',
    left: 7,
    bottom: 25,
  },
  videoBlockBasketIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  saveButton: {
    paddingBottom: 120,
  },
  guideBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
     // backgroundColor: 'yellow'
  },
  guideBlockLeft: {
    alignSelf: 'center',
    left: 25,
  },
  guideBlockRight: {
      alignSelf: 'center',
      top: 5,
      right: 10
  },
  guideIcon: {
    width: 35,
    height: 35,
  },
  lineNotActive: {
    width: Width * 0.4,
    height: 2,
    backgroundColor: 'gray',
    alignSelf: 'center',
      left: 10,
    bottom: 10,
  },
  lineActive: {
    backgroundColor: 'rgba(116, 45, 210, 0.3)',
  },
});
