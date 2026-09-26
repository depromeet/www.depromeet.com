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

const ICON_SRC: Record<PositionId, string> = {
  design: '/images/19th/recruit/icon-design.svg',
  android: '/images/19th/recruit/icon-android.svg',
  ios: '/images/19th/recruit/icon-ios.svg',
  web: '/images/19th/recruit/icon-web.svg',
  server: '/images/19th/recruit/icon-server.svg',
};

/** 디자인 시스템에 없는 카드 전용 색이라 `colors.v19` 토큰으로 치환할 수 없다. */
const CARD_BACKGROUND: Record<PositionId, string> = {
  design:
    'radial-gradient(ellipse 131% 54% at 50% 57%, #E33789 26.442%, #E465A6 44.832%, #E593C2 63.221%, #E6C0DF 81.611%, #E7EEFB 100%)',
  android: 'linear-gradient(to bottom, #08B18F 32.279%, #04122B 111.03%)',
  ios: 'linear-gradient(to bottom, #FFF1A2 3.971%, #E49800 68.206%, #E7EEFB 111.03%)',
  web: 'linear-gradient(to bottom, #3D8DEF 32.279%, #04122B 86.838%, #E8EEFB 111.03%)',
  server:
    'radial-gradient(ellipse 131% 54% at 50% 57%, #965DF6 26.442%, #AA81F8 44.832%, #BEA5F9 63.221%, #E7EEFB 100%)',
};

function PositionCtaButton({
  cta,
  overrideCss,
}: {
  cta: RecruitCta | null;
  overrideCss: Interpolation<Theme>;
}) {
  if (cta === null) {
    // 빈 버튼은 폭이 0에 가까워 마운트 시 카드 5장이 흔들린다. 라벨을 숨겨 폭만 예약한다.
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

const PLACEHOLDER_LABEL = '모집예정';

const hiddenCss = css`
  visibility: hidden;
`;

const cardStyles = (id: PositionId) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  flex: 0 0 calc(50% - 4px);
  height: 200px;
  padding: 16px;
  border-radius: 36px;
  background-image: ${CARD_BACKGROUND[id]};
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

const iconWrapperStyles = (id: PositionId) => css`
  position: absolute;
  top: 0;
  width: 140px;
  height: 140px;
  pointer-events: none;
  right: ${id === 'server' ? -24 : -30}px;

  @media (min-width: 768px) and (max-width: 1279px) {
    top: 0;
    right: -50px;
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1280px) {
    top: 0;
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
