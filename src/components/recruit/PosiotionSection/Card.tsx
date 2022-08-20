import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants } from '~/constants/motions';
import { colors } from '~/styles/constants';

import { PositionType } from './PosiotionSection';

const POSITION_LABEL = {
  DESIGN: 'UIUX Design',
  ANDROID: 'Android',
  IOS: 'iOS',
  WEB: 'Web',
  BACKEND: 'Backend',
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
  background: ${colors.gray9};
  border-radius: 16px;

  :hover {
    background: ${colors.primary};
  }
`;

const cardTitleCss = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 120%;
  color: ${colors.white};
`;

const cardLinkCss = css`
  text-align: right;
`;
