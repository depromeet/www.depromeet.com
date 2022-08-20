import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

import { Card } from './Card';
import { POSITION_TYPE, PositionType } from '../constants';

export default function OtherPostionSection({ positionType }: { positionType: PositionType }) {
  const getOtherPositionKeys = (): string[] => {
    return Object.keys(POSITION_TYPE).filter(type => type !== positionType);
  };

  return (
    <section css={sectionCss}>
      <h2 css={headingCss}>다른 직군 보기</h2>
      <div css={cardListContainerCss}>
        {getOtherPositionKeys().map((type: string) => (
          <div css={cardWrapperCss} key={type}>
            <Card positionType={type as PositionType} size={'sm'} />
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 120px;
`;

const headingCss = css`
  font-weight: 600;
  font-size: 2.625rem;
  line-height: 140%;

  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    font-size: 1.714rem;

    margin-bottom: 30px;
  }
`;

const cardListContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  ${mediaQuery('xs')} {
    gap: 12px;
  }
`;

const cardWrapperCss = css`
  width: 500px;

  ${mediaQuery('xs')} {
    width: 100%;
  }
`;
