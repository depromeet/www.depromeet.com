import { css } from '@emotion/react';

import { PositionGrid } from '~/components/PositionGrid/PositionGrid';

import { RecruitTitleSection } from './RecruitTitleSection';

export function RecruitIntroSection() {
  return (
    <section css={sectionCss}>
      <RecruitTitleSection />
      <PositionGrid />
    </section>
  );
}

const sectionCss = css`
  position: relative;
  background: linear-gradient(to bottom, #5aafff, #dfeeff);
  display: flex;
  flex-direction: column;
  padding: 120px 0 160px 0;

  @media (min-width: 1280px) and (max-width: 1919px) {
    padding: 120px 0 120px 0;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 60px 40px 80px 40px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    padding: 28px 20px 40px 20px;
  }
`;
