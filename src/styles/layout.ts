import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

const layout = {
  maxWidth: '960px',
} as const;

export const commonLayoutCss = css`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px;

  ${mediaQuery('pc')} {
    width: calc(100vw - 60px);
    margin: 0 30px;
    padding: 0;
  }

  ${mediaQuery('mobile')} {
    max-width: 475px; // TODO : 논의 필요
    width: calc(100vw - 32px);
    margin: 0 auto;
    padding: 0;
  }
`;
