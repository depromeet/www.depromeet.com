import Svg, { Props } from './Svg';

export function AsteriskIcon({ color = '#0066FF', ...props }: Props) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      <rect
        x="1"
        y="7.5"
        width="14"
        height="1"
        rx="0.5"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      <rect
        x="4.75098"
        y="4.04297"
        width="10.1903"
        height="1"
        rx="0.5"
        transform="rotate(45 4.75098 4.04297)"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      <rect
        x="11.957"
        y="4.75"
        width="10.1903"
        height="1"
        rx="0.5"
        transform="rotate(135 11.957 4.75)"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      <rect
        x="8.5"
        y="1"
        width="14"
        height="1"
        rx="0.5"
        transform="rotate(90 8.5 1)"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
    </Svg>
  );
}
