import { css } from '@emotion/react';

const layout = {
  maxWidth: '960px',
} as const;

export const commonLayoutCss = css`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
`;
