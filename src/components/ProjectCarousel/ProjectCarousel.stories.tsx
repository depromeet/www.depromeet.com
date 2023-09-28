import type { Meta, StoryObj } from '@storybook/react';

import { ProjectCarousel } from './index';

const meta: Meta<typeof ProjectCarousel> = {
  title: 'components/ProjectCarousel',
  component: ProjectCarousel,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ProjectCarousel>;

export const Primary: Story = {
  render: () => <ProjectCarousel />,
};
