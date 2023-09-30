import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { Button } from '~/components/Button';
import { ProjectCarouselItem } from '~/components/ProjectCarousel/ProjectCarouselItem';
import { SectionTitle } from '~/components/SectionTitle';
import { PROJECT_LIST } from '~/constant/project';

const PROJECT_13 = PROJECT_LIST.filter(project => project.subTitle === '13기');

export function ProjectCarousel() {
  return (
    <section css={layoutCss}>
      <SectionTitle label="Project" title="프로젝트" />
      <Marquee>
        {PROJECT_13.map(project => (
          <ProjectCarouselItem key={project.title} {...project} />
        ))}
      </Marquee>
      <Button css={projectButtonCss}>
        <Link href="/project">전체보기</Link>
      </Button>
    </section>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const projectButtonCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  margin-top: 88px;
`;
