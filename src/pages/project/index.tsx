import SEO from '~/components/common/SEO';
import DescriptionSection from '~/components/project/DescriptionSection';
import HorizontalDivider from '~/components/project/HorizontalDivider';
import ProjectSection from '~/components/project/ProjectSection';

export default function Project() {
  return (
    <>
      <SEO title="디프만 - Project" />
      <main>
        <DescriptionSection />
        <HorizontalDivider />
        <ProjectSection />
      </main>
    </>
  );
}
