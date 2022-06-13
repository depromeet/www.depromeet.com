import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';

import './index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>디프만 - Depromeet</title>
      </Head>
      <GlobalStyle />

      <Component {...pageProps} />
      <div id="modal-root" />
    </>
  );
}

export default MyApp;
