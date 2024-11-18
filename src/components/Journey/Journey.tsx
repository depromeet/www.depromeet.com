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
            <Image src="/images/main/emphasis.svg" alt="성장추구형 강조" width={152} height={50} />
          </div>
        </span>
        <span css={spanCss}>성장추구형</span> 커뮤니티입니다.
      </h1>
      <DepromeetInformation />
    </div>
  );
}

function DepromeetInformation() {
  // NOTE: 빌드 에러 수정을 위해 임시 주석처리
  return (
    <div css={infoContainerCss}>
      {QUANTIFIED_INFO.map(
        (
          {
            label,
            // text
          },
          idx
        ) => (
          <div key={idx} css={gridItemCss}>
            {/* <span>{text}</span> */}
            <h3>{label}</h3>
          </div>
        )
      )}
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
    ${theme.typosV2.pretendard.semibold32};
    text-align: center;
  }

  @media (max-width: 800px) {
    h1 {
      ${theme.typosV2.pretendard.semibold26};
    }
  }

  ${mediaQuery('mobile')} {
    h1 {
      margin: 0 20px;
      ${theme.typosV2.pretendard.semibold20};
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
    min-width: 310px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const gridItemCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;

  span {
    ${theme.typosV2.bebas.regular88}
  }

  h3 {
    text-align: center;
    width: 100%;
    background-color: black;
    color: white;
    ${theme.typosV2.pretendard.regular16}
  }

  ${mediaQuery('mobile')} {
    span {
      ${theme.typosV2.bebas.regular66}
    }

    h3 {
      ${theme.typosV2.pretendard.regular14}
    }
  }
`;

const spanCss = css`
  position: relative;
`;

const emphasisCss = css`
  position: absolute;
  left: -8px;
  top: -4px;

  @media (max-width: 800px) {
    left: -6px;
    img {
      width: 124px;
      height: 42px;
    }
  }

  ${mediaQuery('mobile')} {
    left: -4px;
    img {
      width: 94px;
      height: 36px;
    }
  }
`;
