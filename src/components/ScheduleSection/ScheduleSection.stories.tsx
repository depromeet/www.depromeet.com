import type { Meta, StoryObj } from '@storybook/react';

import { ScheduleSection } from './index';

const meta: Meta<typeof ScheduleSection> = {
  title: 'CATEGORY/ScheduleSection',
  component: ScheduleSection,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ScheduleSection>;

export const Primary: Story = {
  render: () => (
    <div css={{ backgroundColor: 'black' }}>
      <ScheduleSection
        label="members"
        title="멤버모집"
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
