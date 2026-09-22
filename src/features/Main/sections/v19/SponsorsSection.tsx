import Image from 'next/image';
import { css } from '@emotion/react';

import { CircleArrowRightIcon } from '~/components/Icons/CircleArrowRightIcon';
import { DEPROMEET_EMAIL } from '~/constant/depromeet';
import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

// 운영진 요청으로 후원사 로고·목록은 이번 기수에서도 바꾸지 않는다.
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
                  sizes="(min-width: 768px) 280px, 140px"
                  css={logoImageCss}
                />
              </div>
            ))}
          </div>
          <button type="button" css={inquiryButtonCss} onClick={handleInquiry}>
            <span>후원 문의하기</span>
            <CircleArrowRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  background: ${colors.v19.coolGray100};
  padding: 40px 20px;

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
  gap: 40px;

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
  ${theme.typosV4.instrumentSans.sub5};
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
  ${theme.typosV4.pretendard.body6M};
  color: ${colors.v19.coolGray800};

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.sub2M};
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
  gap: 12px 16px;
  width: 100%;
  max-width: 1180px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const logoCardCss = css`
  position: relative;
  width: 140px;
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
  ${theme.typosV4.pretendard.sub4M};
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
    ${theme.typosV4.pretendard.sub1M};
  }
`;
