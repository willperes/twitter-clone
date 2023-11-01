import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from './src/theme';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
