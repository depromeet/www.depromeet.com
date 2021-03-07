import styled from 'styled-components';
import { media } from '../../../styles/theme';
import { useScheuduleData } from '../ScheduleProvider';
import Period from './Period';
import Step from './Step';

const TopBar = ({ className = '' }) => {
  const { duration, index } = useScheuduleData();
  return (
    <div className={className}>
      <Step>STEP {index}</Step>
      <Period>{duration}</Period>
    </div>
  );
};

export default styled(TopBar)`
  display: flex;
  align-items: center;
  ${media.mobile} {
    justify-content: space-between;
  }
`;
