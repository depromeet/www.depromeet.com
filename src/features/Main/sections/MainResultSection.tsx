import { css } from '@emotion/react';

import { Result } from '~/components/Result';
import { sectionBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';

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
  position: relative;

  padding: 32px 0 106.34px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;

  position: relative;

  ${sectionBg};

  ${mediaQuery('tablet')} {
    padding: 80px 40px;
  }

  ${mediaQuery('mobile')} {
    padding: 0px;
  }
`;

const resultWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  text-align: center;
`;
