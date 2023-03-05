import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

const sectionCss = css`
  margin: 0 auto 180px;
  max-width: 1200px;

  ${mediaQuery('xs')} {
    padding: 0 16px;
    margin-bottom: 100px;
  }
`;

const sectionHeadingCss = css`
  text-align: center;

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    margin-bottom: 40px;
  }
`;

export { sectionCss, sectionHeadingCss };
