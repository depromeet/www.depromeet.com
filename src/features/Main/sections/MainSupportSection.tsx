import { css } from '@emotion/react';

import { Supports } from '~/components/Supports';
import { sectionBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';

/**
 * * Main 페이지 후원사 section
 */
export const MainSupportSection = () => {
  return (
    <section css={layoutCss}>
      <Supports />
    </section>
  );
};

const layoutCss = css`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${sectionBg};

  ${mediaQuery('mobile')} {
    padding: 60px 0;
  }
`;
