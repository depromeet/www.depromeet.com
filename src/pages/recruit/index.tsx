import SEO from '~/components/common/SEO';
import FaqSection from '~/components/recruit/FaqSection';
import HeaderSection from '~/components/recruit/HeaderSection';
import PosiotionSection from '~/components/recruit/PosiotionSection';
import RequirementSection from '~/components/recruit/RequirementSection';
import ScheduleSection from '~/components/recruit/ScheduleSection';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main>
        <HeaderSection />
        <ScheduleSection />
        <RequirementSection />
        <PosiotionSection />
        <FaqSection />
      </main>
    </>
  );
}
