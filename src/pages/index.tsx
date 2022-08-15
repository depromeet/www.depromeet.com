import HeaderSection from '~/components/home/HeaderSection';
import RecordSection from '~/components/home/RecordSection';
import TeamSection from '~/components/home/TeamSection';

export default function Root() {
  return (
    <main>
      <HeaderSection />
      <RecordSection />
      <TeamSection />
    </main>
  );
}
