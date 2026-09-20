import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

type ConstellationPoint = {
  id: 'focus' | 'challenge' | 'fellowship';
  label: string;
};

const CONSTELLATION_POINTS: ConstellationPoint[] = [
  { id: 'focus', label: 'Focus' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'fellowship', label: 'Fellowship' },
];

const CORNERS = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] as const;

/**
 * Orbit Beyond Boundaries — 18기 "Connect the ring"을 대체하는 19기 브랜딩 섹션.
 * Figma `203:1276` 하단 1000px(Branding, `203:1308`).
 *
 * 3D 오브젝트(HeroSection 소유)가 이 섹션 상단까지 걸쳐 그려지므로, 이 섹션은
 * overflow를 제한하지 않고 자체 장식 요소의 z-index를 낮게(0~1) 유지한다.
 */
export const BrandingSection = () => {
  return (
    <section css={sectionCss} data-section="branding" data-gnb-theme="dark">
      <div css={contentCss}>
        {CORNERS.map(corner => (
          <Image
            key={corner}
            src="/images/19th/home/branding-corner-bracket.svg"
            alt=""
            aria-hidden="true"
            width={45}
            height={47}
            css={cornerBracketCss(corner)}
          />
        ))}

        {/*
         * 잇는 선은 고정 SVG가 아니라 **점 좌표에서 그린다**. 시안은 1920과 360의 점
         * 배치가 달라 삼각형 모양도 다른데, 한 장짜리 에셋을 비율만 바꿔 놓으니 360에서
         * 선이 점을 전혀 지나가지 않았다. 좌표가 하나뿐이면 어긋날 수가 없다.
         *
         * 점 크기(8~16px)의 절반만큼 선이 점 중심이 아니라 왼쪽 위 모서리에 닿지만,
         * 점이 작아 눈에 띄지 않는다.
         */}
        <svg
          css={connectorCss}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <polygon css={[triangleCss, mobileOnlyCss]} points={trianglePoints('mobile')} />
          <polygon css={[triangleCss, desktopOnlyCss]} points={trianglePoints('desktop')} />
        </svg>

        {CONSTELLATION_POINTS.map(point => (
          <div key={point.id} css={pointCss(point.id)}>
            <span css={pointDotCss} />
            <span css={pointLabelCss}>{point.label}</span>
          </div>
        ))}

        <div css={headlineCss}>
          <h2 css={titleCss}>
            Orbit Beyond
            <br />
            Boundaries
          </h2>
          <p css={subtitleCss}>경계 밖의 새로운 궤도로</p>
        </div>
      </div>
    </section>
  );
};

// Breakpoints: 기본(모바일) → 768 → 1280 → 1920 (min-width)

const sectionCss = css`
  position: relative;
  width: 100%;
  background: ${colors.v19.blue900};
`;

const contentCss = css`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  aspect-ratio: 360 / 620;

  @media (min-width: 768px) {
    aspect-ratio: 1920 / 1000;
  }
`;

/**
 * 별자리 점의 **중심** 좌표(섹션 대비 %). 시안이 1920(`203:1308`)과 360(`203:1928`)에서
 * 아예 다른 배치를 쓰기 때문에 둘을 따로 적는다 — 데스크탑 좌표를 비율로 줄여 쓰면
 * 360에서 점이 헤드라인을 덮거나 화면 밖으로 나간다.
 *
 * 실측(시안 픽셀):
 *   1920(1920x1000) Focus 222~237 x 533~548 · Challenge 1319~1334 x 146~161 ·
 *                   Fellowship 1509~1524 x 802~817  (모두 16px 정사각형)
 *    360(360x592)   Focus 28~35 x 358~365 · Challenge 263~270 x 136~143 ·
 *                   Fellowship 273~280 x 420~427   (모두 8px)
 *
 * 모서리가 아니라 **중심**을 적는 이유: 잇는 선이 같은 좌표를 쓰기 때문이다. 모서리를
 * 적으면 선이 점의 왼쪽 위 귀퉁이에 닿아 반 칸씩 어긋나 보인다.
 */
type Breakpoint = 'mobile' | 'desktop';

const POINT_POSITION: Record<Breakpoint, Record<ConstellationPoint['id'], [number, number]>> = {
  mobile: { focus: [8.75, 61.06], challenge: [74.03, 23.56], fellowship: [76.81, 71.54] },
  desktop: { focus: [11.98, 54.1], challenge: [69.11, 15.4], fellowship: [79.01, 81.0] },
};

/** `viewBox="0 0 100 100"`이라 좌표 %가 곧 SVG 단위다. */
const trianglePoints = (breakpoint: Breakpoint) =>
  CONSTELLATION_POINTS.map(({ id }) => POINT_POSITION[breakpoint][id].join(',')).join(' ');

const connectorCss = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`;

/** Figma `203:1310`: 흰 점선 삼각형, 굵기 2 · 대시 4/9. */
const triangleCss = css`
  fill: none;
  stroke: ${colors.v19.white100};
  stroke-width: 2;
  stroke-dasharray: 4 9;
  stroke-linecap: round;
  stroke-linejoin: round;
  /* viewBox가 비균일 축척이라 이걸 빼면 선 굵기와 점선 간격이 가로로 늘어난다. */
  vector-effect: non-scaling-stroke;
`;

const mobileOnlyCss = css`
  @media (min-width: 768px) {
    display: none;
  }
`;

const desktopOnlyCss = css`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

