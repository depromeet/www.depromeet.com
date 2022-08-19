import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

export default function HeaderSection() {
  return <header css={headerCss}>아마도 그래픽</header>;
}

const headerCss = css`
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);
  height: 400px;
  background-color: gray;

  ${mediaQuery('xs')} {
    height: 200px;
  }
`;
