import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInScaleVariants, staggerOne } from '~/constants/motions';
import { defaultFadeInSlideToRightVariants } from '~/constants/motions/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

import { SCHEDULE_LIST } from './constants';
import { ScheduleGraph } from './ScheduleGraph';

export default function ScheduleSection() {
  const isMobile = useMediaQuery('xs');

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
      {/* TODO: 코드 정리 필요 */}
      {isMobile && (
        <>
          <motion.div css={blockContainerCss} variants={defaultFadeInSlideToRightVariants}>
            <div css={recruitBlockCss}>맴버 모집 기간</div>
          </motion.div>

          <motion.div css={rangeContainerCss} variants={staggerOne}>
            {SCHEDULE_LIST.slice(0, 3).map((schedule, index) => (
              <ScheduleGraph
                schedule={schedule}
                isLast={index + 1 === 3}
                key={`${schedule.title}-${index}`}
              />
            ))}
          </motion.div>

          <motion.div css={blockContainerCss} variants={defaultFadeInSlideToRightVariants}>
            <div css={recruitBlockCss}></div>
            <div css={activeBlockCss}>정규 활동 기간</div>
          </motion.div>

          <motion.div css={rangeContainerCss} variants={staggerOne}>
            {SCHEDULE_LIST.slice(3, 6).map((schedule, index) => (
              <ScheduleGraph
                schedule={schedule}
                isLast={index + 1 === 3}
                key={`${schedule.title}-${index}`}
              />
            ))}
          </motion.div>
        </>
      )}

      {!isMobile && (
        <>
          <motion.div css={blockContainerCss} variants={defaultFadeInSlideToRightVariants}>
            <div css={recruitBlockCss}>맴버 모집 기간</div>
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
        </>
      )}
    </motion.section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 180px;

  ${mediaQuery('xs')} {
    margin-bottom: 130px;
  }
`;

const headingCss = css`
  font-weight: 700;
  font-size: 2.625rem;
  line-height: 140%;

  margin-bottom: 50px;

  ${mediaQuery('xs')} {
    font-size: 1.714rem;
    line-height: 150%;

    margin-bottom: 30px;
  }
`;

const blockContainerCss = css`
  display: flex;
  justify-content: space-between;

  max-width: 1000px;
  width: 100%;
  height: 42px;
  margin: 0 auto;
  padding: 0 30px;

  ${mediaQuery('xs')} {
    padding: 0 10px;
  }
`;

const recruitBlockCss = css`
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

  ${mediaQuery('xs')} {
    flex: 1;
    font-size: 0.857rem;
  }
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
  ${mediaQuery('xs')} {
    flex-basis: 66%;

    margin-left: 12px;
    font-size: 0.857rem;
  }
`;

const rangeContainerCss = css`
  display: flex;
  align-items: flex-start;

  max-width: 1000px;
  height: 150px;
  margin: 40px auto 0;
  padding: 0 30px;

  ${mediaQuery('xs')} {
    width: 100%;
    height: 75px;
    margin: 20px auto 30px;
    padding: 0 30px;
    letter-spacing: -0.5px;
  }
`;
