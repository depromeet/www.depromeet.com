import ApplySection from '~/components/common/ApplySection';
import SEO from '~/components/common/SEO';
import HeaderSection from '~/components/project/HeaderSection';
import ProjectListSection from '~/components/project/ProjectListSection';

export default function Project() {
  return (
    <>
      <SEO title="디프만 - Project" />
      <main>
        <HeaderSection />
        <ProjectListSection />
        <ApplySection />
      </main>
    </>
  );
}
