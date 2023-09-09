import { Meta } from '@storybook/react';

import { ArrowIcon } from './index';

const meta: Meta = {
  title: 'components/Icon',
};

// Icon 폴더의 파일명을 알파벳순서로 정렬해주세요~

export default meta;

export const ArrowDown = {
  render: () => <ArrowIcon />,
};

export const ArrowUp = {
  render: () => <ArrowIcon direction="up" />,
};

export const ArrowLeft = {
  render: () => <ArrowIcon direction="left" />,
};

export const ArrowRight = {
  render: () => <ArrowIcon direction="right" />,
};
