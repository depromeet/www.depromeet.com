/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { Meta } from '@storybook/react';

import { FAQList } from '~/components/FAQ/FAQList';

import { FAQ } from './index';

const meta: Meta<typeof FAQ> = {
  title: 'components/FAQ',
};

export default meta;

const MOCK_FAQ_LIST = [
  {
    title: '직장인도 참여 가능한가요?',
    description:
      '디프만 모집은 직업, 연령 등 자격 요건에 제한을 두지 않습니다. 그러나 팀원들과 작업 속도, 일정을 맞추려면 더 많은 개인 시간을 할애할 필요가 있습니다. 따라서 회사 업무와 프로젝트를 병행할 수 있을지 충분히 고려하여 지원부탁드립니다.',
  },
  {
    title: '직장인도 참여 가능한가요??',
    description:
      '디프만 모집은 직업, 연령 등 자격 요건에 제한을 두지 않습니다. 그러나 팀원들과 작업 속도, 일정을 맞추려면 더 많은 개인 시간을 할애할 필요가 있습니다. 따라서 회사 업무와 프로젝트를 병행할 수 있을지 충분히 고려하여 지원부탁드립니다.',
  },
  {
    title: '직장인도 참여 가능한가요???',
    description:
      '디프만 모집은 직업, 연령 등 자격 요건에 제한을 두지 않습니다. 그러나 팀원들과 작업 속도, 일정을 맞추려면 더 많은 개인 시간을 할애할 필요가 있습니다. 따라서 회사 업무와 프로젝트를 병행할 수 있을지 충분히 고려하여 지원부탁드립니다.',
  },
];

export const List = {
  render: () => <FAQList FAQList={MOCK_FAQ_LIST} />,
};

export const Interaction = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOpenButton = () => {
      setIsOpen(prev => !prev);
    };

    return (
      <FAQ.Item
        isOpen={isOpen}
        onClickOpenButton={onClickOpenButton}
        title={MOCK_FAQ_LIST[0].title}
        description={MOCK_FAQ_LIST[0].description}
      />
    );
  },
};

export const Close = {
  render: () => (
    <FAQ.Item
      isOpen={false}
      onClickOpenButton={() => {}}
      title={MOCK_FAQ_LIST[0].title}
      description={MOCK_FAQ_LIST[0].description}
    />
  ),
};

export const Open = {
  render: () => (
    <FAQ.Item
      isOpen={true}
      onClickOpenButton={() => {}}
      title={MOCK_FAQ_LIST[0].title}
      description={MOCK_FAQ_LIST[0].description}
    />
  ),
};
