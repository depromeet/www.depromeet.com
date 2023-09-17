import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';
import { domMax, LazyMotion } from 'framer-motion';

import { Footer } from '~/components/Footer';
import { GNB } from '~/components/GNB';
import { Thumbnail } from '~/components/Thumbnail';
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

  const PROJECT_DUMMY_IMG = '/images/project/13-1.png';
  const SESSION_DUMMY_IMG = '/images/session/orientation.png';

  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domMax}>
        <Head>
          <link rel="canonical" href={currentUrl} />
          <meta property="og:url" content={currentUrl} />
        </Head>
        <GNB />
        <GlobalStyle />
        <Thumbnail
          img={PROJECT_DUMMY_IMG}
          title="자린고비"
          subTitle="13기"
          description="거지들의 이야기로 쌓이는<br/>소비습관 개선 서비스"
          links={[
            { type: 'Behance', href: '' },
            { type: 'Github', href: '' },
            { type: 'Web', href: '' },
          ]}
        />
        <Thumbnail
          img={SESSION_DUMMY_IMG}
          title="오리엔테이션"
          subTitle="Orientation"
          description="디프만의 첫 시작, 서로를 알아갈 수 있는<br/>오리엔테이션에 모두가 함께 해요."
        />
        <Component {...pageProps} />
        <Footer />
      </LazyMotion>
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const userAgent = ctx.req?.headers['user-agent'] || 'Desktop';

  return { userAgent };
};
