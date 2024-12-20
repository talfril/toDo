import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { AppProps } from 'next/app'; 
import '../index.scss';
import '../fonts.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
