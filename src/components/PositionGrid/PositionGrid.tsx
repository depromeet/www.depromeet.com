import { css } from '@emotion/react';

import { RECRUIT } from '~/constant/recruit';
import { useRecruitPhase } from '~/hooks/useRecruitPhase';
import { getPositionCta } from '~/utils/recruit';

import { PositionCard } from './PositionCard';

/**
 * 360(모바일): 2열 그리드(2·2·1) · 768 이상: 5장 가로 한 줄(가이드 `203:3276` 기준).
 * (docs/19th/migration-plan.md R1, Q-R3)
 */
export const PositionGrid = () => {
  const phase = useRecruitPhase();

  return (
    <section id="positions" css={sectionStyles}>
      <div css={gridStyles}>
        {RECRUIT.positions.map(position => (
          <PositionCard
            key={position.id}
            position={position}
            cta={phase === null ? null : getPositionCta(phase, position)}
          />
        ))}
      </div>
    </section>
  );
};

const sectionStyles = css`
  position: relative;
  /* 고정 GNB(80px) 아래로 제목이 숨지 않도록 — GNB CTA가 #positions로 스크롤한다 */
  scroll-margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

/**
 * 시안은 카드 폭을 늘리는 대신 **줄 수를 바꾼다**. 실측:
 *
 * | 폭   | 배치            | 카드      | gap | 묶음 폭 |
 * |------|-----------------|-----------|-----|---------|
 * | 1920 | 5장 한 줄       | 280 x 340 | 12  | 1448    |
 * | 1280 | 3 + 2 (가운데)  | 280 x 340 | 12  | 864     |
 * | 768  | 2열 3줄         | 338 x 280 | 12  | 688     |
 * | 360  | 2열 3줄         | 156 x 200 | 8   | 320     |
 *
 * 1280과 1920에서 카드가 똑같이 280이라 `1fr`로 늘리면 안 된다. 묶음 폭만 정해 두고
 * `flex-wrap`에 맡기면 줄 나눔이 저절로 시안과 같아진다(864 = 280x3 + 12x2이라 딱 3장,
 * 1448이면 5장). 마지막 줄 정렬은 1280에서만 가운데다 — 768·360 시안은 왼쪽 정렬이다.
 */
const gridStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) {
    gap: 12px;
    max-width: 688px;
  }

  @media (min-width: 1280px) {
    justify-content: center;
    max-width: 864px;
  }

  @media (min-width: 1920px) {
    max-width: 1448px;
  }
`;
