import React from 'react';
import { css } from '@emotion/react';

import { projects } from '~/components/project/constants';
import { mediaQuery } from '~/styles/constants';

import AnotherProjectContainer from './AnotherProjectContainer';
import HorizontalDivider from '../HorizontalDivider';

export default function AnotherProjectSection() {
  return (
    <>
      <div css={dividerCss}>
        <HorizontalDivider />
      </div>
      <div css={sectionCss}>
        <div css={anotherProjectCss}>다른 프로젝트</div>
        <AnotherProjectContainer
          projects={projects.sort(() => Math.random() - Math.random()).slice(0, 4)}
        />
      </div>
    </>
  );
}

const dividerCss = css`
  ${mediaQuery('xs')} {
    margin: 0 20px;
  }
`;

const sectionCss = css`
  margin: 60px 20px 120px;

  ${mediaQuery('xs')} {
    margin: 40px 20px 120px;
  }
`;

const anotherProjectCss = css`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 40px;

  ${mediaQuery('xs')} {
    text-align: left;
    margin-bottom: 30px;
  }
`;
