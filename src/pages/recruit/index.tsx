import FaqSection from '~/components/recruit/FaqSection';
import HeaderSection from '~/components/recruit/HeaderSection';
import PosiotionSection from '~/components/recruit/PosiotionSection';
import RequirementSection from '~/components/recruit/RequirementSection';
import ScheduleSection from '~/components/recruit/ScheduleSection';

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
