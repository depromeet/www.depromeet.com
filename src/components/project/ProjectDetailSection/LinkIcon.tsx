import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

interface Props {
  src: string;
  alt: string;
}

export default function LinkIcon({ src, alt }: Props) {
  return (
    <div css={iconCss}>
      <button>
        <Image src={src} alt={alt} height="64" width="64" objectFit="cover" />
      </button>
    </div>
  );
}

const iconCss = css`
  position: relative;
  width: 64px;
  height: 64px;

  ${mediaQuery('xs')} {
    width: 40px;
    height: 40px;
  }
`;
