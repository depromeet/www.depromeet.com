import { SEO } from '~/components/SEO';
import { ProjectContentSection } from '~/features/Project/sections/ProjectContentSection';

export default function project() {
  return (
    <>
      <SEO title="디프만 - Project" />
      <main>
        <ProjectContentSection />
      </main>
    </>
  );
}
