import { Props, Svg } from '~/components/Icons/Svg';

export function MenuIcon({ color = '#fff', ...props }: Props) {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <mask id="mask0_1209_1514" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1209_1514)">
        <path
          d="M4 24V21.3333H28V24H4ZM4 17.3333V14.6667H28V17.3333H4ZM4 10.6667V8H28V10.6667H4Z"
          fill={color}
        />
      </g>
    </Svg>
  );
}
