import { css } from '@emotion/react';

import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';

import { ScheduleTable } from './ScheduleTable';

export function Schedules() {
  return (
    <section css={containerCss}>
      <ScheduleTable {...MEMBER_SCHEDULE} />
      <ScheduleTable {...SESSION_SCHEDULES} />
    </section>
  );
}

const containerCss = css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
