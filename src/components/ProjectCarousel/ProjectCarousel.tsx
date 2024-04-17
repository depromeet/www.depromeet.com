import { css } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { ProjectCarouselItem } from '~/components/ProjectCarousel/ProjectCarouselItem';
import { SectionTitle } from '~/components/SectionTitle';
import { PROJECT_LIST } from '~/constant/project';
import { mediaQuery } from '~/styles/media';

import { LinkButton } from '../Main/LinkButton';

const PROJECT_14 = PROJECT_LIST.filter(project => project.subTitle === '14기');

export function ProjectCarousel() {
  return (
    <section css={layoutCss}>
      <SectionTitle title="14TH PROJECT" />
      <Marquee>
        {PROJECT_14.map(project => (
          <ProjectCarouselItem key={project.title} {...project} />
        ))}
      </Marquee>
      <LinkButton color="white" text="모든 프로젝트" href="/project" />
    </section>
  );
}

const layoutCss = css`
  height: 686px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  overflow: hidden;
  background-color: black;

  ${mediaQuery('tablet')} {
    height: 650px;
  }

  ${mediaQuery('mobile')} {
    height: 550px;
  }
`;
