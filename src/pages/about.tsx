import { AboutInfo } from '~/components/AboutInfo';
import { Contact } from '~/components/Contact';
import { OfflineSession } from '~/components/OfflineSession';
import { SEO } from '~/components/SEO';
import { Supports } from '~/components/Supports';

export default function About() {
  return (
    <>
      <SEO title="디프만 - About" />
      <main>
        <AboutInfo />
        <OfflineSession />
        <Supports />
        <Contact />
      </main>
    </>
  );
}
