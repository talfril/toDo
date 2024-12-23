import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AppProps } from 'next/app'; 
import '../index.scss';
import '../fonts.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>    </ThemeProvider>
  );
}

export default App;
