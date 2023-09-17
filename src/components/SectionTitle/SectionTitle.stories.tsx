import type { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from './index';

const meta: Meta<typeof SectionTitle> = {
  title: 'components/SectionTitle',
  component: SectionTitle,
  args: {},
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Primary: Story = {
  render: () => (
    <div css={{ backgroundColor: 'black' }}>
      <SectionTitle
        label="프로젝트"
        title={'Designers and \nProgrammers are Meeting'}
        description="디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지,
    하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다"
      />
    </div>
  ),
};

export const Short: Story = {
  render: () => (
    <div css={{ backgroundColor: 'black' }}>
      <SectionTitle label="review" title="지난 기수 후기" />
    </div>
  ),
};
