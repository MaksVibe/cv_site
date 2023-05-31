import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import customFonts from "../styles/fonts";
import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/theme';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <style dangerouslySetInnerHTML={{ __html: customFonts }} />
      <GlobalStyles />
      {theme.fonts.face && 
      <Component {...pageProps} />}
    </ThemeProvider>);
}

export default MyApp;
