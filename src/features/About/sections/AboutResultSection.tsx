import { css, Theme } from '@emotion/react';

import { Result } from '~/components/Result';

export const AboutResultSection = () => {
  return (
    <section css={layoutCss}>
      <Result />
    </section>
  );
};

const layoutCss = (theme: Theme) => css`
  padding: 120px 0 134px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  background-color: ${theme.colors.white};
`;
