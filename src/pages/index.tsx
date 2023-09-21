import { css, Theme } from '@emotion/react';

import { FAQ } from '~/components/FAQ';
import { Journey } from '~/components/Journey';
import { RecruitEntrance } from '~/components/RecruitEntrance';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';
import { TimerContainer } from '~/components/TimerContainer';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';
import { mediaQuery } from '~/styles/media';

export default function Root() {
  return (
    <>
      <SEO />
      <main css={layoutCss}>
        <TimerContainer />
        <div css={contentCss}>
          <Journey />
          <RecruitEntrance />
          <section>
            <SectionTitle label="14th Schedule" title={'14기 일정'} />
            <ScheduleSection {...MEMBER_SCHEDULE} />
            <ScheduleSection {...SESSION_SCHEDULES} />
          </section>
          <section>
            <FAQ />
          </section>
        </div>
      </main>
    </>
  );
}

const layoutCss = (theme: Theme) => css`
  background-color: ${theme.colors.black800};
`;

const contentCss = css`
  & > section {
    margin-bottom: 200px;
  }

  ${mediaQuery('mobile')} {
    & > section {
      margin-bottom: 120px;
    }
  }
`;
