import { MemberRecruitment } from '~/components/MemberRecruitment';
import { SEO } from '~/components/SEO';
import { SessionSchedule } from '~/components/SessionSchedule';
import { ValueSection } from '~/components/ValueSection';
import { RecruitHeroSection } from '~/features/Recruit/sections/v19/RecruitHeroSection';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <RecruitHeroSection />
        <ValueSection />
        <MemberRecruitment />
        <SessionSchedule />
      </main>
    </>
  );
}
