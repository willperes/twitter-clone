import { type DefaultTheme, ThemeProvider } from 'styled-components/native';
import { lightTheme } from '../../src/theme';
import React from 'react';

interface Props {
  mockTheme?: DefaultTheme;
}

export const TestingWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  mockTheme = lightTheme,
  children,
}) => {
  return <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>;
};
