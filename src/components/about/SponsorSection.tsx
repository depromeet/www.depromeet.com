import Image from 'next/image';
import { css } from '@emotion/react';

import { SPONSOR_IMAGE_BASE } from '~/constants/images';
import { mediaQuery } from '~/styles/constants';
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
        {SPONSORS.map(sponsor => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}
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

  ${mediaQuery('xs')} {
    margin-bottom: 100px;
  }
`;

const smallCss = css`
  ${sectionSmallCss};
  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};
  text-align: center;

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    margin-bottom: 40px;
  }
`;

const articleCss = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 24px;
  column-gap: 52px;
`;

interface SponsorImage {
  name: string;
  src: string;
  width: number;
  height: number;
}

const SPONSORS: SponsorImage[] = [
  { name: '임팩트 캠퍼스', src: `${SPONSOR_IMAGE_BASE}/impact-campus.svg`, width: 211, height: 46 },
];

function Sponsor({ name, src, width, height }: SponsorImage) {
  return <Image src={src} alt={name} width={width} height={height} />;
}
