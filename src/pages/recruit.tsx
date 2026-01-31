import { MemberRecruitment } from '~/components/MemberRecruitment';
import { SEO } from '~/components/SEO';
import { SessionSchedule } from '~/components/SessionSchedule';
import { ValueSection } from '~/components/ValueSection';
import { RecruitIntroSection } from '~/features/Recruit/sections/RecruitIntroSection';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <RecruitIntroSection />
        <ValueSection />
        <MemberRecruitment />
        <SessionSchedule />
      </main>
    </>
  );
}
