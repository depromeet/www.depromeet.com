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
              <ArrowIcon color={colors.primary18.strong} />
            </span>
            <span css={desktopIconCss}>
              <ArrowIcon color={colors.grey18['00']} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
    <path
      d="M10 8L14 12L10 16"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const mobileIconCss = css`
  display: flex;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const desktopIconCss = css`
  display: none;

  @media (min-width: 1280px) {
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

const inquiryButtonCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 56px;
  padding: 12px 36px 12px 40px;
  border: 2px solid ${colors.grey18['200']};
  border-radius: 100px;
  background: ${colors.grey18['00']};
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['900']};

  &:hover {
    background: ${colors.grey18['100']};
  }

  @media (min-width: 768px) {
    height: 80px;
    padding: 20px 44px 20px 52px;
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    border: none;
    background: ${colors.primary18.strong};
    color: ${colors.grey18['00']};

    &:hover {
      background: ${colors.primary18.normal};
    }
  }
`;
