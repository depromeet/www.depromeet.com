import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>디프만 - Depromeet</title>
      </Head>

      <Global
        styles={css`
          ${emotionReset}

          @font-face {
            font-family: 'Gmarket Sans';
            font-weight: 400;
            src: url('/fonts/GmarketSansTTFBold.ttf') format('truetype');
          }

          @font-face {
            font-family: 'Noto Sans';
            font-weight: 400;
            src: url('/fonts/NotoSansKR-Medium.otf') format('truetype');
          }

          :focus {
            outline: none;
            border: none;
          }

          html {
            font-family: 'Spoqa Han Sans Neo', 'sans-serif';
            font-size: 10px;
            background-color: #000;
            overflow-x: hidden;
          }
        `}
      />

      <Component {...pageProps} />

      <div id="modal-root" css={{ position: 'fixed', zIndex: 1300 }} />
    </>
  );
}
