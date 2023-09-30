import Image from 'next/image';
import { css } from '@emotion/react';

import { commonLayoutCss } from '~/styles/layout';
import { autoImageRatio } from '~/styles/style.utils';

export function SignImageSection() {
  return (
    <section css={[commonLayoutCss, layoutCss]}>
      <div css={imageCss}>
        <Image src="/images/sign/main.png" fill quality={100} alt="DPM 14th" />
      </div>
    </section>
  );
}

const layoutCss = css`
  width: 100%;
  height: 100%;
`;

const imageCss = css`
  ${autoImageRatio(959, 356)};
`;
