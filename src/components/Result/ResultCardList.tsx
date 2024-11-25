import { css } from '@emotion/react';

import { QUANTIFIED_INFO } from '~/constant/aboutInfo';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const ResultCardList = () => {
  return (
    <div css={containerCss}>
      {QUANTIFIED_INFO.map(({ label, number, unit }, idx) => (
        <div key={idx} css={cardCss}>
          <p css={textCss.label}>{label}</p>
          <p css={textCss.wrapper}>
            <span css={textCss.number}>{number}</span>
            <span css={textCss.unit}>{unit}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

const containerCss = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 1040px;
  height: 240px;

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: auto;
    padding: 0 24px;
  }
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  background-color: ${colors.grey[100]};
  border-radius: 20px;

  ${mediaQuery('mobile')} {
    gap: 18px;
  }
`;

const textCss = {
  wrapper: css`
    display: flex;
    align-items: center;
  `,
  label: css`
    color: ${colors.grey[600]};
    ${theme.typosV2.pretendard.semibold20};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold15};
      line-height: 150%;
    }
  `,
  number: css`
    ${theme.typosV2.pretendard.bold62};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold32};
    }
  `,
  unit: css`
    ${theme.typosV2.pretendard.semibold48};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold24};
    }
  `,
};
