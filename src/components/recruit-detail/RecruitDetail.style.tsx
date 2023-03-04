import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

const sectionCss = css`
  margin: 0 auto;
  max-width: 1200px;

  ${mediaQuery('xs')} {
    padding: 0 16px;
  }
`;

export { sectionCss };
