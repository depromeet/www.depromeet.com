import { css } from '@emotion/react';

import { FAQ } from '~/components/FAQ';
import { Positions } from '~/components/Positions';
import { Qualification } from '~/components/Qualification';
import { Review } from '~/components/Review';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';
import { mediaQuery } from '~/styles/media';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main css={mainCss}>
        <Qualification />
        <section>
          <SectionTitle label="14th Schedule" title={'14기 일정'} />
          <ScheduleSection {...MEMBER_SCHEDULE} />
          <ScheduleSection {...SESSION_SCHEDULES} />
        </section>
        <Positions />
        <Review />
        <FAQ />
      </main>
    </>
  );
}

const mainCss = css`
  & > section {
    margin-bottom: 200px;
  }

  ${mediaQuery('mobile')} {
    & > section {
      margin-bottom: 120px;
    }
  }
`;
