import type { Meta, StoryObj } from '@storybook/react';

import { FAQ } from './index';

const meta: Meta<typeof FAQ> = {
  title: 'components/FAQ',
  component: FAQ,
  args: {},
};

export default meta;

type Story = StoryObj<typeof FAQ>;

export const Primary: Story = {
  render: () => <FAQ />,
};
