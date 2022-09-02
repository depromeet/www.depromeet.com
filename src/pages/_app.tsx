import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import Footer from '~/components/common/Footer';
import NavigationBar from '~/components/common/NavigationBar';
import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { BASE_URL } from '~/constants/common';
import useRecordPageview from '~/hooks/use-record-pageview';
import { layoutCss } from '~/styles/css';
import GlobalStyle from '~/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentUrl = BASE_URL + router.route;

  useRecordPageview();

  return (
    <>
      <Head>
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
      </Head>

      <GlobalStyle />

      <NavigationBar />
      {/* <RecruitBanner /> */}
      <div css={contentLayoutCss(router.route)}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

const contentLayoutCss = (routerRoute: string) => css`
  ${layoutCss(routerRoute)}
  margin-top: ${NAV_HEIGHT}px;
`;
