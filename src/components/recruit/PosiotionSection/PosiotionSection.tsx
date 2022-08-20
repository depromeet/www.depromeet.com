import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { POSITION_TYPE } from '~/components/recurit-detail/constants';
import { defaultFadeInVariants, staggerOne } from '~/constants/motions';

import { Card } from './Card';

export type PositionType = keyof typeof POSITION_TYPE;

export default function PosiotionSection() {
  return (
    <motion.section
      css={sectionCss}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.4, once: true }}
    >
      <h2 css={headingCss}></h2>
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        모집 직군
      </motion.h2>
      <motion.div css={cardContainerCss} variants={staggerOne}>
        <Card positionType={POSITION_TYPE.DESIGN} />
        <Card positionType={POSITION_TYPE.ANDROID} />
        <Card positionType={POSITION_TYPE.IOS} />
        <Card positionType={POSITION_TYPE.WEB} />
        <Card positionType={POSITION_TYPE.BACKEND} />
      </motion.div>
    </motion.section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 180px;
`;
const headingCss = css`
  font-weight: 700;
  font-size: 2.625rem;
  line-height: 140%;
`;
const cardContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;

  margin-top: 60px;
`;
