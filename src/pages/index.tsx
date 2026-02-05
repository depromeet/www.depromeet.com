import { SEO } from '~/components/SEO';
import {
  BrandingSection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  ProjectsSection,
  SessionsSection,
  SponsorsSection,
  StatsSection,
} from '~/features/Main/sections/v18';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <HeroSection />
        <BrandingSection />
        <StatsSection />
        <FeaturesSection />
        <SessionsSection />
        <ProjectsSection />
        <FAQSection />
        <SponsorsSection />
      </main>
    </>
  );
}

/* NOTE: 17기 기존 코드 백업
import dynamic from 'next/dynamic';
import {
  MainBlogSection,
  MainBrandingSection,
  MainIntroSection,
  MainReasonSection,
  MainRecruitSection,
  MainResultSection,
  MainSessionSection,
  MainSupportSection,
} from '~/features/Main/sections';

const DynamicMainProjectSection = dynamic(
  () => import('~/features/Main/sections').then(({ MainProjectSection }) => MainProjectSection),
  { ssr: false }
);

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <MainIntroSection />
        <MainBrandingSection />
        <MainResultSection />
        <MainReasonSection />
        <MainSessionSection />
        <DynamicMainProjectSection />
        <MainBlogSection />
        <MainSupportSection />
        <MainRecruitSection />
      </main>
    </>
  );
}
*/
