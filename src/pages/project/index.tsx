import DescriptionSection from '~/components/project/DescriptionSection';
import HorizontalDivider from '~/components/project/HorizontalDivider';
import ProjectSection from '~/components/project/ProjectSection';

export default function Project() {
  return (
    <main>
      <DescriptionSection />
      <HorizontalDivider />
      <ProjectSection />
    </main>
  );
}
