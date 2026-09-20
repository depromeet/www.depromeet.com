import Image from 'next/image';
import { css } from '@emotion/react';

import { DEPROMEET_EMAIL } from '~/constant/depromeet';
import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

// Figma `203:1463`(1920/1280 공용 컴포넌트) · `203:2071`(360)
// 운영진 요청으로 후원사 로고·목록은 이번 기수에서도 변경하지 않는다(RECRUIT.sponsors 그대로 사용).
const SPONSORS = RECRUIT.sponsors;

export const SponsorsSection = () => {
  const handleInquiry = () => {
    window.location.href = `${DEPROMEET_EMAIL}?subject=디프만 후원 문의`;
  };

  return (
    <section css={sectionCss} data-gnb-theme="light">
      <div css={contentCss}>
        <div css={textContainerCss}>
          <h2 css={titleCss}>후원사</h2>
          <p css={subtitleCss}>
            디프만은 IT비영리단체로 후원을 통해 더 많은 교육 기회에 도움을 받고 있습니다
          </p>
        </div>
        <div css={contentsContainerCss}>
          <div css={logoGridCss}>
            {SPONSORS.map(sponsor => (
              <div key={sponsor.name} css={logoCardCss}>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  // 카드 실제 폭. 없으면 Next가 100vw로 간주해 1920px에서 2048w 변환본을 받는다.
                  sizes="(min-width: 1280px) 160px, 120px"
                  css={logoImageCss}
                />
              </div>
            ))}
          </div>
          <button type="button" css={inquiryButtonCss} onClick={handleInquiry}>
            <span>후원 문의하기</span>
            <ArrowRightIconDefault />
            <ArrowRightIconHover />
          </button>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIconDefault = () => (
  <span css={arrowDefaultCss} data-icon="default">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill={colors.v19.blue500} />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconHover = () => (
  <span css={arrowHoverCss} data-icon="hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill={colors.v19.white100} />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke={colors.v19.blue500}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke={colors.v19.blue500}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const arrowDefaultCss = css`
  display: flex;
`;

const arrowHoverCss = css`
  display: none;
`;

const sectionCss = css`
  width: 100%;
  background: ${colors.v19.coolGray100};
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 80px 40px;
  }

  @media (min-width: 1280px) {
    padding: 120px 40px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }

  @media (min-width: 1280px) {
    gap: 100px;
  }
`;

const textContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const titleCss = css`
  ${theme.typosV4.instrumentSans.sub4};
  color: ${colors.v19.blue900};

  @media (min-width: 768px) {
    ${theme.typosV4.instrumentSans.head4};
    color: ${colors.v19.blue900};
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.head2};
    color: ${colors.v19.blue900};
  }
`;

const subtitleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray800};

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

const contentsContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

const logoGridCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 1180px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const logoCardCss = css`
  position: relative;
  width: calc(50% - 6px);
  height: 60px;
  border-radius: 6px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 280px;
    height: 120px;
    border-radius: 12px;
  }
`;

const logoImageCss = css`
  object-fit: contain;
  padding: 12px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const inquiryButtonCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 24px;
  border: 2px solid ${colors.v19.coolGray200};
  border-radius: 200px;
  background: ${colors.v19.white100};
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};

  &:hover {
    background: ${colors.v19.blue500};
    color: ${colors.v19.white100};

    [data-icon='default'] {
      display: none;
    }
    [data-icon='hover'] {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    height: 80px;
    padding: 20px 44px 20px 52px;
    gap: 12px;
    font-size: 24px;
  }
`;
