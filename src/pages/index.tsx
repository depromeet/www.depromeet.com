import { SEO } from '~/components/SEO';
import {
  MainBlogSection,
  MainIntroSection,
  MainProjectSection,
  MainReasonSection,
  MainRecruitSection,
  MainResultSection,
  MainScheduleSection,
  MainSupportSection,
} from '~/features/Main/sections';
import { MainSubscribeSection } from '~/features/Main/sections/MainSubscribeSection';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <MainIntroSection />
        <MainResultSection />
        <MainReasonSection />
        <MainScheduleSection />
        <MainProjectSection />
        <MainSupportSection />
        <MainRecruitSection />
        <MainBlogSection />
        <MainSubscribeSection />
        {/* NOTE: 기존 웹 구조 */}
        {/* <div>
          <Intro
            imageUrl="/images/main/intro-img.svg"
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
