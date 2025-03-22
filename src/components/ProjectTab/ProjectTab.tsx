import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';

import { TAB_LIST } from '~/constant/project';
import { mediaQuery } from '~/styles/media';

import { ProjectTabItem } from './ProjectTabItem';

type ProjectTabProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
};

export function ProjectTab({ currentTab, setCurrentTab }: ProjectTabProps) {
  return (
    <ul css={tabWrapperCss}>
      <li css={tabContainerCss}>
        {TAB_LIST.map(tab => (
          <ProjectTabItem
            key={tab}
            tab={tab}
            isActive={currentTab === tab}
            onClickTab={() => setCurrentTab(tab)}
          />
        ))}
      </li>
    </ul>
  );
}

const tabWrapperCss = css`
  display: flex;

  ${mediaQuery('mobile')} {
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const tabContainerCss = css`
  display: flex;

  ${mediaQuery('mobile')} {
    gap: 8px;
  }
`;
