import { css, Global } from '@emotion/react';

import { fontFace } from '~/styles/font';

import { resetCss } from './resetCss';

export default function GlobalStyle() {
  return <Global styles={globalCss} />;
}

const globalCss = css`
  ${resetCss}
  ${fontFace}

  html,
  body {
    background-color: #5aafff;
    max-width: 100vw;
    overflow-x: hidden;
  }

  :root {
    max-width: 100vw;
    overflow-x: hidden;

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    font-size: 16px;

    * {
      font-family: inherit;
      color: inherit;

      margin: 0;
      padding: 0;
      box-sizing: border-box;
      word-break: keep-all;
      word-wrap: break-word;
      -webkit-tap-highlight-color: transparent !important;
    }
  }
`;
