import Image from 'next/image';
import { css } from '@emotion/react';

import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function SignImageSection() {
  return (
    <section css={[commonLayoutCss, layoutCss]}>
      <Image src="/images/sign/main.png" fill alt="DPM 14th" />
    </section>
  );
}

const layoutCss = css`
  position: relative;
  width: 100%;
  height: 356px;
  img {
    width: 100%;
    object-fit: contain;
  }

  ${mediaQuery('tablet')} {
    height: 262px;
  }
  ${mediaQuery('mobile')} {
    height: 122px;
  }
`;
