import SEO from '~/components/common/SEO';
import ApplySection from '~/components/home/ApplySection';
import HeaderSection from '~/components/home/HeaderSection';
import MoreInfoSection from '~/components/home/MoreInfoSection';
import RecordSection from '~/components/home/RecordSection';
import ScheduleSection from '~/components/home/ScheduleSection';
import SponsorSection from '~/components/home/SponsorSection';
import TeamSection from '~/components/home/TeamSection';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <HeaderSection />
        <RecordSection />
        <TeamSection />
        <ScheduleSection />
        <MoreInfoSection />
        <SponsorSection />
        <ApplySection />
      </main>
    </>
  );
}
