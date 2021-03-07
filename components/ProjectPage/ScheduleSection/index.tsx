import Title from '../Title';
import Schedules from './Schedules';

const ScheduleSection = () => (
  <div>
    <Title>
      13주간 여정
      <Title.Description className="title--desc">Depromeet 9기는 매주 토요일 13주간 진행됩니다.</Title.Description>
    </Title>
    <Schedules />
  </div>
);

export default ScheduleSection;
