/* eslint-disable react-hooks/rules-of-hooks */
import { Meta } from '@storybook/react';

import { Thumbnail } from './index';

const meta: Meta<typeof Thumbnail> = {
  title: 'components/Thumbnail',
};

export default meta;
const PROJECT_DUMMY_IMG = '/images/project/13-1.png';
const SESSION_DUMMY_IMG = '/images/session/orientation.png';

export const Project = {
  render: () => (
    <Thumbnail
      img={PROJECT_DUMMY_IMG}
      title="자린고비"
      subTitle="13기"
      description="거지들의 이야기로 쌓이는<br/>소비습관 개선 서비스"
      links={[
        { type: 'BEHANCE', href: '' },
        { type: 'GITHUB', href: '' },
        { type: 'WEB', href: '' },
      ]}
    />
  ),
};

export const Session = {
  render: () => (
    <Thumbnail
      img={SESSION_DUMMY_IMG}
      title="오리엔테이션"
      subTitle="Orientation"
      description="디프만의 첫 시작, 서로를 알아갈 수 있는<br/>오리엔테이션에 모두가 함께 해요."
    />
  ),
};
