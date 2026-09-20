import Image from 'next/image';
import { css } from '@emotion/react';

import { PositionGrid } from '~/components/PositionGrid/PositionGrid';
import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { displayEnd, formatKoreanDate } from '~/utils/date';

/**
 * 모집안내 Hero (`203:2377`·`203:3047`). "Recruit" 로고타입 + 모집기간(config 파생) +
 * 글래스 포지션 카드 5장. `RecruitIntroSection`·`RecruitTitleSection`을 대체한다(R1).
 */

/** `2026.10.02 - 10.08` — 종료일은 exclusive라 표시용으로 1ms 당긴다. */
function getApplyPeriod() {
  // 시안(`203:2377`)의 표기는 `2026.10.16(월) - 2026.10.21(금)` — 양쪽에 연도와 요일을 쓴다.
  // (시안의 날짜 자체는 오류다. 실제 기간은 설정의 applyWindow에서 온다 — 계획 C-2)
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
  /* 시안 203:2377 / 203:3047은 이 프레임 자체는 별 배경 없이 단색이다(별 배경은 공용 다크 셸 담당). */
  background: ${colors.v19.blue900};

  @media (min-width: 768px) {
    padding: 140px 40px 80px;
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

  @media (min-width: 1280px) {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.32px;
  }
`;
