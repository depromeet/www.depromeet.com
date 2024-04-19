import { Intro } from '~/components/Intro';
import { Ending, JourneyEntrance, RecruitEntrance, Subscribe } from '~/components/Main';
import { ProjectCarousel } from '~/components/ProjectCarousel';
import { SEO } from '~/components/SEO';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <div>
          <Intro
            imageUrl="/images/main/intro-img.svg"
            title="15기 모집 인트로"
            width={1024}
            height={780}
            color={'blue'}
          />
          <JourneyEntrance />
          <RecruitEntrance />
          <ProjectCarousel />
          <Ending />
          <Subscribe />
        </div>
      </main>
    </>
  );
}
