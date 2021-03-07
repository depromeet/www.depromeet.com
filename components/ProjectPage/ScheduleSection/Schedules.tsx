import styled from 'styled-components';
import { steps } from '../../../resources/data/schedule';
import ScheduleBox from '../../ScheduleBox';
import { ScheduleProvider } from '../../ScheduleBox/ScheduleProvider';

const Schedules = ({ className = '' }) => (
  <div className={className}>
    {
      steps.map((detail, index) => (
        <ScheduleProvider value={{ ...detail, index }}>
          <ScheduleBox key={`steps-${index + 1}`} />
        </ScheduleProvider>
      ))
    }
  </div>
);

export default styled(Schedules)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem 0;
`;
