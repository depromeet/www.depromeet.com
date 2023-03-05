import ApplySection from '~/components/common/ApplySection';
import SEO from '~/components/common/SEO';
import HeaderSection from '~/components/project/HeaderSection';
import { HorizontalDivider } from '~/components/project/HorizontalDivider/HorizontalDivider';
import ProjectListSection from '~/components/project/ProjectListSection';
import useMediaQuery from '~/hooks/use-media-query';

export default function Project() {
  const isMobile = useMediaQuery('xs');
  return (
    <>
      <SEO title="디프만 - Project" />
      <main>
        <HeaderSection />
        <HorizontalDivider />
        <ProjectListSection />
        {!isMobile && <ApplySection wrapperCss={'margin-bottom: 240px'} />}
      </main>
    </>
  );
}
