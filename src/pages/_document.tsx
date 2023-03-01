import { Head, Html, Main, NextScript } from 'next/document';

import { GA_ID, HOTJAR_ID, IS_PRODUCTION } from '~/constants/common';

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />

        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          name="keywords"
          content="사이드 프로젝트, 디자이너, 프로그래머, 디프만, depromeet, side project, 동아리"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:creator" content="디프만 - Depromeet" />

        {IS_PRODUCTION && (
          <>
            {/* google analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');`,
              }}
            />

            {/* hotjar */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            ></script>
          </>
        )}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
