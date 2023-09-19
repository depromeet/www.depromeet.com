import type { Meta, StoryObj } from '@storybook/react';

import { RecruitEntrance } from './index';

const meta: Meta<typeof RecruitEntrance> = {
  title: 'components/RecruitEntrance',
  component: RecruitEntrance,
  args: {},
};

export default meta;

type Story = StoryObj<typeof RecruitEntrance>;

export const Primary: Story = {
  render: () => (
    <div css={{ backgroundColor: 'black' }}>
      <RecruitEntrance />
    </div>
  ),
};
