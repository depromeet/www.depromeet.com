import { SEO } from '~/components/SEO';
import {
  AboutActivitiesSection,
  AboutContactSection,
  AboutResultSection,
  AboutSupportsSection,
} from '~/features/About/sections';
import { AboutIntroSection } from '~/features/About/sections/AboutIntroSection';

export default function About() {
  return (
    <>
      <SEO title="디프만 - About" />
      <main>
        <AboutIntroSection />
        <AboutResultSection />
        <AboutActivitiesSection />
        <AboutSupportsSection />
        <AboutContactSection />
      </main>
    </>
  );
}
