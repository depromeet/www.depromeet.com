import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants } from '~/constants/motions';

import { PositionType } from './PosiotionSection';

const POSITION_LABEL = {
  DESIGN: 'UIUX Design',
  AOS: 'AOS',
  IOS: 'iOS',
  FRONTEND: 'Frontend',
  SERVER: 'Server',
} as const;

export function Card({ postionType }: { postionType: PositionType }) {
  const href = `/recurit/${postionType.toLowerCase()}`;

  return (
    <Link href={href}>
      <motion.section css={cardCss} variants={defaultFadeInUpVariants}>
        <h3 css={cardTitleCss}>{POSITION_LABEL[postionType]}</h3>
        <div css={cardLinkCss}>자세히 보기 &gt;</div>
      </motion.section>
    </Link>
  );
}

const cardCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 220px;
  width: 332px;
  background: #1b1a1e;
  border-radius: 16px;

  :hover {
    background: #1b5bff;
  }
`;

const cardTitleCss = css`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`;

const cardLinkCss = css`
  text-align: right;
`;
