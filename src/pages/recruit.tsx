import { ContactSection } from '~/components/ContactSection/ContactSection';
import { FAQ } from '~/components/FAQ';
import { MemberRecruitment } from '~/components/MemberRecruitment';
import { PositionGrid } from '~/components/PositionGrid/PositionGrid';
import { Review } from '~/components/Review';
import { SEO } from '~/components/SEO';
import { SessionSchedule } from '~/components/SessionSchedule/SessionSchedule';
import { ValueSection } from '~/components/ValueSection';
import { RecruitTitleSection } from '~/features/Recruit/sections/RecruitTitleSection';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <RecruitTitleSection />
        <PositionGrid />
        <ValueSection />
        <MemberRecruitment />
        <SessionSchedule />
        <Review />
        <FAQ />
        <ContactSection />
      </main>
    </>
  );
}
