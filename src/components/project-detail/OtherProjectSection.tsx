import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

export default function OtherProjectSection() {
  return (
    <section css={projectDetailAnotherProjectCss}>
      <h2 css={headingCss}>다른 프로젝트도 궁금하다면?</h2>
      <div>
        <div></div>
        <div></div>
        <div></div>
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
