import { css } from '@emotion/react';

import { Positions } from '~/components/Positions';
import { SEO } from '~/components/SEO';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Apply" />
      <main css={mainCss}>
        <Positions />
      </main>
    </>
  );
}

const mainCss = css`
  padding: 112px 0 200px;
`;
