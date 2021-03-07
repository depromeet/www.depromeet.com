import { ReactNode } from 'react';
import { LottieProps } from '../StepLottie';
import TopBar from './TopBar';
import Content from './Content';
import Box from './Box';

interface ScheduleProps {
  detail: {
    duration: string;
    desc: ReactNode;
    lottie: LottieProps ;
  };
  index: number;
}

const ScheduleBox = ({ detail, index }: ScheduleProps) => (
  <Box>
    <TopBar duration={detail.duration} index={index} />
    <Content desc={detail.desc} lottie={detail.lottie} />
  </Box>
);

export default ScheduleBox;
