import styled from 'styled-components';

import ScheduleBox from '../../components/ScheduleBox';
import { steps } from '../../resources/data/schedule';
import { media } from '../../styles/theme';

export default function ScheduleList() {
  return (
    <div>
      <Title>
        15주간 여정
        <span className="title--desc">
          Depromeet 11기는 매주 토요일 15주간 진행됩니다.
        </span>
      </Title>
      <Schedules>
        {steps.map((v, idx) => (
          <ScheduleBox detail={v} key={`steps-${idx}`} index={idx} />
        ))}
      </Schedules>
    </div>
  );
}

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 4rem;
  ${media.mobile} {
    font-size: 1.6rem;
  }
  sup {
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-left: 1rem;
    vertical-align: super;
    ${media.mobile} {
      font-size: 1rem;
    }
  }
  .title--desc {
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 2.4rem;
    vertical-align: center;
    ${media.mobile} {
      display: none;
    }
  }
`;

const Schedules = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem 0;
`;
