import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { QUANTIFIED_INFO } from '~/constant/aboutInfo';
import { mediaQuery } from '~/styles/media';

function DepromeetInformation() {
  return (
    <div css={infoContainerCss}>
      {QUANTIFIED_INFO.map(({ label, text }, idx) => (
        <div key={idx} css={gridItemCss}>
          <span>{text}</span>
          <h3>{label}</h3>
        </div>
      ))}
    </div>
  );
}

export function Journey() {
  return (
    <section css={layoutCss}>
      <h1>
        디프만은 디자이너와 개발자가 서비스 기획부터
        <br />
        런칭까지 함께 경험하는{' '}
        <span css={spanCss}>
          <div css={emphasisCss}>
            <Image src="/images/main/emphasis.svg" alt="성장추구형 강조" width={162} height={48} />
          </div>
        </span>
        <span css={spanCss}>성장추구형</span> 커뮤니티입니다.
      </h1>
      <DepromeetInformation />
      <Link css={linkCss} href="/about">
        ABOUT
        <span css={arrowImgContainerCss}>
          <Image src="/images/main/arrow.svg" alt="ABOUT 페이지로 이동" width={15} height={15} />
        </span>
      </Link>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  color: black;

  h1 {
    ${theme.typos.notosans.semibold32};
    text-align: center;
  }

  ${mediaQuery('mobile')} {
    h1 {
      ${theme.typos.notosans.semibold20};
      min-width: 300px;
    }
  }
`;

const infoContainerCss = css`
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const gridItemCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;

  span {
    ${theme.typos.bebas.regular88}
  }

  h3 {
    text-align: center;
    width: 100%;
    background-color: black;
    color: white;
    ${theme.typos.notosans.regular16}
  }

  ${mediaQuery('mobile')} {
    span {
      ${theme.typos.bebas.regular66}
    }

    h3 {
      ${theme.typos.notosans.regular14}
    }
  }
`;

const spanCss = css`
  position: relative;
`;

const emphasisCss = css`
  position: absolute;
  left: 0;
  top: 0;

  ${mediaQuery('mobile')} {
    img {
      width: 99px;
      height: 32px;
    }
  }
`;

const linkCss = (theme: Theme) => css`
  padding: 16px, 40px, 16px, 48px;
  width: 205px;
  height: 62px;
  display: flex;
  gap: 8px;
  ${theme.typos.notosans.semibold20};
  color: white;
  background-color: black;
  border-radius: 400px;
  justify-content: center;
  align-items: center;
`;

const arrowImgContainerCss = css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 400px;
  background-color: white;
`;
