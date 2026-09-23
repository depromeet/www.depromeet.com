import { css } from '@emotion/react';

import { RECRUIT } from '~/constant/recruit';
import { useRecruitPhase } from '~/hooks/useRecruitPhase';
import { getPositionCta } from '~/utils/recruit';

import { PositionCard } from './PositionCard';

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
  scroll-margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1280px) {
    scroll-margin-top: 100px;
  }
`;

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
