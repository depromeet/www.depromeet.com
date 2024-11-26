import dynamic from 'next/dynamic';

import { SEO } from '~/components/SEO';
import {
  MainBlogSection,
  MainIntroSection,
  MainReasonSection,
  MainRecruitSection,
  MainResultSection,
  MainScheduleSection,
  MainSubscribeSection,
  MainSupportSection,
} from '~/features/Main/sections';

const DynamicMainProjectSection = dynamic(
  () => import('~/features/Main/sections').then(({ MainProjectSection }) => MainProjectSection),
  {
    ssr: false,
  }
);

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <MainIntroSection />
        <MainResultSection />
        <MainReasonSection />
        <MainScheduleSection />
        <DynamicMainProjectSection />
        <MainSupportSection />
        <MainRecruitSection />
        <MainBlogSection />
        <MainSubscribeSection />
        {/* NOTE: 기존 웹 구조 */}
        {/* <div>
          <Intro
            imageUrl="/images/main/recruit-img.svg"
            title="15기 모집 인트로"
            width={1024}
            height={780}
            color={'blue'}
          />
          <JourneyEntrance hasLinkButton />
          <RecruitEntrance />
          <ProjectCarousel />
          <Ending />
          <Subscribe />
        </div> */}
      </main>
    </>
  );
}
