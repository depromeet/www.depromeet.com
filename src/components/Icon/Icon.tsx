import { memo } from 'react';
import { css } from '@emotion/react';

import * as icons from '../../../public/images/16th/icon';

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  color?: string;
  size?: string | number;
  onClick?: () => void;
  direction?: 'up' | 'right' | 'down' | 'left';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const DEFAULT_ICON_COLOR = '#000000';

const DIRECTION_DEGREE = {
  up: 180,
  right: 270,
  down: 0,
  left: 90,
} as const;

export const Icon = memo(function Icon({
  icon,
  color = DEFAULT_ICON_COLOR,
  size,
  onClick,
  direction = 'down',
  ...props
}: Props) {
  const SVGIcon = icons[icon];
  const width = typeof size === 'number' ? `${size}px` : size;

  return (
    <button
      onClick={onClick}
      css={css`
        background: none;
        border: none;
        padding: 0;
        cursor: ${onClick ? 'pointer' : 'default'};
        display: inline-flex;

        &:focus {
          outline: none;
        }
      `}
      {...props}
    >
      <SVGIcon
        css={css`
          color: ${color};
          width: ${width};
          max-height: fit-content;
          transform: rotate(${DIRECTION_DEGREE[direction]}deg);
        `}
      />
    </button>
  );
});
