import { Ending } from '~/components/Ending';
import { Intro } from '~/components/Intro';
import { Journey } from '~/components/Main/Journey';
import { RecruitEntrance } from '~/components/Main/RecruitEntrance';
import { ProjectCarousel } from '~/components/ProjectCarousel';
import { SEO } from '~/components/SEO';
import { Subscribe } from '~/components/Subscribe';

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
