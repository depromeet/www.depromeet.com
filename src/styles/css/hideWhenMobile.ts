import { css } from '@emotion/react';

import { mediaQuery } from '../constants';

const hideWhenMobile = css`
  ${mediaQuery('xs')} {
    display: none;
    appearance: none;
  }
`;

export default hideWhenMobile;
