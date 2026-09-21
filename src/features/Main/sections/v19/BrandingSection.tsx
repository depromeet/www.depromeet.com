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

        <svg
          css={connectorCss}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          {BREAKPOINT_ORDER.map(bp => (
            <polygon key={bp} css={[triangleCss, ONLY_AT[bp]]} points={trianglePoints(bp)} />
          ))}
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
  aspect-ratio: 360 / 592;

  @media (min-width: 768px) {
    aspect-ratio: 1920 / 1000;
  }
`;

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

const BREAKPOINT_ORDER = ['mobile', 'tablet', 'desktop', 'wide'] as const;

const POINT_POSITION: Record<Breakpoint, Record<ConstellationPoint['id'], [number, number]>> = {
  mobile: { focus: [8.889, 61.149], challenge: [74.167, 23.649], fellowship: [76.944, 71.622] },
  tablet: { focus: [13.802, 55.0], challenge: [72.786, 16.0], fellowship: [82.422, 82.5] },
  desktop: { focus: [13.75, 54.354], challenge: [71.25, 15.616], fellowship: [80.938, 80.48] },
  wide: { focus: [11.979, 54.1], challenge: [69.115, 15.4], fellowship: [79.01, 81.0] },
};

/** 각 폭에서만 보이게 하는 규칙. 점 좌표가 넷이면 잇는 선도 넷이어야 한다. */
const ONLY_AT: Record<Breakpoint, ReturnType<typeof css>> = {
  mobile: css`
    @media (min-width: 768px) {
      display: none;
    }
  `,
  tablet: css`
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    @media (min-width: 1280px) {
      display: none;
    }
  `,
  desktop: css`
    display: none;
    @media (min-width: 1280px) {
      display: block;
    }
    @media (min-width: 1920px) {
      display: none;
    }
  `,
  wide: css`
    display: none;
    @media (min-width: 1920px) {
      display: block;
    }
  `,
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
  gap: 6px;

  @media (min-width: 768px) {
    left: ${POINT_POSITION.tablet[id][0]}%;
    top: ${POINT_POSITION.tablet[id][1]}%;
  }

  @media (min-width: 1280px) {
    left: ${POINT_POSITION.desktop[id][0]}%;
    top: ${POINT_POSITION.desktop[id][1]}%;
    /* 점이 12로 커지므로 당기는 양도 절반인 6으로 */
    margin: -6px 0 0 -6px;
    gap: 8px;
  }

  @media (min-width: 1920px) {
    left: ${POINT_POSITION.wide[id][0]}%;
    top: ${POINT_POSITION.wide[id][1]}%;
    margin: -8px 0 0 -8px;
  }
`;

const pointDotCss = css`
  width: 8px;
  height: 8px;
  background: ${colors.v19.blue100};
  flex-shrink: 0;

  @media (min-width: 1280px) {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 1920px) {
    width: 16px;
    height: 16px;
  }
`;

const pointLabelCss = css`
  ${theme.typosV4.spaceMono.sloganMobile};
  color: ${colors.v19.blue100};
  white-space: nowrap;

  @media (min-width: 1280px) {
    ${theme.typosV4.spaceMono.sloganTablet};
  }

  @media (min-width: 1920px) {
    ${theme.typosV4.spaceMono.sloganPc};
  }
`;

const headlineCss = css`
  position: absolute;
  left: 50%;
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

const titleCss = css`
  ${theme.typosV4.spaceGrotesk.display2};
  margin: 0;
  white-space: nowrap;
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
  ${theme.typosV4.pretendard.sub4M};
  margin: 0;
  white-space: nowrap;
  color: ${colors.v19.coolGray200};
  opacity: 0.6;

  @media (min-width: 1280px) {
    ${theme.typosV4.pretendard.sub1M};
  }

  @media (min-width: 1920px) {
    ${theme.typosV4.pretendard.head0};
  }
`;

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
  width: 16px;
  height: auto;
  transform: ${CORNER_TRANSFORM[corner]};
  z-index: 1;

  @media (min-width: 768px) {
    ${edgeInset(corner, 40, 48)}
  }

  @media (min-width: 1280px) {
    ${edgeInset(corner, 40, 68)}
    width: 28px;
  }

  @media (min-width: 1920px) {
    ${edgeInset(corner, 40, 100)}
    width: 43.85px;
  }
`;
