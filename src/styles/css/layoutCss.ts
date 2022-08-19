import { css } from '@emotion/react';

const layout = {
  maxWidth: '1080px',
} as const;

export const layoutCss = css`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
`;
