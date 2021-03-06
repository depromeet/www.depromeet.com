import styled from 'styled-components';
import { FC } from 'react';
import { media } from '../../../styles/theme';
import Period from './Period';
import Step from './Step';

interface ScheduleBoxTopBarProps {
  className?: string;
  index: number;
  duration: string;
}

const TopBar: FC<ScheduleBoxTopBarProps> = ({ className, index, duration }) => (
  <div className={className}>
    <Step>STEP {index}</Step>
    <Period>{duration}</Period>
  </div>
);

export default styled(TopBar)`
  display: flex;
  align-items: center;
  ${media.mobile} {
    justify-content: space-between;
  }
`;
