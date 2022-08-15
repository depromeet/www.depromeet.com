import HeaderSection from '~/components/home/HeaderSection';
import RecordSection from '~/components/home/RecordSection';
import ScheduleSection from '~/components/home/ScheduleSection';
import TeamSection from '~/components/home/TeamSection';

export default function Root() {
  return (
    <main>
      <HeaderSection />
      <RecordSection />
      <TeamSection />
      <ScheduleSection />
    </main>
  );
}
