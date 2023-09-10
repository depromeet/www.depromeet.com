import { css } from '@emotion/react';

import { Props, Svg } from './Svg';

export interface ChevronIconProps extends Props {
  direction?: 'up' | 'right' | 'down' | 'left';
}

export function ArrowIcon({
  direction = 'down',
  color = '#070814',
  css,
  ...props
}: ChevronIconProps) {
  return (
    <Svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      css={[css, ArrowIconCss(DIRECTION_DEGREE[direction])]}
      {...props}
    >
      <path
        d="M25.1936 12.3221L25.1936 33.9995"
        stroke={color}
        strokeWidth="3.09677"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M37.1936 24.3871L25.1936 36.3871L13.1936 24.3871"
        stroke={color}
        strokeWidth="3.09677"
        strokeLinecap="square"
      />
    </Svg>
  );
}

const DIRECTION_DEGREE = {
  up: 180,
  right: 270,
  down: 0,
  left: 90,
} as const;

const ArrowIconCss = (degree: number) => css`
  transform: rotate(${degree}deg);
`;
