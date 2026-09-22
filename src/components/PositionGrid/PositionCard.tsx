import { css, Interpolation, Theme } from '@emotion/react';

import { PositionId, RecruitConfig } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';
import { RecruitCta } from '~/utils/recruit';

interface PositionCardProps {
  position: RecruitConfig['positions'][number];
  /** `null`이면 아직 모집 상태를 계산하기 전(마운트 전)이다. */
  cta: RecruitCta | null;
}

/** 포지션별 3D 아이콘 — Figma `203:2377`/`203:3047`에서 export(A-5). */
const ICON_SRC: Record<PositionId, string> = {
  design: '/images/19th/recruit/icon-design.svg',
  android: '/images/19th/recruit/icon-android.svg',
  ios: '/images/19th/recruit/icon-ios.svg',
  web: '/images/19th/recruit/icon-web.svg',
  server: '/images/19th/recruit/icon-server.svg',
};

/**
 * 포지션별 글래스 카드 그라데이션. Figma 스타일 패널에 "(No Regist)"로 표시되는,
 * 디자인 시스템에 등록되지 않은 카드 전용 값이라 `colors.v19.*`에 없다(§ colors.ts 주석 참고,
 * 이 파일은 이번 작업 범위 밖이라 새 토큰을 추가하지 않았다). 그래서 여기에만 리터럴로 둔다.
 * radial 카드(design·server)는 Figma의 `gradientTransform` 행렬(타원 형태)을 CSS
 * `radial-gradient(ellipse …)`로 근사했다 — 완전한 픽셀 일치는 아니다.
 */
/**
 * 직군별 글래스 카드 배경. 시안에서 읽어온 그라데이션 스톱을 그대로 옮긴 값이라
 * `colors.v19` 토큰으로 치환할 수 없다(25개 팔레트에 없는 직군 전용 색이다).
 *
 * ⚠ 디자이너 가이드는 "카드 배경을 이미지로 export해서 사용"이었다(그라데이션·blur가
 * 이미 구워져 있으므로). 여기서는 CSS 그라데이션으로 재현했다 —
 * 파일이 없어 더 가볍고 선명하지만, **시안과 픽셀 단위로 같다고 검증되지 않았다.**
 * 시각 QA에서 4BP 대조가 필요하다(계획 A-6).
 */
const CARD_BACKGROUND: Record<PositionId, string> = {
  design:
    'radial-gradient(ellipse 131% 54% at 50% 57%, #E33789 26.442%, #E465A6 44.832%, #E593C2 63.221%, #E6C0DF 81.611%, #E7EEFB 100%)',
  android: 'linear-gradient(to bottom, #08B18F 32.279%, #04122B 111.03%)',
  ios: 'linear-gradient(to bottom, #FFF1A2 3.971%, #E49800 68.206%, #E7EEFB 111.03%)',
  web: 'linear-gradient(to bottom, #3D8DEF 32.279%, #04122B 86.838%, #E8EEFB 111.03%)',
  server:
    'radial-gradient(ellipse 131% 54% at 50% 57%, #965DF6 26.442%, #AA81F8 44.832%, #BEA5F9 63.221%, #E7EEFB 100%)',
};

/**
 * 지원 가능한 상태에서는 **실제 링크(`<a href>`)**로 렌더한다.
 * `window.open`을 쓰면 새 탭 차단·링크 복사·크롤링에서 모두 불리하고, 무엇보다
 * 어떤 URL로 가는지 테스트할 수 없다(T1-d).
 */
function PositionCtaButton({
  cta,
  overrideCss,
}: {
  cta: RecruitCta | null;
  overrideCss: Interpolation<Theme>;
}) {
  // 마운트 전에는 라벨을 확정할 수 없다(계획 §0.6). 자리만 잡아 둔다.
  if (cta === null) {
    // 빈 버튼이면 폭이 0에 가까워 마운트 시 카드 5장이 동시에 흔들린다.
    // GNB와 같은 방식으로 라벨을 숨겨 렌더해 폭을 예약한다.
    return (
      <button type="button" css={[overrideCss, hiddenCss]} disabled aria-hidden>
        {PLACEHOLDER_LABEL}
      </button>
    );
  }

  if (cta.kind === 'disabled') {
    return (
      <button type="button" css={overrideCss} disabled>
        {cta.label}
      </button>
    );
  }

  return (
    <a
      css={overrideCss}
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={event => event.stopPropagation()}
    >
      {cta.label}
    </a>
  );
}

export const PositionCard = ({ position, cta }: PositionCardProps) => {
  return (
    <div css={cardStyles(position.id)} className="position-card">
      <div css={iconWrapperStyles(position.id)}>
        <img src={ICON_SRC[position.id]} alt="" css={iconImageStyles} />
      </div>
      <div css={contentStyles}>
        <h3 css={titleStyles}>{position.title}</h3>
        <PositionCtaButton cta={cta} overrideCss={applyButtonStyles} />
      </div>
    </div>
  );
};

/** 자리표시자 라벨. 오픈 전 상태의 실제 문구라 폭이 가장 가깝다. */
const PLACEHOLDER_LABEL = '모집예정';

const hiddenCss = css`
  visibility: hidden;
`;

/** 360: `203:3055` 등 · 1280~1920: `203:3313` 등 (Glass/Card 이펙트: blur 20 · inner shadow #F5F8FE) */
const cardStyles = (id: PositionId) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  /* 폭은 gridStyles가 정한 줄 나눔을 따른다 — 1280 이상에서는 280px 고정이다. */
  flex: 0 0 calc(50% - 4px);
  height: 200px;
  padding: 16px;
  border-radius: 36px;
  background-image: ${CARD_BACKGROUND[id]};
  /* 시안의 카드 안쪽 림 라이트. 불투명한 전용 색이라 v19 팔레트에 없다 —
     white030(알파 30%)으로 바꾸면 밝기가 달라진다. */
  box-shadow: inset 0 0 20px 0 #f5f8fe;
  cursor: default;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    flex-basis: calc(50% - 6px);
    height: 280px;
    padding: 20px;
    border-radius: 38px;
  }

  @media (min-width: 1280px) {
    flex-basis: 280px;
    height: 340px;
    padding: 24px;
    border-radius: 40px;
  }
`;

/** 아이콘 크기·위치: 360(140px) → 768(-7.7%, 가이드 `203:3276`) → 1280~1920(기본 260px, 우측 고정) */
const iconWrapperStyles = (id: PositionId) => css`
  position: absolute;
  top: 0;
  width: 140px;
  height: 140px;
  pointer-events: none;
  ${id === 'server' ? 'left: 40px;' : 'right: -30px;'}

  @media (min-width: 768px) and (max-width: 1279px) {
    top: 0;
    left: auto;
    right: -50px;
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1280px) {
    top: 0;
    left: auto;
    right: -80px;
    width: 260px;
    height: 260px;
  }
`;

const iconImageStyles = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1279px) {
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 28px;
  }
`;

const titleStyles = css`
  ${theme.typosV4.instrumentSans.sub5};
  margin: 0;
  width: 100%;
  color: ${colors.v19.white100};
  white-space: pre-line;

  @media (min-width: 768px) and (max-width: 1279px) {
    ${theme.typosV4.instrumentSans.sub4};
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.sub3};
  }
`;

const applyButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 24px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.v19.white100};
  color: ${colors.v19.blue900};
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: auto;
    padding: 10px 24px;
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    ${theme.typosV3.pretendard.sub2Bold};
    width: auto;
    padding: 12px 24px;
  }
`;
