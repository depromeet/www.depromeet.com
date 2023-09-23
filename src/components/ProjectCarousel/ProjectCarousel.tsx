import { css } from '@emotion/react';

import { ProjectCarouselItem } from '~/components/ProjectCarousel/ProjectCarouselItem';
import { SectionTitle } from '~/components/SectionTitle';
import { Swiper } from '~/components/Swiper';
import { PROJECT_LIST } from '~/constant/project';

export function ProjectCarousel() {
  return (
    <div css={layoutCss}>
      <SectionTitle label="Project" title="프로젝트" />
      <Swiper.Wrapper
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
        }}
        speed={1000}
      >
        {PROJECT_LIST.map(project => (
          <ProjectCarouselItem key={project.title} {...project} />
        ))}
      </Swiper.Wrapper>
    </div>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
