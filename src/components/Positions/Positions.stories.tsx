import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Positions } from './index';

const meta: Meta<typeof Positions> = {
  title: 'components/Positions',
  component: Positions,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Positions>;

const MOCK: Array<ComponentProps<typeof Positions.Item>> = [
  { type: 'design', title: 'UX/UI DESIGN', link: '' },
  { type: 'ios', title: 'IOS', link: '' },
  { type: 'aos', title: 'ANDROID', link: '' },
  { type: 'web', title: 'WEB', link: '' },
  { type: 'server', title: 'SERVER', link: '' },
];

export const Primary: Story = {
  render: () => (
    <Positions>
      <Positions.Body>
        {MOCK.map(({ ...info }) => (
          <Positions.Item key={info.type} {...info} />
        ))}
      </Positions.Body>
    </Positions>
  ),
};
