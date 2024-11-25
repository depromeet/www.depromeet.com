import { SEO } from '~/components/SEO';
import {
  AboutActivitiesSection,
  AboutContactSection,
  AboutResultSection,
  AboutSupportsSection,
} from '~/features/About/sections';
import { IntroSection } from '~/features/Common/sections/IntroSection';

export default function About() {
  return (
    <>
      <SEO title="디프만 - About" />
      <main>
        <IntroSection
          defaultImgUrl="/images/16th/about/about.png"
          mobileImgUrl="/images/16th/about/about_m.png"
        />
        <AboutResultSection />
        <AboutActivitiesSection />
        <AboutSupportsSection />
        <AboutContactSection />
      </main>
    </>
  );
}
