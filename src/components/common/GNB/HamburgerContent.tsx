import Link from 'next/link';
import { css } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import { colors } from '~/styles/constants';

import { ANCHORS_HEIGHT } from './constants';

export default function HamburgerContent() {
  return (
    <m.div
      css={wrapperCss}
      variants={contentVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <Link href="/" css={anchorCss}>
        DEPROMEET
      </Link>
      <Link href="/" css={anchorCss}>
        DEPROMEET
      </Link>
      <Link href="/" css={anchorCss}>
        DEPROMEET
      </Link>
      <Link href="/" css={anchorCss}>
        DEPROMEET
      </Link>
    </m.div>
  );
}

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
`;

const contentVariants: Variants = {
  closed: {
    height: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
  open: {
    height: 'auto',
    transition: { duration: 0.3, ease: defaultEasing },
  },
};

const anchorCss = css`
  flex-shrink: 0;
  font-weight: 600;
  font-size: 1.125rem;
  height: ${ANCHORS_HEIGHT}px;
  background: rgba(240, 240, 241, 0.6);
  backdrop-filter: blur(25px);
  padding-left: 20px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.black};
`;
