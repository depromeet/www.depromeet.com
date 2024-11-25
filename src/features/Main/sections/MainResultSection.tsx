import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { Icon } from '~/components/Icon/Icon';
import { Result } from '~/components/Result';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const MainResultSection = () => {
  return (
    <section css={layoutCss}>
      <div css={resultWrapper}>
        <h1 css={titleCss}>생각을 현실로, 열정을 성취로</h1>
        <Result />
      </div>

      <Link href={'/about'} css={button.containerCss}>
        <div css={button.wrapperCss}>
          디프만 소개 보기
          <Icon icon={'ic_arrow_white'} size={24} />
        </div>
      </Link>
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

const resultWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  text-align: center;
`;

const titleCss = css`
  ${theme.typosV2.pretendard.bold44};
  line-height: 150%;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold28};
    line-height: 150%;
  }
`;

const button = {
  containerCss: css`
    padding: 12px 36px;
    border-radius: 100px;
    background-color: black;
  `,

  wrapperCss: css`
    display: flex;
    gap: 8px;
    align-items: center;
    color: white;
    ${theme.typosV2.pretendard.semibold20};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold16};
      line-height: 150%;
    }
  `,

  iconCss: css`
    width: 24px;
    height: 24px;
    background-color: black;
    border-radius: 400px;
  `,
};
