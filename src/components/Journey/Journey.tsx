import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { QUANTIFIED_INFO } from '~/constant/aboutInfo';
import { mediaQuery } from '~/styles/media';

export function Journey() {
  return (
    <div css={layoutCss}>
      <h1>
        디프만은 디자이너와 개발자가 서비스 기획부터
        <br />
        런칭까지 함께 경험하는{' '}
        <span css={spanCss}>
          <div css={emphasisCss}>
            <Image src="/images/main/emphasis.svg" alt="성장추구형 강조" width={164} height={50} />
          </div>
        </span>
        <span css={spanCss}>성장추구형</span> 커뮤니티입니다.
      </h1>
      <DepromeetInformation />
    </div>
  );
}

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

const layoutCss = (theme: Theme) => css`
  width: 100%;
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
    padding: 40px 0;
    h1 {
      ${theme.typos.notosans.semibold20};
      min-width: 300px;
    }
  }
`;

const infoContainerCss = css`
  width: 100%;
  max-width: 1024px;
  min-width: 660px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery('mobile')} {
    min-width: 275px;
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
  left: -8px;
  top: 0;

  ${mediaQuery('mobile')} {
    left: -4px;
    img {
      width: 100px;
      height: 34px;
    }
  }
`;
