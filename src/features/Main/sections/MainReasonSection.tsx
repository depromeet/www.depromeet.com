import { css } from '@emotion/react';

import { REASONS } from '~/constant/reason';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { ReasonCard } from '../components/ReasonCard';

/**
 * * Main 페이지 합류해야 하는 이유 section
 */
export const MainReasonSection = () => {
  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <p css={text.subCss}>생각을 현실로, 열정을 성취로. 디프만.</p>
        <h1 css={text.titleCss}>디프만에 합류하는 매력적인 이유</h1>
      </div>

      {REASONS.map((item, index) => (
        <ReasonCard {...item} isReverseDirection={index % 2 !== 0} key={item.title} />
      ))}
    </section>
  );
};

const containerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 118px;
  padding: 140px 0;

  ${mediaQuery('mobile')} {
    padding: 80px 20px;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    color: white;
  `,

  subCss: css`
    ${theme.typosV2.pretendard.semibold24};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18};
      line-height: 150%;
    }
  `,

  titleCss: css`
    ${theme.typosV2.pretendard.bold44};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28};
      line-height: 150%;
    }
  `,
};
