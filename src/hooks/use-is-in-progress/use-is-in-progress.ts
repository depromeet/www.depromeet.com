import { END_DATE, START_DATE } from '~/constants/common';

type RecruitState = 'PREVIOUS' | 'IN_PROGRESS' | 'FINISH';

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

  const isInProgress = getCurrentState() === 'IN_PROGRESS';
  const remainDay = getRemainDay();

  return { isInProgress, remainDay };
}
