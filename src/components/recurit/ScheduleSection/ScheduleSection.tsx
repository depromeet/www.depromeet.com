import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInScaleVariants, staggerOne } from '~/constants/motions';
import { defaultFadeInSlideToRightVariants } from '~/constants/motions/motions';
import { colors } from '~/styles/constants';

import { SCHEDULE_LIST } from './constants';
import { ScheduleGraph } from './ScheduleGraph';

export default function ScheduleSection() {
  return (
    <motion.section
      css={sectionCss}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.4, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInScaleVariants}>
        모집 일정
      </motion.h2>
      <motion.div css={blockContainerCss} variants={defaultFadeInSlideToRightVariants}>
        <div css={recuritBlockCss}>맴버 모집 기간</div>
        <div css={activeBlockCss}>정규 활동 기간</div>
      </motion.div>

      <motion.div css={rangeContainerCss} variants={staggerOne}>
        {SCHEDULE_LIST.map((schedule, index) => (
          <ScheduleGraph
            schedule={schedule}
            isLast={index + 1 === SCHEDULE_LIST.length}
            key={`${schedule.title}-${index}`}
          />
        ))}
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

const blockContainerCss = css`
  display: flex;
  justify-content: space-between;

  max-width: 1000px;
  width: 100%;
  height: 42px;
  margin: 50px auto 0;
  padding: 0 30px;
`;

const recuritBlockCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 61.2%;
  height: 100%;

  background: ${colors.primary};
  border-radius: 10px;

  font-weight: 700;
  font-size: 1.25rem;
  line-height: 180%;
  color: ${colors.white};
`;

const activeBlockCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 61.2% - 2.4%);
  height: 100%;

  color: ${colors.white};
  background: ${colors.gray9};
  border-radius: 10px;

  font-weight: 600;
  font-size: 1.25rem;
  line-height: 180%;

  color: ${colors.gray3};
`;

const rangeContainerCss = css`
  display: flex;
  align-items: flex-start;

  max-width: 1000px;
  height: 150px;
  margin: 40px auto 0;
  padding: 0 30px;
`;
