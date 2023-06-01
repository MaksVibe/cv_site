import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import customFonts from "../styles/fonts";
import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/theme';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [fontsReady, setFontsReady] = useState<boolean>(false);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    if (fontsReady) return;
    document.fonts.ready.then((res) =>
      res.status == "loaded" ? setFontsReady(true) : setFontsReady(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return getLayout(
    <ThemeProvider theme={theme}>
      <style dangerouslySetInnerHTML={{ __html: customFonts }} />
      <GlobalStyles />
      {fontsReady && 
      <Component {...pageProps} />}
    </ThemeProvider>);
}

export default MyApp;
