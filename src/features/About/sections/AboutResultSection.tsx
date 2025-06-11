import { css } from '@emotion/react';

import { Result } from '~/components/Result';
import { sectionBg } from '~/styles/background';

export const AboutResultSection = () => {
  return (
    <section css={layoutCss}>
      <Result />
    </section>
  );
};

const layoutCss = () => css`
  padding: 120px 0 134px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  ${sectionBg};
`;
