import Svg, { Props } from '../common/icons/Svg';

export function BigArrowIcon(props: Props) {
  return (
    <Svg width="52" height="52" viewBox="0 0 52 52" fill="none" {...props}>
      <circle
        cx="26"
        cy="26"
        r="24.5556"
        transform="rotate(90 26 26)"
        stroke="#121212"
        strokeWidth="2.88889"
      />
      <line
        x1="25.9977"
        y1="8.66797"
        x2="25.9977"
        y2="39.0013"
        stroke="#121212"
        strokeWidth="3.37037"
      />
      <path d="M40.4434 26L25.9989 40.4444L11.5545 26" stroke="#121212" strokeWidth="3.37037" />
    </Svg>
  );
}
