import React, { ReactNode, useContext } from 'react';

import { LottieProps } from '../StepLottie';

export type ScheduleProps = {
  duration: string;
  desc: ReactNode;
  lottie: LottieProps ;
  index: number;
}

const ScheduleContext = React.createContext<ScheduleProps>(null);

export const useScheuduleData = () => useContext(ScheduleContext);
export const ScheduleProvider = ScheduleContext.Provider;
