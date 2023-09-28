import { css } from '@emotion/react';

import { PositionsItem } from '~/components/Positions/PositionsItem';
import { SectionTitle } from '~/components/SectionTitle';
import { POSITIONS } from '~/constant/position';
import { commonLayoutCss } from '~/styles/layout';

export function Positions() {
  return (
    <section css={layoutCss}>
      <SectionTitle label="Positions" title="모집 직군" />
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
`;
