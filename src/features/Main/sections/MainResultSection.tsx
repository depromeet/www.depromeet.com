import { css } from '@emotion/react';

import { Result } from '~/components/Result';
import { sectionBg } from '~/styles/background';

export const MainResultSection = () => {
  return (
    <section css={layoutCss}>
      <div css={resultWrapper}>
        <Result />
      </div>
    </section>
  );
};

const layoutCss = css`
  padding: 140px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;

  ${sectionBg};
`;

const resultWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  text-align: center;
`;
