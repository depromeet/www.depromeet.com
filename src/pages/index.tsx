import HeaderSection from '~/components/home/HeaderSection';
import MoreInfoSection from '~/components/home/MoreInfoSection';
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
      <MoreInfoSection />
    </main>
  );
}
