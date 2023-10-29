import { type DefaultTheme, ThemeProvider } from 'styled-components/native';
import { lightTheme } from '../../src/theme';

export const themeProviderWrapper =
  (mockTheme?: DefaultTheme) =>
  ({ children }: { children: React.ReactNode }): JSX.Element => (
    <ThemeProvider theme={mockTheme ?? lightTheme}>{children}</ThemeProvider>
  );
