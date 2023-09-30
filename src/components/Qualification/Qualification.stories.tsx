import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Qualification } from './index';

const meta: Meta<typeof Qualification> = {
  title: 'components/Qualification',
  args: {},
};

export default meta;

type Story = StoryObj<typeof Qualification>;

export const Primary: Story = {
  render: () => (
    <div
      css={css`
        background-color: #070814;
      `}
    >
      <Qualification />
    </div>
  ),
};
