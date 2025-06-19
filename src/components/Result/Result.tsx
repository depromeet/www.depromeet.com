import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { ResultCardList } from './ResultCardList';

export const Result = () => {
  return (
    <div css={layoutCss}>
      <div css={title.wrapper}>
        <h1>
          디프만은 디자이너와 개발자가 서비스 기획부터
          <br /> 런칭까지 함께 경험하는 성장추구형 커뮤니티입니다
        </h1>
      </div>

      <ResultCardList />
    </div>
  );
};

const layoutCss = () => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;
  color: black;

  ${mediaQuery('tablet')} {
    padding: 12px 16px 60px;
    gap: 38px;
  }
`;

const title = {
  wrapper: css`
    h1 {
      color: ${theme.colors.primary.darknavy};
      ${theme.typosV3.pretendard.head2};
      line-height: 150%;
      text-align: center;
      height: fit-content;

      ${mediaQuery('tablet')} {
        ${theme.typosV3.pretendard.head5};
      }

      ${mediaQuery('mobile')} {
        width: 211px;
        ${theme.typosV3.pretendard.sub2Semibold};
      }
    }
  `,
};
