import {Dimensions, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').width;
console.log('window ', winHeight);
export const device = Platform.OS;
console.log('device', device);
export const keyboardShowType =
  device === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
export const keyboardHideType =
  device === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
export const COLORS = {
  white: '#FFFFFF',
  lightGreen: '#18CA75',
  black: '#242424',
  gray: '#3D3D3D',
  GRADIENT_1: 'transparent',
  GRADIENT_2: '#000000',
  red: '#CA184E',
  lightgray: '#1A1A1A',
  backgroundColor: '#E5E5E5',
  darkBlack: '#000000',
  appColor: '#97144d',
  lightGreen: '#00FFD4',
  lightPurple: '#C085F3',
  lightBlue: '#ABE6FC',
  lightBlue2: '#5CCAF3',
  lightGold1: '#F7C85C',
  lightGold2: '#F5D792',
  lightSilver1: '#F1EEE9',
  lightSilver2: '#D9D7D5',
  lightBronze1: '#EC5E50',
  lightBronze2: '#F7776A',
};
export const FONT_FAMILY = {
  Roboto_Bold: 'Roboto-Bold',
  Roboto_Light: 'Roboto-Light',
  Roboto_Medium: 'Roboto-Medium',
  Roboto_Thin: 'Roboto-Thin',
};

export const FONTS = {
  h1: hp(1),
  h1_1: hp(1.1),
  h1_2: hp(1.2),
  h1_3: hp(1.3),
  h1_4: hp(1.4),
  h1_5: hp(1.5),
  h1_6: hp(1.6),
  h1_7: hp(1.7),
  h1_8: hp(1.8),
  h1_9: hp(1.9),
  h2: hp(2),
  h2_1: hp(2.1),
  h2_3: hp(2.3),
  h2_5: hp(2.5),
  h2_6: hp(2.6),
  h2_7: hp(2.7),
  h2_8: hp(2.8),
  h3: hp(3),
  h3_1: hp(3.1),
  h3_2: hp(3.2),
  h3_3: hp(3.3),
  h3_4: hp(3.4),
  h3_5: hp(3.5),
  h3_6: hp(3.6),
  h3_7: hp(3.7),
  h4: hp(4),
  h4_5: hp(4.5),
  h5: hp(5),
  h5_5: hp(5.5),
  h10: hp(10),
};

export const ICONSIZE = {
  h1: hp(1),
  h2: hp(2),
  h2_5: hp(5),
  h3: hp(3),
  h4: hp(4),
  h5: hp(5),
};
