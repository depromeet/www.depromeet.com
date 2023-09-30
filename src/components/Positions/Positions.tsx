import { css } from '@emotion/react';

import { PositionsItem } from '~/components/Positions/PositionsItem';
import { SectionTitle } from '~/components/SectionTitle';
import { POSITIONS } from '~/constant/position';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function Positions() {
  return (
    <section css={layoutCss}>
      <SectionTitle
        label="Positions"
        title="모집 직군"
        description="지원 가능 기간 : 10월 2일 00:00 ~ 10월 8일 23:59"
      />
      <div css={listCss}>
        {POSITIONS.map(({ ...info }) => (
          <PositionsItem key={info.type} {...info} />
        ))}
      </div>
    </section>
  );
}

const layoutCss = css`
  ${commonLayoutCss}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const listCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 960px; // TODO 전체 너비 상수화

  ${mediaQuery('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  ${mediaQuery('mobile')} {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;
  }
`;
