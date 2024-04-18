import { FAQ } from '~/components/FAQ';
import { Intro } from '~/components/Intro';
import { Positions } from '~/components/Positions';
import { Qualification } from '~/components/Qualification';
import { Schedules } from '~/components/Recruit';
import { Review } from '~/components/Review';
import { SEO } from '~/components/SEO';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <Intro
          imageUrl="/images/recruit/intro-img.svg"
          title="15기 인재상 및 모집 인트로"
          width={1024}
          height={760}
          color="pink"
        />
        <Qualification />
        <Schedules />
        <Positions />
        <Review />
        <FAQ />
      </main>
    </>
  );
}
