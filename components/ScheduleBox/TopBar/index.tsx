import styled from 'styled-components';
import { media } from '../../../styles/theme';
import Period from './Period';
import Step from './Step';

interface ScheduleBoxTopBarProps {
  className: string;
  index: number;
  duration: string;
}

const TopBar = ({ className, index, duration }: Partial<ScheduleBoxTopBarProps>) => (
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
