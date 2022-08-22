import { RECRUIT_STATE } from '~/components/recruit/HeaderSection/HeaderSection';
import { END_DATE, START_DATE } from '~/constants/common';

export default function useIsInProgress() {
  const startDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);

  const getCurrentState = () => {
    const current = new Date();

    if (startDate > current) return RECRUIT_STATE.PREVIOUS;
    if (endDate < current) return RECRUIT_STATE.FINISH;

    return RECRUIT_STATE.IN_PROGRESS;
  };

  const isInProgress = () => {
    return getCurrentState() === RECRUIT_STATE.IN_PROGRESS;
  };

  return isInProgress;
}
