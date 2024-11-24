import { FAQ } from '~/components/FAQ';
import { Qualification } from '~/components/Qualification';
import { Schedules } from '~/components/Recruit';
import { Review } from '~/components/Review';
import { SEO } from '~/components/SEO';
import { IntroSection } from '~/features/Common/sections/IntroSection';
import { RecruitMarqueeSection } from '~/features/Recruit/sections/RecruitMarqueeSection';
import { RecuritPosition } from '~/features/Recruit/sections/RecuritPosition';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <IntroSection
          defaultImgUrl={'/images/16th/recruit/recruitment.svg'}
          mobileImgUrl={'/images/16th/recruit/recruitment_m.svg'}
        />
        <RecruitMarqueeSection />
        <RecuritPosition />
        <Qualification />
        <Schedules />
        <Review />
        <FAQ />
      </main>
    </>
  );
}
