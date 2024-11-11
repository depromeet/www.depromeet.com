import { memo } from 'react';
import { css } from '@emotion/react';

import * as icons from '../../../public/images/16th/icon';

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  color?: string;
  size?: string | number;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const DEFAULT_ICON_COLOR = '#000000';

export const Icon = memo(function Icon({
  icon,
  color = DEFAULT_ICON_COLOR,
  size,
  onClick,
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
        `}
      />
    </button>
  );
});
