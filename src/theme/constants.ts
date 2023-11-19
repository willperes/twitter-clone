import { Dimensions } from 'react-native';
import { moderateScale } from '../utils/layout';

export const DRAWER_WIDTH = Dimensions.get('window').width * 0.77;
export const SEPARATOR_WIDTH = moderateScale(0.25);

export const FONT_SIZES = {
  headlineLarge: 32,
  headlineMedium: 28,
  headlineSmall: 24,
  titleLarge: 22,
  titleMedium: 20,
  titleSmall: 18,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
};
