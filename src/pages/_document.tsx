import { Head, Html, Main, NextScript } from 'next/document';

import { BASE_URL, GA_ID, HOTJAR_ID, IS_PRODUCTION } from '~/constant/common';
import { colors } from '~/styles/colors';

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

        {/* 탭·북마크·방문기록에 뜨는 아이콘. SVG를 지원하는 브라우저는 favicon.svg를 고르고,
            나머지는 favicon.ico(16·32·48 멀티 사이즈)로 떨어진다.
            아이콘을 교체할 때는 ?v= 값을 올려야 옛 아이콘 캐시가 갱신된다. */}
        <link rel="icon" href="/favicon.ico?v=19" sizes="32x32" />
        <link rel="icon" href="/favicon.svg?v=19" type="image/svg+xml" />
        {/* Safari iOS: 홈화면·탭 아이콘. iOS가 자체 라운드 마스크를 씌우므로 정사각 PNG여야 한다. */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=19" />

        <meta
          name="keywords"
          content="사이드 프로젝트, 디자이너, 프로그래머, 디프만, depromeet, side project, 동아리"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        {/* SEO 컴포넌트와 같은 이미지를 가리킨다. 정식본이 오면 파일만 교체한다(R6). */}
        <meta property="og:image" content={`${BASE_URL}/og-main.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${BASE_URL}/og-main.jpg`} />
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
              html, body { background-color: ${colors.v19.blue900}; }
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
