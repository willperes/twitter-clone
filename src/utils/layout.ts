import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const factor = 0.25;
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

export const moderateScale = (size: number): number => {
  return size + (horizontalScale(size) - size) * factor;
};

export const horizontalScale = (size: number): number => {
  return (width / guidelineBaseWidth) * size;
};

export const verticalScale = (size: number): number => {
  return (height / guidelineBaseHeight) * size;
};
