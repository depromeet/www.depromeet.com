import { css } from '@emotion/react';

import Svg, { Props } from './Svg';

export interface ChevronIconProps extends Props {
  direction?: 'up' | 'right' | 'down' | 'left';
}

export function ArrowIcon({ direction = 'right', ...props }: ChevronIconProps) {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={ArrowIconCss(DIRECTION_DEGREE[direction])}
      {...props}
    >
      <path
        d="M12.4997 24.0003L11.0664 22.5669L17.6664 15.9669L11.0664 9.36693L12.4997 7.93359L20.5331 15.9669L12.4997 24.0003Z"
        fill="#AFAEB6"
      />
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
