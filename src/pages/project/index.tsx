import { css } from '@emotion/react';

import ApplySection from '~/components/common/ApplySection';
import SEO from '~/components/common/SEO';
import HeaderSection from '~/components/project/HeaderSection';
import { HorizontalDivider } from '~/components/project/HorizontalDivider/HorizontalDivider';
import ProjectListSection from '~/components/project/ProjectListSection';
import useMediaQuery from '~/hooks/use-media-query';
import { layoutCss } from '~/styles/css';

export default function Project() {
  const isMobile = useMediaQuery('xs');
  return (
    <>
      <SEO title="디프만 - Project" />
      <main css={mainCss}>
        <HeaderSection />
        <HorizontalDivider />
        <ProjectListSection />
        {!isMobile && <ApplySection wrapperCss={applySectionCss} />}
      </main>
    </>
  );
}

const mainCss = css`
  ${layoutCss};

  display: flex;
  flex-direction: column;
`;

const applySectionCss = css`
  margin-bottom: 240px;
`;
