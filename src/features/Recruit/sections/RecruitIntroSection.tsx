import { css } from '@emotion/react';

import { PositionGrid } from '~/components/PositionGrid/PositionGrid';
import { sectionGridBg } from '~/styles/background';

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

  ${sectionGridBg}
`;
