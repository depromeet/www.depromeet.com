import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { domMax, LazyMotion } from 'framer-motion';

import { Footer } from '~/components/Footer';
import { GNB } from '~/components/GNB';
import { BASE_URL } from '~/constant/common';
import { useRecordPageView } from '~/hooks/useRecordPageView';
import GlobalStyle from '~/styles/globalStyle';

interface InitialProps {
  userAgent: string;
}

export default function App({ Component, pageProps }: AppProps & InitialProps) {
  const router = useRouter();
  const currentUrl = BASE_URL + router.route;

  useRecordPageView();

  return (
    <LazyMotion features={domMax}>
      <Head>
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
      </Head>

      <GlobalStyle />
      <GNB />
      <Component {...pageProps} />
      <Footer />
    </LazyMotion>
  );
}
App.getInitialProps = async ({ ctx }: AppContext) => {
  const userAgent = ctx.req?.headers['user-agent'] || 'Desktop';

  return { userAgent };
};
