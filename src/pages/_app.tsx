import type { AppProps } from 'next/app';

import Footer from '~/components/common/Footer';
import NavigationBar from '~/components/common/NavigationBar';
import { layoutCss } from '~/styles/css';
import GlobalStyle from '~/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <NavigationBar />
      <div css={layoutCss}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
