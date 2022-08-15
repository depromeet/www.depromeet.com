import { css } from '@emotion/react';

const layout = {
  maxWidth: '1080px',
  padding: '0 20px',
} as const;

export const layoutCss = css`
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: ${layout.padding};
  margin: 0 auto;
`;
