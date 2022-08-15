import { colors } from '~/styles/constants';

import Svg from './Svg';

export function ScrollBottomIcon() {
  return (
    <Svg width={61} height={40} viewBox={'0 0 61 40'} fill={colors.white}>
      <path
        d="M8 10L30.5 30L53 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
