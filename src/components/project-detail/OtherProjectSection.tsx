import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function OtherProjectSection() {
  return (
    <section css={projectDetailAnotherProjectCss}>
      <h1>다른 프로젝트도 궁금하다면?</h1>
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
  margin-bottom: 209px;

  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 43px;
    letter-spacing: -1px;
    color: ${colors.black};
    margin: 184px 0 81px 0;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    div {
      width: 384px;
      height: 300px;
      background-color: gray;
    }
  }
`;
