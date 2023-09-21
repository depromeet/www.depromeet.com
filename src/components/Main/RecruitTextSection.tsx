import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function RecruitTextSection() {
  return (
    <section css={[commonLayoutCss, layoutCss]}>
      <h1>
        서비스 런칭부터 운영까지 <br />
        열정적인 여정에 지금 합류하세요
      </h1>
      <Button>14기 지원하기</Button>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1 {
    text-align: center;
    color: ${theme.colors.white};
    ${theme.typos.decimal.title2};
  }

  ${mediaQuery('mobile')} {
    h1 {
      font-size: 20px;
    }
  }
`;
