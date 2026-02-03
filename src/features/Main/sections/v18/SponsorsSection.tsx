import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

interface Sponsor {
  name: string;
  logo: string;
}

const SPONSORS: Sponsor[] = [
  { name: 'elice', logo: '/images/17th/support/sponsor-elice.png' },
  { name: 'Gather', logo: '/images/17th/support/sponsor-gather.png' },
  { name: 'F-Lab', logo: '/images/17th/support/sponsor-f-lab.png' },
  { name: 'FastFive', logo: '/images/17th/support/sponsor-fastfive.png' },
  { name: 'Adelab', logo: '/images/17th/support/sponsor-adelab.png' },
  { name: '직행', logo: '/images/17th/support/sponsor-zighang.png' },
  { name: 'NineHire', logo: '/images/17th/support/sponsor-ninehire.png' },
];

const EMAIL_ADDRESS = 'depromeet@gmail.com';

export const SponsorsSection = () => {
  const handleInquiry = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=디프만 후원 문의`;
  };

  return (
    <section css={sectionCss}>
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
                <Image src={sponsor.logo} alt={sponsor.name} fill css={logoImageCss} />
              </div>
            ))}
          </div>
          <button css={inquiryButtonCss} onClick={handleInquiry}>
            후원 문의하기
            <span css={mobileIconCss}>
              <ArrowRightIconMobile />
              <ArrowRightIconMobileHover />
            </span>
            <span css={desktopIconCss}>
              <ArrowRightIconDesktop />
              <ArrowRightIconDesktopHover />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIconDesktop = () => (
  <span css={arrowDefaultCss} data-icon="default">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
        fill="#0078E7"
      />
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

const ArrowRightIconDesktopHover = () => (
  <span css={arrowHoverCss} data-icon="hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
        fill="white"
      />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconMobile = () => (
  <span css={arrowDefaultCss} data-icon="default">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#0078E7"
      />
      <path
        d="M12 16L16 12L12 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconMobileHover = () => (
  <span css={arrowHoverCss} data-icon="hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="white"
      />
      <path
        d="M12 16L16 12L12 8"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#0078E7"
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

/* FAQSection과 동일: 768px 기준으로 24px/32px 아이콘 전환 */
const mobileIconCss = css`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const desktopIconCss = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const sectionCss = css`
  width: 100%;
  padding: 40px 24px;
  background: ${colors.primary18['extra-light']};

  @media (min-width: 768px) {
    padding: 120px 40px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (min-width: 768px) {
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
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: #040c23;

  @media (min-width: 768px) {
    font-size: 36px;
    letter-spacing: -0.04em;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;

const subtitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['800']};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const contentsContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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

/* 카카오톡/이메일 문의하기 버튼과 동일: 흰 배경·회색 테두리, 호버 시에만 파란색 */
const inquiryButtonCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 56px;
  padding: 12px 36px 12px 40px;
  border: 2px solid #e3e5e7;
  border-radius: 100px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['900']};

  &:hover {
    background: #0078e7;
    color: #fff;

    & [data-icon='default'] {
      display: none;
    }
    & [data-icon='hover'] {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    height: 80px;
    padding: 20px 44px 20px 52px;
    font-size: 24px;
  }

  @media (max-width: 767px) {
    border-width: 1px;
  }
`;
