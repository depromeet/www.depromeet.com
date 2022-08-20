import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInSlideToRightVariants } from '~/constants/motions/motions';
import { colors, mediaQuery } from '~/styles/constants';

import { RecuirtScheduleInterface } from './constants';

interface ScheduleGraphProps {
  schedule: RecuirtScheduleInterface;
  isLast: boolean;
}

export function ScheduleGraph({ schedule, isLast }: ScheduleGraphProps) {
  return (
    <motion.div css={rangeCss} variants={defaultFadeInSlideToRightVariants}>
      <div css={circleCss(schedule.isRecurit)}>
        <div css={eventCss}>
          <span css={dateCss}>{`${schedule.month}.${schedule.date}`}</span>
          <span css={titleCss}>{schedule.title}</span>
        </div>
      </div>
      {!isLast && <div css={lineCss}></div>}
    </motion.div>
  );
}

const rangeCss = css`
  display: flex;
  align-items: center;

  width: calc(20% - 20px / 5);

  :last-child {
    width: 20px;
  }

  ${mediaQuery('xs')} {
    width: calc(50% - 10px / 2);

    :last-child {
      width: 10px;
    }
  }
`;
const circleCss = (isRecurit: boolean) => css`
  position: relative;

  flex-basis: 20px;

  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;

  background-color: ${isRecurit ? colors.primary : colors.white};

  :last-child {
    margin-right: 0;
  }

  ${mediaQuery('xs')} {
    flex-basis: 10px;

    width: 10px;
    height: 10px;
  }
`;
const lineCss = css`
  flex: auto;

  margin-right: 10px;

  border: 1px solid ${colors.gray4};
`;

const eventCss = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 45px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: max-content;

  ${mediaQuery('xs')} {
    font-size: 1.143rem;
    line-height: 150%;
  }

  ${mediaQuery('xs')} {
    transform: translate(-50%, 25px);
  }
`;

const dateCss = css`
  font-weight: 700;
  font-size: 1.5;
  line-height: 180%;

  ${mediaQuery('xs')} {
    font-weight: 600;
    font-size: 1.143rem;
    line-height: 150%;
  }
`;

const titleCss = css`
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 180%;

  ${mediaQuery('xs')} {
    font-size: 1rem;
    line-height: 150%;
  }
`;
