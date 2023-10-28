import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import { type LayoutHook } from '../types/hooks/useLayout';

const { width, height } = Dimensions.get('window');

const factor = 0.25;
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

export const useLayout = (): LayoutHook => {
  const theme = useTheme();

  const moderateScale = (size: number): number => {
    return size + (horizontalScale(size) - size) * factor;
  };

  const horizontalScale = (size: number): number => {
    return (width / guidelineBaseWidth) * size;
  };

  const verticalScale = (size: number): number => {
    return (height / guidelineBaseHeight) * size;
  };

  return {
    theme,
    moderateScale,
    horizontalScale,
    verticalScale,
  };
};
