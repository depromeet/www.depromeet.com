import { css } from '@emotion/react';

import { Props, Svg } from './Svg';

export interface ChevronIconProps extends Props {
  direction?: 'up' | 'right' | 'down' | 'left';
}

export function NarrowArrowIcon({
  direction = 'down',
  color = '#FFFFFF',
  css,
  ...props
}: ChevronIconProps) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      css={[css, ArrowIconCss(DIRECTION_DEGREE[direction])]}
      {...props}
    >
      <path
        d="M12.9705 14.8378C13.3221 14.3661 13.7792 13.8597 14.3418 13.3186C14.9044 12.7914 15.4669 12.3197 16.0295 11.9035L17 13.61C16.3812 14.0817 15.7623 14.6159 15.1435 15.2124C14.5387 15.809 13.962 16.4333 13.4135 17.0854C12.879 17.7375 12.4079 18.3757 12 19C11.5921 18.3757 11.1139 17.7375 10.5654 17.0854C10.0309 16.4333 9.45429 15.809 8.83544 15.2124C8.23066 14.6159 7.61885 14.0817 7 13.61L7.97046 11.9035C8.54712 12.3197 9.10971 12.7914 9.65823 13.3186C10.2208 13.8597 10.6779 14.3661 11.0295 14.8378V5H12.9705V14.8378Z"
        fill="black"
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
