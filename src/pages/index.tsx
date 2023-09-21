import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { FAQ } from '~/components/FAQ';
import { Journey } from '~/components/Journey';
import { RecruitEntrance } from '~/components/RecruitEntrance';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';
import { TimerContainer } from '~/components/TimerContainer';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';
import { commonLayoutCss } from '~/styles/layout';
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
          <section css={[commonLayoutCss, signImageContainerCss]}>
            <Image src="/images/sign/main.png" fill alt="DPM 14th" />
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

const signImageContainerCss = css`
  position: relative;
  width: 100%;
  height: 356px;
  img {
    width: 100%;
    object-fit: contain;
  }

  ${mediaQuery('tablet')} {
    height: 262px;
  }
  ${mediaQuery('mobile')} {
    height: 122px;
  }
`;
