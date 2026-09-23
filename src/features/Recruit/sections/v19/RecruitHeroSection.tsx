import Image from 'next/image';
import { css } from '@emotion/react';

import { PositionGrid } from '~/components/PositionGrid/PositionGrid';
import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { displayEnd, formatKoreanDate } from '~/utils/date';

/** `2026.10.02 - 10.08` — 종료일은 exclusive라 표시용으로 1ms 당긴다. */
function getApplyPeriod() {
  return `${formatKoreanDate(RECRUIT.applyWindow.start, 'period')} - ${formatKoreanDate(
    displayEnd(RECRUIT.applyWindow.end),
    'period'
  )}`;
}

export function RecruitHeroSection() {
  return (
    <section css={sectionCss} data-gnb-theme="dark">
      <div css={textBlockCss}>
        {/* A-16: "Recruit" 로고타입은 Instrument Serif 폰트 대신 SVG로 export(designer-requests §0-2) */}
        <Image
          src="/images/19th/recruit/recruit-logo.svg"
          alt="Recruit"
          width={440}
          height={110}
          priority
          css={logoCss}
        />
        <p css={dateCss}>{getApplyPeriod()}</p>
      </div>
      <PositionGrid />
    </section>
  );
}

const sectionCss = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 120px 20px 60px;
  background: ${colors.v19.blue900};

  @media (min-width: 768px) {
    gap: 60px;
    padding: 160px 40px 80px;
  }

  @media (min-width: 1280px) {
    gap: 80px;
    padding: 200px 40px 160px;
  }
`;

const textBlockCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;

const logoCss = css`
  display: block;
  width: 210px;
  height: auto;

  @media (min-width: 768px) {
    width: 350px;
  }

  @media (min-width: 1280px) {
    width: 440px;
  }
`;

const dateCss = css`
  margin: 0;
  color: ${colors.v19.white100};
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.32px;
  }
`;
