import { AboutInfo } from '~/components/AboutInfo';
import { Contact } from '~/components/Contact';
import { OfflineSession } from '~/components/OfflineSession';
import { SEO } from '~/components/SEO';

export default function About() {
  return (
    <>
      <SEO title="디프만 - About" />
      <main>
        <AboutInfo />
        <OfflineSession />
        <Contact />
      </main>
    </>
  );
}
