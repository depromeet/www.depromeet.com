import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { motion, type TargetAndTransition, useReducedMotion } from 'framer-motion';

import { RECRUIT } from '~/constant/recruit';
import { useRecruitPhase } from '~/hooks/useRecruitPhase';
import { colors } from '~/styles/colors';
import { getRecruitCta } from '~/utils/recruit';

import { type HeroFlightPhase, useHeroObjectEasterEgg } from './useHeroObjectEasterEgg';

const FLOAT_TRANSITION = {
  duration: 7,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
};

/** x·y 는 오브젝트 자기 크기 기준(%)이라, 폭이 360이든 1920이든 늘 화면 밖까지 나간다. */
const FLIGHT_VARIANTS: Record<HeroFlightPhase, TargetAndTransition> = {
  idle: { x: '0%', y: '0%', rotate: 0, transition: { duration: 0 } },
  away: { x: '-160%', y: '-120%', rotate: -40, transition: { duration: 0.75, ease: 'easeIn' } },
  /* 목표값이 배열이면 첫 값으로 소리 없이 건너뛴 뒤 시작한다 — 좌측 상단에서 오른쪽까지 화면을 가로지르지 않게 하는 장치. */
  home: {
    x: ['170%', '0%'],
    y: ['0%', '0%'],
    rotate: [20, 0],
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

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
  const { phase, handleTap, handleFlightComplete } = useHeroObjectEasterEgg({
    disabled: Boolean(shouldReduceMotion),
  });

  return (
    <section css={sectionCss} data-section="hero" data-gnb-theme="dark">
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

        <div css={objectPositionCss}>
          {/*
            떠다니는 움직임(안쪽)과 날아가는 움직임(바깥쪽)이 같은 transform 을 다투지 않게 나눴다.
            숨은 장치라 버튼으로 올리지 않는다 — 키보드·스크린 리더에는 알리지 않는다.
          */}
          <motion.div
            css={objectFlightCss}
            variants={FLIGHT_VARIANTS}
            initial="idle"
            animate={phase}
            onAnimationComplete={handleFlightComplete}
            onClick={handleTap}
            data-easter-egg={phase}
          >
            <motion.div
              css={objectFloatCss}
              initial={shouldReduceMotion ? undefined : { translateY: -10, rotate: -1.5 }}
              animate={shouldReduceMotion ? undefined : { translateY: 10, rotate: 1.5 }}
              transition={shouldReduceMotion ? { duration: 0 } : FLOAT_TRANSITION}
            >
              <Image
                src="/images/19th/home/hero-object.png"
                alt="이정표 3D 오브젝트"
                width={1080}
                height={1080}
                priority
                draggable={false}
                css={objectImageCss}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Breakpoints: 기본(모바일) → 768 → 1280 → 1920 (min-width)

/* 끝색 도달 지점이 폭마다 다르다 — 50 / 70 / 87 / 100 (colors.ts 의 heroStarfield 주석 참고). */
const sectionCss = css`
  position: relative;
  width: 100%;
  /* overflow 를 걸지 않는다 — 오브젝트는 평소에도 이 섹션 밖으로 넘쳐 나온다. */
  background: ${colors.v19.gradient.heroStarfield(50)};

  @media (min-width: 768px) {
    background: ${colors.v19.gradient.heroStarfield(70)};
  }

  @media (min-width: 1280px) {
    background: ${colors.v19.gradient.heroStarfield(87)};
  }

  @media (min-width: 1920px) {
    background: ${colors.v19.gradient.heroStarfield(100)};
  }
`;

const contentCss = css`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  aspect-ratio: 360 / 595;

  @media (min-width: 768px) {
    /* 자식이 전부 absolute 라 내용 높이가 0이다 — aspect-ratio 를 끄고 min-height 로 1000을 세운다 */
    aspect-ratio: auto;
    min-height: 1000px;
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

const logoDeproCss = css`
  position: absolute;
  left: 5.28%;
  top: 52.44%;
  width: 55.28%;
  height: auto;

  @media (min-width: 768px) {
    left: 5.21%;
    top: 65.4%;
    width: 55.84%;
  }

  @media (min-width: 1280px) {
    left: 6.02%;
    top: 66.92%;
    width: 37.27%;
  }

  @media (min-width: 1920px) {
    left: 8.33%;
    top: 62.9%;
    width: 35.26%;
  }
`;

const logoMeetCss = css`
  position: absolute;
  left: 35.28%;
  top: 62.18%;
  width: 57.78%;
  height: auto;

  @media (min-width: 768px) {
    left: 38.2%;
    top: 80.27%;
    width: 52.86%;
  }

  @media (min-width: 1280px) {
    left: 58.33%;
    top: 65.55%;
    width: 37.47%;
  }

  @media (min-width: 1920px) {
    left: 57.71%;
    top: 60.99%;
    width: 35.41%;
  }
`;

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
    top: 4.5%;
    width: 100.26%;
  }

  @media (min-width: 1280px) {
    top: 13.5%;
    width: 75.7%;
  }

  @media (min-width: 1920px) {
    top: 3%;
    width: 59.27%;
  }
`;

const objectFlightCss = css`
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
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
