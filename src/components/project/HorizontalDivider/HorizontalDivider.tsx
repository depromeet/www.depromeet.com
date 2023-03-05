import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

export function HorizontalDivider() {
  return (
    <div css={wrapperCss}>
      <div css={imgWrapperCss}>
        <Image src={'/project/downward_arrow.webp'} fill alt="" />
      </div>
    </div>
  );
}

const wrapperCss = css`
  text-align: center;
  width: 1200px;
  margin: auto;

  ${mediaQuery('xs')} {
    width: 375px;
  }
`;

const imgWrapperCss = css`
  position: relative;
  width: 52px;
  height: 52px;
  margin: auto;
  ${mediaQuery('xs')} {
    width: 36px;
    height: 36px;
  }
`;
