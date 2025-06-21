import dynamic from 'next/dynamic';

import { SEO } from '~/components/SEO';
import {
  MainBlogSection,
  MainBrandingSection,
  MainIntroSection,
  MainReasonSection,
  MainRecruitSection,
  MainResultSection,
  MainScheduleSection,
  MainSessionSection,
  MainSubscribeSection,
  MainSupportSection,
} from '~/features/Main/sections';

const DynamicMainProjectSection = dynamic(
  () => import('~/features/Main/sections').then(({ MainProjectSection }) => MainProjectSection),
  {
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      <SEO title="디프만 - About" />
      <main>
        <MainIntroSection />
        <MainBrandingSection />
        <MainResultSection />
        <MainReasonSection />
        <MainSessionSection />
        <MainScheduleSection />
        <DynamicMainProjectSection />
        <MainSupportSection />
        <MainRecruitSection />
        <MainBlogSection />
        <MainSubscribeSection />

        {/* NOTE : 16기 구성 */}
        {/* <IntroSection
          defaultImgUrl="/images/16th/about/about.svg"
          mobileImgUrl="/images/16th/about/about_m.svg"
        />
        <AboutResultSection />
        <AboutActivitiesSection />
        <AboutSupportsSection />
        <AboutContactSection /> */}
      </main>
    </>
  );
}