/* 좌표가 점의 중심이므로, 점 크기의 절반만큼 당겨 상자의 왼쪽 위를 맞춘다. */
const pointCss = (id: ConstellationPoint['id']) => css`
  position: absolute;
  left: ${POINT_POSITION.mobile[id][0]}%;
  top: ${POINT_POSITION.mobile[id][1]}%;
  margin: -4px 0 0 -4px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: 768px) {
    left: ${POINT_POSITION.desktop[id][0]}%;
    top: ${POINT_POSITION.desktop[id][1]}%;
    margin: -6px 0 0 -6px;
    gap: 8px;
  }

  @media (min-width: 1920px) {
    margin: -8px 0 0 -8px;
  }
`;

const pointDotCss = css`
  width: 8px;
  height: 8px;
  background: ${colors.v19.blue100};
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 1920px) {
    width: 16px;
    height: 16px;
  }
`;

// 영문/Space Mono (slogan) — theme.typosV4.spaceMono
const pointLabelCss = css`
  ${theme.typosV4.spaceMono.sloganMobile};
  color: ${colors.v19.blue100};
  white-space: nowrap;

  @media (min-width: 768px) {
    ${theme.typosV4.spaceMono.sloganTablet};
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.spaceMono.sloganPc};
  }
`;

/**
 * Figma `203:1311` — 1920 기준 488 x 292, 프레임 중심이 x=960이라 섹션 한가운데에 놓인다.
 *
 * 폭을 시안 비율(25.42%)로 고정하면 안 된다. 글자 크기는 브레이크포인트마다 따로 정하는데
 * 상자만 비율로 줄어들어, 1280·768에서 "Orbit Beyond"가 상자를 넘겨 제멋대로 한 번 더
 * 접혔다(시안은 "Orbit Beyond / Boundaries" 두 줄). 글자가 상자를 정하게 둔다.
 */
const headlineCss = css`
  position: absolute;
  left: 50%;
  /* 360 시안 203:1928 — 헤드라인 덩어리가 y 236, 섹션 높이 592의 39.9%. */
  top: 39.9%;
  transform: translateX(-50%);
  width: max-content;
  max-width: 84%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media (min-width: 768px) {
    top: 38.5%;
    gap: 24px;
  }

  @media (min-width: 1280px) {
    gap: 40px;
  }

  @media (min-width: 1920px) {
    gap: 60px;
  }
`;

/**
 * 줄바꿈은 마크업의 `<br />` 하나뿐이다 — `nowrap`이어도 `<br />`는 그대로 줄을 바꾼다.
 *
 * 크기는 시안 실측이다. 두 줄의 간격(= font-size x 1.1)을 재면 1920에서 88px,
 * 768에서 41px이라 각각 80px · 37px이 된다. 1280은 그 사이를 섹션 비율로 잡아 53px.
 * 앞서 60/44로 두었을 때는 글자만 커서, 비율대로 그려진 별자리 점선이
 * 부제 "경계 밖" 위를 지나갔다.
 */
const titleCss = css`
  ${theme.typosV4.spaceGrotesk.display2};
  margin: 0;
  white-space: nowrap;
  /* 360 시안: "Orbit Beyond"가 217px — Space Grotesk 기준 36px에 해당한다. */
  font-size: 36px;
  background: ${colors.v19.gradient.whiteBlue};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 37px;
  }

  @media (min-width: 1280px) {
    font-size: 53px;
  }

  @media (min-width: 1920px) {
    font-size: 80px;
  }
`;

const subtitleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.v19.coolGray200};
  opacity: 0.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 27px;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`;

// Figma `203:1323`/`203:1326`/`203:1329`/`203:1332` — 동일한 base 에셋(`203:1329` 원본)을
// corner별로 다른 조합(scaleY / rotate)으로 재사용한다.
const CORNER_TRANSFORM: Record<(typeof CORNERS)[number], string> = {
  topLeft: 'none',
  topRight: 'scaleY(-1) rotate(180deg)',
  bottomRight: 'rotate(180deg)',
  bottomLeft: 'scaleY(-1)',
};

const CORNER_EDGE_PROPS: Record<(typeof CORNERS)[number], [string, string]> = {
  topLeft: ['left', 'top'],
  topRight: ['right', 'top'],
  bottomRight: ['right', 'bottom'],
  bottomLeft: ['left', 'bottom'],
};

/**
 * 가로·세로 여백이 다르다. 시안에서 브래킷은 좌우 가장자리에는 바짝(1920에서 40px,
 * 360에서 20px) 붙지만 위아래로는 훨씬 안쪽(100px / 79px)에 놓인다.
 */
const edgeInset = (corner: (typeof CORNERS)[number], insetX: number, insetY: number) => {
  const [x, y] = CORNER_EDGE_PROPS[corner];
  return css`
    ${x}: ${insetX}px;
    ${y}: ${insetY}px;
  `;
};

const cornerBracketCss = (corner: (typeof CORNERS)[number]) => css`
  position: absolute;
  ${edgeInset(corner, 20, 79)}
  width: 24px;
  height: auto;
  transform: ${CORNER_TRANSFORM[corner]};
  z-index: 1;

  @media (min-width: 768px) {
    ${edgeInset(corner, 24, 85)}
    width: 32px;
  }

  @media (min-width: 1280px) {
    ${edgeInset(corner, 32, 92)}
    width: 40px;
  }

  @media (min-width: 1920px) {
    ${edgeInset(corner, 40, 100)}
    width: 45px;
  }
`;
