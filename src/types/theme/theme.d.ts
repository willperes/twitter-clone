import 'styled-components/native';
import { type lightTheme } from '../../theme';

declare module 'styled-components/native' {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType {}
}
