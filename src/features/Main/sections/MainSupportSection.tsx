import { css } from '@emotion/react';

import { Supports } from '~/components/Supports';
import { theme } from '~/styles/theme';

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
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.black};
`;
