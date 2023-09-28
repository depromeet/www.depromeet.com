import type { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from '~/components/SectionTitle';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';

import { ScheduleSection } from './index';

const meta: Meta<typeof ScheduleSection> = {
  title: 'CATEGORY/ScheduleSection',
  component: ScheduleSection,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ScheduleSection>;

export const All: Story = {
  render: () => (
    <div css={{ backgroundColor: 'black' }}>
      <SectionTitle label="14th Schedule" title={'14기 일정'} />
      <ScheduleSection {...MEMBER_SCHEDULE} />
      <ScheduleSection {...SESSION_SCHEDULES} />
    </div>
  ),
};

export const Members: Story = {
  render: () => (
    <div>
      <ScheduleSection
        label="members"
        title="멤버 모집"
        titleBgColor={'blue400'}
        schedule={[
          {
            date: '10.09',
            content: '서류 접수 시작',
          },
          {
            date: '10.18',
            content: '서류 마감',
          },
          {
            date: '10.21-22',
            content: '온라인 면접',
          },
          {
            date: '10.31',
            content: '최종 합격 안내',
          },
        ]}
      />
    </div>
  ),
};

export const Sessions: Story = {
  render: () => (
    <div>
      <ScheduleSection
        label="sessions"
        title="정기 세션"
        titleBgColor={'yellow400'}
        schedule={[
          {
            date: '11.04',
            content: 'OT',
          },
          {
            date: '11.25',
            content: '네트워킹',
          },
          {
            date: '12.09',
            content: 'UT',
          },
          {
            date: '12.23',
            content: '중간 발표',
          },
          {
            date: '01.20',
            content: '배포데이',
          },
          {
            date: '02.17',
            content: '최종 발표',
          },
        ]}
      />
    </div>
  ),
};
