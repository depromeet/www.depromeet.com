import { Meta } from '@storybook/react';

import { FAQ } from './index';

const meta: Meta<typeof FAQ> = {
  title: 'components/FAQ',
};

export default meta;

export const Close = {
  render: () => (
    <FAQ
      isOpen={false}
      title="직장인도 참여 가능한가요?"
      description="디프만 모집은 직업, 연령 등 자격 요건에 제한을 두지 않습니다. 그러나 팀원들과 작업 속도, 일정을 맞추려면 더 많은 개인 시간을 할애할 필요가 있습니다. 따라서 회사 업무와 프로젝트를 병행할 수 있을지 충분히 고려하여 지원부탁드립니다."
    />
  ),
};

export const Open = {
  render: () => (
    <FAQ
      isOpen={true}
      title="직장인도 참여 가능한가요?"
      description="디프만 모집은 직업, 연령 등 자격 요건에 제한을 두지 않습니다. 그러나 팀원들과 작업 속도, 일정을 맞추려면 더 많은 개인 시간을 할애할 필요가 있습니다. 따라서 회사 업무와 프로젝트를 병행할 수 있을지 충분히 고려하여 지원부탁드립니다."
    />
  ),
};
