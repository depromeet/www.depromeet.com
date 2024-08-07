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
        xmlns="http://www.w3.org/2000/svg"
        d="M12.396 14.6999C12.596 14.4279 12.856 14.1359 13.176 13.8239C13.496 13.5199 13.816 13.2479 14.136 13.0079L14.688 13.9919C14.336 14.2639 13.984 14.5719 13.632 14.9159C13.288 15.2599 12.96 15.6199 12.648 15.9959C12.344 16.3719 12.076 16.7399 11.844 17.0999C11.612 16.7399 11.34 16.3719 11.028 15.9959C10.724 15.6199 10.396 15.2599 10.044 14.9159C9.7 14.5719 9.352 14.2639 9 13.9919L9.552 13.0079C9.88 13.2479 10.2 13.5199 10.512 13.8239C10.832 14.1359 11.092 14.4279 11.292 14.6999V5.99988H12.396V14.6999Z"
        strokeWidth="0"
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
