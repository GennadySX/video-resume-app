import {Dimensions} from 'react-native';

const Window = Dimensions.get('window');
const Width = Window.width;
const Height = Window.height;

const phoneMask = (phone: string) => {};

export {Window, Width, Height, phoneMask};
