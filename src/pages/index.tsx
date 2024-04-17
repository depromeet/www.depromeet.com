import { FAQ } from '~/components/FAQ';
import { Intro } from '~/components/Intro';
import { RecruitTextSection, SignImageSection } from '~/components/Main';
import { Journey } from '~/components/Main/Journey';
import { RecruitEntrance } from '~/components/Main/RecruitEntrance';
import { ProjectCarousel } from '~/components/ProjectCarousel';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <div>
          <Intro />
          <Journey />
          <RecruitEntrance />
          <ProjectCarousel />
          <section>
            <SectionTitle
              label="14th Schedule"
              title={'14기 일정'}
              description="세션은 매주 진행되며, 오프라인 세션은 오프라인에서 이뤄집니다."
            />
            <ScheduleSection {...MEMBER_SCHEDULE} />
            <ScheduleSection {...SESSION_SCHEDULES} />
          </section>
          <section>
            <FAQ />
          </section>
          <SignImageSection />
          <RecruitTextSection />
        </div>
      </main>
    </>
  );
}
