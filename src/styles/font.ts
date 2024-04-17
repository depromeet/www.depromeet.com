import { css } from '@emotion/react';

export const fontFace = css`
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 700;
    src: local(''), url('/fonts/Decimal-Semibold.woff') format('woff');
  }
  @font-face {
    font-family: 'Decimal';
    font-style: normal;
    font-weight: 600;
    src: local(''), url('/fonts/Decimal-SemiBold.woff') format('woff');
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
    font-family: 'NotoSansVariable';
    font-style: normal;
    src: local(''), url('/fonts/NotoSansKR-VariableFont_wght.ttf') format('truetype');
  }
`;
