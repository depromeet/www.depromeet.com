import { css } from '@emotion/react';

import { layoutCss, section36HeadingCss, sectionSmallCss } from '~/styles/css';

export default function SponsorSection() {
  return (
    <section css={sectionCss}>
      <small css={smallCss}>SPONSOR</small>
      <h2 css={headingCss}>
        디프만과 함께하는
        <br />
        후원사를 소개합니다
      </h2>
      <article css={articleCss}>
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
      </article>
    </section>
  );
}

const sectionCss = css`
  ${layoutCss};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 180px;
`;

const smallCss = css`
  ${sectionSmallCss};
  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};
  text-align: center;

  margin-bottom: 80px;
`;

const articleCss = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 24px;
  column-gap: 52px;
`;

// TODO : 스폰서 확정 후 추가 및 사용
// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
interface SponsorImage {
  name: string;
  src: string;
  width: number;
  height: number;
}

function Sponsor() {
  return <div css={sponsorWrapperCss}>sponsor</div>;
}

const sponsorWrapperCss = css`
  width: 282px;
  height: 62px;
  background-color: gray;
`;
