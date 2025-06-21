import { css } from '@emotion/react';

import { PositionGrid } from '~/components/PositionGrid/PositionGrid';
import { mediaQuery } from '~/styles/media';

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
  width: 100%;
  background-image: url('/images/project/17기/17th-project-background.png');
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;

  ${mediaQuery('tablet')} {
    background-size: 1200px auto;
  }
  ${mediaQuery('mobile')} {
    background-size: 700px auto;
  }
`;
