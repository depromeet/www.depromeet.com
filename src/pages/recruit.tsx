import { FAQ } from '~/components/FAQ';
import { Intro } from '~/components/Intro';
import { Positions } from '~/components/Positions';
import { Qualification } from '~/components/Qualification';
import { Review } from '~/components/Review';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <Intro
          imageUrl="/images/recruit/intro-img.svg"
          title="15기 인재상 및 모집 인트로"
          width={1024}
          height={760}
          color="pink"
        />
        <Qualification />
        <section>
          <SectionTitle
            label="14th Schedule"
            title={'14기 일정'}
            description="세션은 매주 진행되며, 오프라인 세션은 오프라인에서 이뤄집니다."
          />
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
