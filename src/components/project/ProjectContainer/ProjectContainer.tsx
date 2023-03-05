import { useId } from 'react';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

import { Project } from '../constants';
import ProjectItem from '../ProjectItem/ProjectItem';

interface Props {
  projects: Project[];
}
export default function ProjectContainer({ projects }: Props) {
  const id = useId();

  return (
    <div css={wrapperCss}>
      {projects.map(project => {
        return <ProjectItem project={project} key={`project-${id}-${project.order}`} />;
      })}
    </div>
  );
}

const wrapperCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 300px);
  gap: 24px;

  ${mediaQuery('sm')} {
    grid-template-columns: 1fr 1fr;
  }

  ${mediaQuery('xs')} {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
  }
`;
