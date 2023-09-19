import {Dimensions} from 'react-native';

export const NAVBAR_HEIGHT = 56;
export const CURR_VERSION_ANDROID = '1.0';
export const CURR_VERSION_IOS = '1.0';

export const SESSION_KEY = '@sid';
export const NINJA_SESSION_KEY = '@ninja_sid';
export const USER_INFO_KEY = '@user_info';

export const APP_STORE_KEY = '@app_storage';

export const APP_LAST_CACHED_AT = '@last_cached_at';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

export const FCM_TOKEN = 'fcm_token';

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const lightColors = {
  background: '#fff',
  screenBackground: '#F9F9F9',
  screenNewBackground: '#EEF2F6',
  secondaryBackground: 'rgba(75,85,99,1)',
  primaryBackground: 'rgba(229,231,235,1)',
  primary: '#095DCF',
  lightPrimary: '#ddecff',
  accent: '#0751B6',
  lightestGrey: '#F7F8FA',
  lighterGrey: '#F4F5F8',
  lightGrey: '#D1D1D1',
  darkGrey: '#9FA4AA',
  darkestGrey: '#737679',
  titleGrey: '#737679',
  underline: 'transparent',
  text: '#000000',
  placeholder: '#9FA4AA',
  error: 'red',
  lightBlack: '#5e5e5e',
  green: '#03f153',
  successPay: 'rgb(21,128,61)',
  tooLightPrimary: 'rgba(122,170,232,0.5)',
  smallLightPrimary: 'rgb(66,135,245)',
  lightErrorBackground: 'rgba(254,226,226,1)',
  lightPrimaryBackground: 'rgba(219,234,254,1)',
  blue: '#62BAF3',
  lightPurple: '#838CF1',
  darkGreen: '#4DA154',
  lightGreen: '#4ade80',
  lightRed: '#f87171',
  yellow: '#facc15',
  lightBlue: '#22d3ee',
  lighterRed: '#ffcccb',
  orange: '#FFA500',
  primaryTransparentBackground: 'rgba(9,93,207,0.7)',
  primaryTransparentBackgroundSecondary: 'rgba(9,93,207,0.87)',
};

export const darkColors = {
  background: '#fff',
  screenBackground: '#F9F9F9',
  screenNewBackground: '#EEF2F6',
  secondaryBackground: 'rgba(75,85,99,1)',
  primaryBackground: 'rgba(229 231 235,1)',
  primary: '#095DCF',
  lightPrimary: '#ddecff',
  accent: '#0751B6',
  lightestGrey: '#F7F8FA',
  lighterGrey: '#F4F5F8',
  lightGrey: '#D1D1D1',
  darkGrey: '#9FA4AA',
  darkestGrey: '#737679',
  titleGrey: '#737679',
  underline: 'transparent',
  text: '#000000',
  placeholder: '#9FA4AA',
  error: 'red',
  lightBlack: '#5e5e5e',
  successPay: 'rgb(21,128,61)',
  tooLightPrimary: 'rgba(122,170,232,0.5)',
  green: '#03f153',
  smallLightPrimary: 'rgb(66,135,245)',
  lightErrorBackground: 'rgba(254,226,226,1)',
  lightPrimaryBackground: 'rgba(219,234,254,1)',
  blue: '#62BAF3',
  lightPurple: '#838CF1',
  darkGreen: '#4DA154',
  lightGreen: '#4ade80',
  lightRed: '#f87171',
  yellow: '#facc15',
  lightBlue: '#22d3ee',
  lighterRed: '#ffcccb',
  orange: '#FFA500',
  primaryTransparentBackground: 'rgba(9,93,207,0.7)',
  primaryTransparentBackgroundSecondary: 'rgba(9,93,207,0.87)',
};
