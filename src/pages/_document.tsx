import { Head, Html, Main, NextScript } from 'next/document';

import { GA_ID, HOTJAR_ID, IS_PRODUCTION } from '~/constant/common';

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

        <link rel="icon" href="/favicon.ico?v=18" />
        {/* Safari iOS: 홈화면·탭 아이콘 (apple-touch-icon 없으면 옛날 아이콘 캐시 유지). ?v=18으로 캐시 갱신 */}
        <link rel="apple-touch-icon" href="/favicon.ico?v=18" />

        <meta
          name="keywords"
          content="사이드 프로젝트, 디자이너, 프로그래머, 디프만, depromeet, side project, 동아리"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image" content="/images/18th/sessions/og-main.png" />
        <meta property="og:image:width" content="1536" />
        <meta property="og:image:height" content="768" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/18th/sessions/og-main.png" />
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

      <body className="js-loading">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body { background-color: #5aafff; }
              .js-loading nav { visibility: hidden; }
              .js-loading [data-section="branding"] { visibility: hidden; }
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
