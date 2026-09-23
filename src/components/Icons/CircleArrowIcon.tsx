import { css } from '@emotion/react';

/**
 * 시안에서 export 한 원형 화살표 SVG.
 *
 * 컴포넌트 세트 두 벌이다 — 버튼용은 `반전`(False/True), FAQ 아코디언용은 `상태`(Default/Active).
 * 색이 파일에 구워져 있어 `currentColor`로 갈아끼울 수 없다. 상태마다 파일이 하나씩인 이유다.
 */
const SRC = {
  /** 반전=False · 파란 원 + 흰 화살표 */
  blue: '/images/19th/common/circle-arrow-right-blue.svg',
  /** 반전=True · 흰 원 + 파란 화살표 */
  white: '/images/19th/common/circle-arrow-right-white.svg',
  /** 상태=Default · 회색 원 + 흰 오른쪽 화살표 */
  gray: '/images/19th/common/circle-arrow-right-gray.svg',
  /** 상태=Active · 짙은 원 + 흰 아래쪽 화살표 */
  dark: '/images/19th/common/circle-arrow-down-dark.svg',
} as const;

export type CircleArrowSize = {
  /** ~767px */
  mobile: number;
  /** 768px~ */
  tablet: number;
};

/**
 * 시안 아이콘 **프레임** 크기(px). 768에서 한 번 커지고 1280·1920은 그대로다.
 *
 * export 한 SVG는 viewBox 24에 원 지름이 20이다(사방 2px 여백). 그래서 시안 프레임 값을
 * 그대로 넣으면 원 크기는 저절로 맞는다 — 예전처럼 원 지름(20·26.667)을 적지 않는다.
 * 손으로 그렸을 때 원이 상자를 꽉 채워서 둘을 헷갈렸고, 그게 호출부마다 숫자가 달랐던 원인이다.
 */
export const CIRCLE_ARROW_SIZE: Record<'button' | 'accordion', CircleArrowSize> = {
  /** 프로젝트 전체 보기 · 카카오톡/이메일 문의 · 후원 문의하기 알약 버튼 */
  button: { mobile: 24, tablet: 32 },
  /** 자주 묻는 질문 아코디언 */
  accordion: { mobile: 18, tablet: 24 },
};

/**
 * 알약 버튼 안의 화살표. 버튼이 hover 로 파랗게 차오를 때 아이콘도 반전된다.
 * 반전 규칙은 버튼 쪽에서 {@link circleArrowHoverCss} 를 합성해 건다.
 */
export const CircleArrowRightIcon = ({ size }: { size: CircleArrowSize }) => (
  <span css={[wrapperCss, sizeCss(size)]} aria-hidden="true">
    <img src={SRC.blue} alt="" css={layerCss} data-arrow="default" />
    <img src={SRC.white} alt="" css={[layerCss, transparentCss]} data-arrow="inverted" />
  </span>
);

/**
 * FAQ 아코디언 트리거 아이콘. 펼치면 회색 오른쪽 화살표가 짙은 아래쪽 화살표로 바뀐다.
 *
 * 예전에는 오른쪽 화살표 하나를 CSS 로 90도 돌려 썼는데, 시안은 색까지 함께 바뀌어서
 * 어차피 파일이 두 개다. 돌리지 않고 시안 그대로 두 장을 교차시킨다.
 */
export const CircleArrowToggleIcon = ({
  expanded,
  size,
}: {
  expanded: boolean;
  size: CircleArrowSize;
}) => (
  <span css={[wrapperCss, sizeCss(size)]} aria-hidden="true">
    <img src={SRC.gray} alt="" css={[layerCss, expanded && transparentCss]} />
    <img src={SRC.dark} alt="" css={[layerCss, !expanded && transparentCss]} />
  </span>
);

/** 버튼 hover 에서 화살표를 `반전=True` 로 바꾼다. 버튼 css 에 합성해 쓴다. */
export const circleArrowHoverCss = css`
  &:hover [data-arrow='default'] {
    opacity: 0;
  }

  &:hover [data-arrow='inverted'] {
    opacity: 1;
  }
`;

const wrapperCss = css`
  position: relative;
  display: inline-flex;
  /* 버튼이 flex 라 웹폰트가 늦게 오면 글자가 넓어지며 아이콘을 눌러버린다. 크기를 고정한다. */
  flex-shrink: 0;
`;

const sizeCss = ({ mobile, tablet }: CircleArrowSize) => css`
  width: ${mobile}px;
  height: ${mobile}px;

  @media (min-width: 768px) {
    width: ${tablet}px;
    height: ${tablet}px;
  }
`;

/**
 * 두 상태를 겹쳐 두고 opacity 로 바꾼다.
 * `display: none` 이면 브라우저가 그때 가서 파일을 받느라 hover 첫 순간에 아이콘이 빈다.
 */
const layerCss = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease;
`;

const transparentCss = css`
  opacity: 0;
`;
