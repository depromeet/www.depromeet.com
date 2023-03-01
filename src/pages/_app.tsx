import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider } from 'jotai';

import CustomCursor from '~/components/common/CustomCursor';
import { BASE_URL } from '~/constants/common';
import useRecordPageview from '~/hooks/use-record-pageview';
import { UserAgentContext } from '~/hooks/use-user-agent';
import GlobalStyle from '~/styles/GlobalStyle';

interface InitialProps {
  userAgent: string;
}

export default function App({ Component, pageProps, userAgent }: AppProps & InitialProps) {
  const router = useRouter();
  const currentUrl = BASE_URL + router.route;

  useRecordPageview();

  return (
    <Provider>
      <UserAgentContext.Provider value={userAgent}>
        <Head>
          <link rel="canonical" href={currentUrl} />
          <meta property="og:url" content={currentUrl} />
        </Head>

        <GlobalStyle />
        <CustomCursor />

        <Component {...pageProps} />
      </UserAgentContext.Provider>
    </Provider>
  );
}
App.getInitialProps = async ({ ctx }: AppContext) => {
  const userAgent = ctx.req?.headers['user-agent'] || 'Desktop';

  return { userAgent };
};
