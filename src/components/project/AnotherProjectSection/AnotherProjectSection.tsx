import React from 'react';
import { css } from '@emotion/react';

import { projects } from '~/components/project/constants';

import ProjectContainer from '../ProjectContainer';

export default function AnotherProjectSection() {
  return (
    <div css={sectionCss}>
      <div css={anotherProjectCss}>다른 프로젝트</div>
      <ProjectContainer projects={projects.sort(() => Math.random() - Math.random()).slice(0, 3)} />
    </div>
  );
}

const sectionCss = css`
  margin: 60px 0 120px;
`;

const anotherProjectCss = css`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 40px;
`;
