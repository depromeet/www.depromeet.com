import { memo } from 'react';
import { css } from '@emotion/react';

import * as icons from '~/assets/16th/icon';

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  color?: string;
  size?: string | number;
  onClick?: () => void;
} & React.SVGProps<SVGSVGElement>;

const DEFAULT_ICON_COLOR = '#000000';

export const Icon = memo(function Icon({
  icon,
  color = DEFAULT_ICON_COLOR,
  size,
  onClick,
  ...props
}: Props) {
  const SVGIcon = icons[icon];
  const widthRem = typeof size === 'number' ? `${size}px` : size;

  return (
    <SVGIcon
      onClick={onClick}
      css={css`
        color: ${color};
        cursor: ${onClick ? 'pointer' : 'inherit'};
        width: ${widthRem};
        height: auto;
      `}
      {...props}
    />
  );
});
