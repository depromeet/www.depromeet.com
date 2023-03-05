import dynamic from 'next/dynamic';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

import { projects } from '../project/constants';

const ProjectItem = dynamic(() => import('../project/ProjectItem/ProjectItem'), { ssr: false });

export default function OtherProjectSection() {
  const randomProjects = projects.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <section css={projectDetailAnotherProjectCss}>
      <h2 css={headingCss}>다른 프로젝트도 궁금하다면?</h2>
      <div css={wrapperCss}>
        {randomProjects.map(project => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

const projectDetailAnotherProjectCss = css`
  width: 100%;
  padding-top: 184px;

  margin-bottom: 209px;

  ${mediaQuery('xs')} {
    padding-top: 0px;
    margin-bottom: 150px;
  }
`;

const headingCss = css`
  text-align: center;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 43px;

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    margin-bottom: 30px;
  }
`;

const wrapperCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 24px;
`;
