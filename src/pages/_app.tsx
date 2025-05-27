import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';
import { domMax, LazyMotion } from 'framer-motion';

import { FloatingActionButton } from '~/components/FAB';
import { Footer } from '~/components/Footer';
import { GNB } from '~/components/GNB';
import RecruitNotificationModal from '~/components/RecruitNotificationModal';
import { BASE_URL } from '~/constant/common';
import { useRecordPageView } from '~/hooks/useRecordPageView';
import GlobalStyle from '~/styles/globalStyle';
import { theme } from '~/styles/theme';

interface InitialProps {
  userAgent: string;
}

export default function App({ Component, pageProps }: AppProps & InitialProps) {
  const router = useRouter();
  const currentUrl = BASE_URL + router.route;

  useRecordPageView();

  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domMax}>
        <Head>
          <link rel="canonical" href={currentUrl} />
          <meta property="og:url" content={currentUrl} />
        </Head>
        <FloatingActionButton />
        <GNB />
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
        <RecruitNotificationModal />
      </LazyMotion>
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const userAgent = ctx.req?.headers['user-agent'] || 'Desktop';

  return { userAgent };
};
