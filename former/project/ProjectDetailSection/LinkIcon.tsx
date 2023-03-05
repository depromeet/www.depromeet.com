import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInSlideToLeftVariants } from '~/constants/motions/motions';
import { mediaQuery } from '~/styles/constants';

interface Props {
  src: string;
  alt: string;
  href: string;
}

export default function LinkIcon({ src, alt, href }: Props) {
  return (
    <motion.a
      css={iconCss}
      variants={defaultFadeInSlideToLeftVariants}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image src={src} alt={alt} height="64" width="64" objectFit="cover" />
    </motion.a>
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
