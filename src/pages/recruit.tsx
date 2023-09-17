import { FAQ } from '~/components/FAQ';
import { Positions } from '~/components/Positions';
import { Qualification } from '~/components/Qualification';
import { Review } from '~/components/Review';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <Qualification />
        <SectionTitle label="14th Schedule" title={'14기 일정'} />
        <ScheduleSection
          label="members"
          title="멤버모집"
          titleBgColor={'blue400'}
          schedule={[
            {
              date: '10.09',
              content: '서류 접수 시작',
            },
            {
              date: '10.18',
              content: '서류 마감',
            },
            {
              date: '10.21-22',
              content: '온라인 면접',
            },
            {
              date: '10.31',
              content: '최종 합격 안내',
            },
          ]}
        />
        <ScheduleSection
          label="sessions"
          title="정기 세션"
          titleBgColor={'yellow400'}
          schedule={[
            {
              date: '11.04',
              content: 'OT',
            },
            {
              date: '11.25',
              content: '네트워킹',
            },
            {
              date: '12.09',
              content: 'UT',
            },
            {
              date: '12.23',
              content: '중간 발표',
            },
            {
              date: '01.20',
              content: '배포데이',
            },
            {
              date: '02.17',
              content: '최종 발표',
            },
          ]}
        />
        <Positions />
        <Review />
        <FAQ />
      </main>
    </>
  );
}
