import FaqSection from '~/components/recurit/FaqSection';
import HeaderSection from '~/components/recurit/HeaderSection';
import PosiotionSection from '~/components/recurit/PosiotionSection';
import RequirementSection from '~/components/recurit/RequirementSection';
import ScheduleSection from '~/components/recurit/ScheduleSection';

export default function Recruit() {
  return (
    <main>
      <HeaderSection />
      <ScheduleSection />
      <RequirementSection />
      <PosiotionSection />
      <FaqSection />
    </main>
  );
}
