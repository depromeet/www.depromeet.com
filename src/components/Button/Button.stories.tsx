import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <div css={containerCss}>
      <Button>지원하기</Button>
      <Button disabled>지원하기</Button>
      <Button size="lg">지원하기</Button>
      <Button size="lg" disabled>
        지원하기
      </Button>
    </div>
  ),
};

const containerCss = css`
  background-color: black;
  padding: 20px;

  & > * {
    margin-bottom: 20px;
  }
`;
