import React from 'react';
import { lightTheme } from '../../src/theme';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { type DefaultTheme, ThemeProvider } from 'styled-components/native';

export interface TestingProvidersProps {
  mockTheme?: DefaultTheme;
}

export const TestingProviders: React.FC<React.PropsWithChildren<TestingProvidersProps>> = ({
  children,
  mockTheme = lightTheme,
}) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
    </Provider>
  );
};
