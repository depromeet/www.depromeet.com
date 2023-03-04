import { css } from '@emotion/react';

import { Project } from '../constants';

interface Props {
  project: Project;
}
export default function ProjectItem({ project }: Props) {
  return (
    <div css={wrapperCss}>
      <span>{project.generation}기</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button>상세 페이지로 이동</button>
    </div>
  );
}

const wrapperCss = css`
  border: 1px solid pink;
`;
