import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { motion, useReducedMotion } from 'framer-motion';

import { RECRUIT } from '~/constant/recruit';
import { useRecruitPhase } from '~/hooks/useRecruitPhase';
import { colors } from '~/styles/colors';
import { getRecruitCta } from '~/utils/recruit';

/**
 * 히어로 3D 오브젝트(이정표) 부유 애니메이션.
 * 확정값(docs/19th/designer-requests.md Q-M1 · migration-plan.md §15.4):
 * 정지 이미지 + translateY(±10px) rotate(±1.5deg), 6~8초 ease-in-out 무한 왕복.
 * `prefers-reduced-motion: reduce`면 모션을 완전히 멈춘다(useReducedMotion → 애니메이션 미적용).
 */
const FLOAT_TRANSITION = {
  duration: 7,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
};

/**
 * 360 시안 `203:1895`: 로고타입 아래 흰 알약(182 x 60). 768 미만에서는 GNB가 햄버거뿐이라
 * **화면에 보이는 유일한 지원 CTA**다(768 이상 시안에는 없다 — 그쪽은 GNB가 갖고 있다).
 *
 * 라벨·동작은 GNB·모바일 메뉴와 같은 `getRecruitCta`에서 온다. 알약 폭을 고정하지 않고
 * `min-width`로 둔 것은, 시안의 "지원하기"보다 긴 "모집알림받기" 상태에서 글자가 잘리지
 * 않게 하기 위해서다(시안과 같은 "19기 지원하기"일 때는 정확히 182px이 된다).
 */
function HeroApplyButton() {
  const phase = useRecruitPhase();

  // 마운트 전에는 시각에 따라 달라지는 라벨을 확정할 수 없다(계획 §0.6).
  if (phase === null) {
    return (
      <span css={[ctaCss, ctaPlaceholderCss]} aria-hidden>
        {getRecruitCta('BEFORE').label}
      </span>
    );
  }

  const cta = getRecruitCta(phase);

  if (cta.kind === 'disabled') {
    return (
      <button type="button" css={ctaCss} disabled>
        {cta.label}
      </button>
    );
  }

  return cta.external ? (
    <a css={ctaCss} href={cta.href} target="_blank" rel="noopener noreferrer">
      {cta.label}
    </a>
  ) : (
    <Link css={ctaCss} href={cta.href}>
      {cta.label}
    </Link>
  );
}

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section css={sectionCss} data-section="hero" data-gnb-theme="dark">
      {/*
       * 별 배경만 **섹션 전체(뷰포트 폭)** 를 덮는다. 로고·오브젝트는 시안 좌표를 쓰므로
       * 1920에 묶여 있지만, 배경까지 1920에서 끊으면 그보다 넓은 화면에서 양옆이 잘린 듯
       * 보인다(`contentCss`의 max-width는 콘텐츠 전용이다).
       *
       * 바탕은 가로로 완전히 균일한 세로 그라데이션이라 CSS로 옮겼다 — 어떤 폭에서도
       * 정확하고 늘어나지 않는다. 이미지에는 **별만** 남아 있어 `cover`로 확대·크롭돼도
       * 어색할 구도가 없다. (분리 방법: `node scripts/build-hero-starfield.mjs`)
       */}
      <div css={starLayerCss}>
        <Image
          src="/images/19th/home/hero-stars.png"
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div css={contentCss}>
        {/* Figma `203:1293`(depro) · `203:1279`(Meet + 19th) — 벡터 조각을 원본 좌표 그대로 합성한 에셋 */}
        <div css={logoLayerCss}>
          <Image
            src="/images/19th/home/hero-logo-depro.svg"
            alt=""
            aria-hidden="true"
            width={677}
            height={291}
            css={logoDeproCss}
          />
          <Image
            src="/images/19th/home/hero-logo-meet.svg"
            alt={`DeproMeet ${RECRUIT.generation}th`}
            width={680}
            height={268}
            css={logoMeetCss}
          />
        </div>

        <div css={ctaLayerCss}>
          <HeroApplyButton />
        </div>

        {/*
         * 오브젝트는 Figma에서 Hero(1000px)와 Branding(다음 1000px) 두 섹션에 걸쳐 절대 배치된다
         * (203:1335, top: calc(50% - 400.5px) of the combined 2000px frame → Hero 기준 top 3%,
         * height 113.9%로 하단 16.9%가 다음 섹션까지 흘러넘침). 이 섹션·`contentCss` 모두
         * overflow를 제한하지 않고, z-index를 BrandingSection의 장식 요소보다 높게 두어
         * 섹션 경계에서 잘리지 않고 다음 섹션 위에 그대로 그려지도록 한다.
         */}
        <div css={objectPositionCss}>
          <motion.div
            css={objectFloatCss}
            initial={shouldReduceMotion ? undefined : { translateY: -10, rotate: -1.5 }}
            animate={shouldReduceMotion ? undefined : { translateY: 10, rotate: 1.5 }}
            transition={shouldReduceMotion ? { duration: 0 } : FLOAT_TRANSITION}
          >
            {/*
             * ⚠ 이 에셋은 Figma **노드 export가 아니라 원본 소스 이미지**다.
             * `203:1335`를 프레임으로 export하면 배경까지 함께 렌더돼 알파가 255인
             * 불투명 사각형이 나오고, 별 배경 위에 네모난 띠가 얹힌다.
             * 계획 §15.4가 요구하는 "투명 배경 이미지"는 원본 쪽이다.
             */}
            <Image
              src="/images/19th/home/hero-object.png"
              alt="이정표 3D 오브젝트"
              width={1080}
              height={1080}
              priority
              css={objectImageCss}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Breakpoints: 기본(모바일) → 768 → 1280 → 1920 (min-width)

