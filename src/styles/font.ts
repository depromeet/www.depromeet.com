import { css } from '@emotion/react';

export const fontFace = css`
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 700;
    src: local(''), url('/fonts/Decimal-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 600;
    src: local(''), url('/fonts/Decimal-Semibold.woff') format('woff');
  }
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 500;
    src: local(''), url('/fonts/Decimal-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/Decimal-book.woff') format('woff');
  }
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 300;
    src: local(''), url('/fonts/Decimal-light.woff') format('woff');
  }

  @font-face {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 700;
    src: local(''), url('/fonts/Bebas-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'MartianMono';
    src: url('/fonts/MartianMono-VariableFont.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Abel';
    font-style: normal;
    src: local(''), url('/fonts/Abel-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DMMono';
    font-style: normal;
    font-weight: 300;
    src: local(''), url('/fonts/DMMono-light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DMMono';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/DMMono-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DMMono';
    font-style: normal;
    font-weight: 500;
    src: local(''), url('/fonts/DMMono-Medium.ttf') format('truetype');
  }

  /* NOTE: 19th — Instrument Sans · Space Grotesk · Space Mono.
     Google Fonts의 latin subset woff2를 self-host한다(합계 약 110KB).
     한글은 Pretendard가 맡으므로 latin-ext는 받지 않았다. */
  @font-face {
    font-family: 'Instrument Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/InstrumentSans-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Instrument Sans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/InstrumentSans-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Instrument Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/InstrumentSans-SemiBold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Instrument Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/InstrumentSans-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/SpaceGrotesk-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/SpaceGrotesk-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Space Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/SpaceMono-Italic.woff2') format('woff2');
  }
`;
