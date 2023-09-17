import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Positions } from './index';

const meta: Meta<typeof Positions> = {
  title: 'components/Positions',
  component: Positions,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Positions>;

export const Primary: Story = {
  render: () => (
    <div
      css={css`
        background-color: #070814;
      `}
    >
      <Positions />,
    </div>
  ),
};
