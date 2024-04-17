import { Ending, Intro, Journey, RecruitEntrance, Subscribe } from '~/components/Main';
import { ProjectCarousel } from '~/components/ProjectCarousel';
import { SEO } from '~/components/SEO';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <div>
          <Intro />
          <Journey />
          <RecruitEntrance />
          <ProjectCarousel />
          <Ending />
          <Subscribe />
        </div>
      </main>
    </>
  );
}
