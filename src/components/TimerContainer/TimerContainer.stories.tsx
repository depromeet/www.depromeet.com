import type { Meta, StoryObj } from '@storybook/react';

import { TimerContainer } from './index';

const meta: Meta<typeof TimerContainer> = {
  title: 'components/TimerContainer',
  component: TimerContainer,
  args: {},
};

export default meta;

type Story = StoryObj<typeof TimerContainer>;

export const Primary: Story = {
  render: () => <TimerContainer />,
};
