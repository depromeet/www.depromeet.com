import type { AppProps } from 'next/app';
import { css } from '@emotion/react';

import Footer from '~/components/common/Footer';
import NavigationBar from '~/components/common/NavigationBar';
import useRecordPageview from '~/hooks/use-record-pageview';
import { layoutCss } from '~/styles/css';
import GlobalStyle from '~/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  useRecordPageview();

  return (
    <>
      <GlobalStyle />

      <NavigationBar />
      <div css={contentLayoutCss}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

const contentLayoutCss = css`
  ${layoutCss}
  padding-top: 60px; // NOTE: NavigationBar 높이
`;
