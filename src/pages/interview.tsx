import SEO from '~/components/common/SEO';
import HeaderSection from '~/components/interview/HeaderSection';
import InterviewSection from '~/components/interview/InterviewSection';

export default function Interview() {
  return (
    <>
      <SEO title="디프만 - Interview" />
      <main>
        <HeaderSection />
        <InterviewSection />
      </main>
    </>
  );
}
