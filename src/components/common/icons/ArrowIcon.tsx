import { css } from '@emotion/react';

import Svg, { Props } from './Svg';

export interface ChevronIconProps extends Props {
  direction?: 'up' | 'right' | 'down' | 'left';
}

export function ArrowIcon({
  direction = 'right',
  color = 'white',
  css,
  ...props
}: ChevronIconProps) {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      css={[css, ArrowIconCss(DIRECTION_DEGREE[direction])]}
      {...props}
    >
      <circle cx="9" cy="9" r="8.5" stroke={color} />
      <line x1="3" y1="9.00065" x2="13.5" y2="9.00065" stroke={color} strokeWidth="1.16667" />
      <path d="M9 4L14 9L9 14" stroke={color} strokeWidth="1.16667" />
    </Svg>
  );
}

const DIRECTION_DEGREE = {
  up: 270,
  right: 0,
  down: 90,
  left: 180,
} as const;

const ArrowIconCss = (degree: number) => css`
  transform: rotate(${degree}deg);
`;
