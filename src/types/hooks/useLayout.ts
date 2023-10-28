import { type DefaultTheme } from 'styled-components/native';

export interface LayoutHook {
  theme: DefaultTheme;
  moderateScale: (size: number) => number;
  horizontalScale: (size: number) => number;
  verticalScale: (size: number) => number;
}
