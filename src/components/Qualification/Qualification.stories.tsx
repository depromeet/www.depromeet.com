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
    <Qualification>
      <Qualification.Body>
        {MOCK_QUALIFICATIONS.map(({ index, description }) => (
          <Qualification.Item key={index} index={index} description={description} />
        ))}
      </Qualification.Body>
    </Qualification>
  ),
};

const MOCK_QUALIFICATIONS = [
  {
    index: 1,
    description: '매주 토요일, 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 사람',
  },
  {
    index: 2,
    description: '매주 토요일, 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 사람',
  },
  {
    index: 3,
    description: '매주 토요일, 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 사람',
  },
  {
    index: 4,
    description: '매주 토요일, 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 사람',
  },
  {
    index: 5,
    description: '매주 토요일, 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 사람',
  },
  {
    index: 6,
    description: '매주 토요일, 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 사람',
  },
];
