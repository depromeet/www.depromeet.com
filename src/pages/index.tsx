import SEO from '~/components/common/SEO';
import HeaderSection from '~/components/home/HeaderSection';
import RecruitNotiSection from '~/components/home/RecruitNotiSection';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <HeaderSection />
        <RecruitNotiSection />
        {/* <RecordSection /> */}
        {/* <TeamSection /> */}
        {/* <ScheduleSection /> */}
        {/* <MoreInfoSection /> */}
        {/* <SponsorSection /> */}
        {/* <ApplySection /> */}
      </main>
    </>
  );
}
