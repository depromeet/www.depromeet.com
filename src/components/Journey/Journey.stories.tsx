import type { Meta, StoryObj } from '@storybook/react';

import { Journey } from './index';

const meta: Meta<typeof Journey> = {
  title: 'components/Journey',
  component: Journey,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Journey>;

export const Primary: Story = {
  render: () => (
    <div
      css={theme => ({
        backgroundColor: theme.colors.black800,
      })}
    >
      <Journey />
    </div>
  ),
};
