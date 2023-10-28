import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