const sectionCss = css`
  position: relative;
  width: 100%;
  background: ${colors.v19.gradient.heroStarfield};
`;

const contentCss = css`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  aspect-ratio: 360 / 595;

  @media (min-width: 768px) {
    aspect-ratio: 1920 / 1000;
  }
`;

const starLayerCss = css`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const logoLayerCss = css`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

/*
 * 모바일 값은 360 시안 `203:1895`(360 x 595)에서 잰 것이다.
 * depro  x 19..218  y 312..397  ·  Meet+19th  x 127..335  y 370..452
 *
 * 데스크탑은 두 덩어리가 좌우로 나뉘지만 360에서는 **위아래로 겹쳐 쓴다**. 앞서 쓰던
 * 68% / 80% 는 시안보다 훨씬 커서 "depro"가 "Meet" 위로 올라타고 "19th"를 덮었다.
 */
// depro (Figma `203:1293`, 677 x 291)
const logoDeproCss = css`
  position: absolute;
  left: 5.28%;
  top: 52.44%;
  width: 55.28%;
  height: auto;

  @media (min-width: 768px) {
    left: 8.33%;
    top: 62.9%;
    width: 35.26%;
  }
`;

// Meet + 19th (Figma `203:1279`, 679.912 x 267.457)
const logoMeetCss = css`
  position: absolute;
  left: 35.28%;
  top: 62.18%;
  width: 57.78%;
  height: auto;

  @media (min-width: 768px) {
    left: 57.71%;
    top: 60.99%;
    width: 35.41%;
  }
`;

/* 시안에서 알약 위쪽 모서리가 히어로 높이(595)의 80.5% 지점에 온다. */
const ctaLayerCss = css`
  position: absolute;
  left: 50%;
  top: 80.5%;
  transform: translateX(-50%);
  /* 오브젝트(z 5)가 이 위를 지나가므로 그보다 위에 둔다 — 누를 수 있어야 한다. */
  z-index: 6;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ctaCss = css`
  display: flex;
  min-width: 182px;
  height: 60px;
  padding: 0 41px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: ${colors.v19.white100};
  color: ${colors.v19.blue900};
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  text-decoration: none;

  &:disabled {
    background: ${colors.v19.coolGray200};
    color: ${colors.v19.coolGray400};
  }
`;

const ctaPlaceholderCss = css`
  visibility: hidden;
`;

const objectPositionCss = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3.55%;
  width: 100%;
  z-index: 5;

  @media (min-width: 768px) {
    top: 3%;
    width: 59.27%;
  }
`;

const objectFloatCss = css`
  width: 100%;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

const objectImageCss = css`
  width: 100%;
  height: auto;
  display: block;
`;
