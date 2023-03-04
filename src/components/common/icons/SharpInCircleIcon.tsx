import Svg, { Props } from './Svg';

export function SharpInCircleIcon({ color = '#0066FF', ...props }: Props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M14 6.705V5.105H12.895V4H11.295V5.105H6.705V4H5.105V5.105H4V6.705H5.105V11.295H4V12.895H5.105V14H6.705V12.895H11.295V14H12.895V12.895H14V11.295H12.895V6.705H14ZM11.295 11.295H6.705V6.705H11.295V11.295Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.7C13.2526 16.7 16.7 13.2526 16.7 9C16.7 4.74741 13.2526 1.3 9 1.3C4.74741 1.3 1.3 4.74741 1.3 9C1.3 13.2526 4.74741 16.7 9 16.7ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
        fill={color}
      />
    </Svg>
  );
}
