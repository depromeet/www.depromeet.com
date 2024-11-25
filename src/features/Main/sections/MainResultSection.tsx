import { css, Theme } from '@emotion/react';

import { Result } from '~/components/Result';

export const MainResultSection = () => {
  return (
    <section css={layoutCss}>
      <Result />

      <button>디프만 소개 보기</button>
    </section>
  );
};

const layoutCss = (theme: Theme) => css`
  padding: 140px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;
  background-color: ${theme.colors.white};
`;
