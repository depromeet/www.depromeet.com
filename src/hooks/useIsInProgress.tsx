import { END_DATE, START_DATE } from '~/constant/common';

export type RecruitState = 'PREVIOUS' | 'IN_PROGRESS' | 'FINISH';

const 하루 = 1000 * 60 * 60 * 24;

export default function useIsInProgress() {
  const startDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);

  const getCurrentState = (): RecruitState => {
    const currentDate = new Date();

    if (startDate > currentDate) return 'PREVIOUS';
    if (endDate < currentDate) return 'FINISH';

    return 'IN_PROGRESS';
  };

  const getRemainDay = (): number => {
    const currentDate = new Date();
    const diffMs = Math.abs(endDate.getTime() - currentDate.getTime());
    const remainDay = Math.round(diffMs / 하루);
    return remainDay;
  };

  const getDDay = (): number => {
    const currentDate = new Date();
    const timeGap = currentDate.getTime() - startDate.getTime();
    const dDay = Math.round(timeGap / 하루);
    return dDay;
  };

  const isInProgress = getCurrentState() === 'IN_PROGRESS';
  const progressState = getCurrentState();
  const remainDay = getRemainDay();
  const dDay = getDDay();

  return { isInProgress, progressState, remainDay, dDay };
}
