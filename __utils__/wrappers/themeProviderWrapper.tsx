import { type DefaultTheme, ThemeProvider } from 'styled-components/native';

export const themeProviderWrapper =
  (mockTheme: DefaultTheme) =>
  ({ children }: { children: React.ReactNode }): JSX.Element => (
    <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
  );
