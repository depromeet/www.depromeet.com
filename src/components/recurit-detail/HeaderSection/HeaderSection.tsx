import { css } from '@emotion/react';

import { PositionType, POSTION_DISPLAY_NAME } from '../constants';

export default function HeaderSection({ positionType }: { positionType: PositionType }) {
  const positionName = POSTION_DISPLAY_NAME[positionType];

  return (
    <header css={headerCss}>
      <div css={backgroundCss(positionName)}></div>
      <h1 css={headingCss}>{positionName}</h1>
    </header>
  );
}

const headerCss = css`
  height: calc(100vw * (400 / 1440));
  margin-bottom: 80px;
`;

const backgroundCss = (position: string) => css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 100vw;
  height: calc(100vw * (400 / 1440));

  background-size: cover;
  background-image: ${`url(/images/position/banner-${position}.jpg)`};
`;

const headingCss = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
