import { useId } from 'react';
import { css } from '@emotion/react';

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
  display: grid;
  grid-template-columns: repeat(3, 384px);
  grid-template-rows: repeat(3, 300px);
  column-gap: 24px;
  row-gap: 24px;
`;
