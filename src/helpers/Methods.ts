import {Dimensions, PixelRatio} from 'react-native';

export const widthPercentageToDP = (widthPercent: any) => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = (heightPercent: any) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const widthConverter = (value: any) => {
  const percent = (value / 375) * 100;
  return widthPercentageToDP(percent);
};

export const heightConverter = (value: any) => {
  const percent = (value / 836) * 100;
  return heightPercentageToDP(percent);
};
