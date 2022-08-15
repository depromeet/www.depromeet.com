import type { AppProps } from 'next/app';

import { layoutCss } from '~/styles/css';
import GlobalStyle from '~/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <div css={layoutCss}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
