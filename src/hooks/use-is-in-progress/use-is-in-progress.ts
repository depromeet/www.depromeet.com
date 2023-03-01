import { END_DATE, START_DATE } from '~/constants/common';

const RECRUIT_STATE = {
  PREVIOUS: 'PREVIOUS',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISH: 'FINISH',
};

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
