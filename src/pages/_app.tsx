import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import Footer from '~/components/common/Footer';
import NavigationBar from '~/components/common/NavigationBar';
import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { BASE_URL } from '~/constants/common';
import useRecordPageview from '~/hooks/use-record-pageview';
import { UserAgentContext } from '~/hooks/use-user-agent';
import { layoutCss } from '~/styles/css';
import GlobalStyle from '~/styles/GlobalStyle';

interface InitialProps {
  userAgent: string;
}

export default function App({ Component, pageProps, userAgent }: AppProps & InitialProps) {
  const router = useRouter();
  const currentUrl = BASE_URL + router.route;

  useRecordPageview();

  return (
    <UserAgentContext.Provider value={userAgent}>
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
    </UserAgentContext.Provider>
  );
}

const contentLayoutCss = (routerRoute: string) => css`
  ${layoutCss(routerRoute)}
  margin-top: ${NAV_HEIGHT}px;
`;

App.getInitialProps = async ({ ctx }: AppContext) => {
  const userAgent = ctx.req?.headers['user-agent'] || 'Desktop';

  return { userAgent };
};
