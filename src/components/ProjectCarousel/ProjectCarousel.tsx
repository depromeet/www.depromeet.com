import { css } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { ProjectCarouselItem } from '~/components/ProjectCarousel/ProjectCarouselItem';
import { SectionTitle } from '~/components/SectionTitle';
import { PROJECT_LIST } from '~/constant/project';

export function ProjectCarousel() {
  return (
    <section css={layoutCss}>
      <SectionTitle label="Project" title="프로젝트" />
      <Marquee>
        {PROJECT_LIST.map(project => (
          <ProjectCarouselItem key={project.title} {...project} />
        ))}
      </Marquee>
    </section>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
