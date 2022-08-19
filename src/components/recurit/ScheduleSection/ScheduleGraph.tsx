import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInSlideToRightVariants } from '~/constants/motions/motions';

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
          <span>{`${schedule.month}.${schedule.date}`}</span>
          <span>{schedule.title}</span>
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
`;
const circleCss = (isRecurit: boolean) => css`
  position: relative;

  flex-basis: 20px;

  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;

  background-color: ${isRecurit ? 'blue' : 'white'};

  :last-child {
    margin-right: 0;
  }
`;
const lineCss = css`
  flex: auto;

  margin-right: 10px;

  border: 1px solid #82818d;
`;

const eventCss = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 45px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  width: max-content;
  font-size: 1.375rem;
  line-height: 180%;
`;
