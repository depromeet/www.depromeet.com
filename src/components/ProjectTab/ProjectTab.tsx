import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';

import { TAB_LIST } from '~/constant/project';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type ProjectTabProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
};

export function ProjectTab({ currentTab, setCurrentTab }: ProjectTabProps) {
  return (
    <ul css={tabWrapperCss}>
      <li css={tabContainerCss}>
        {TAB_LIST.map(tab => (
          <button
            key={tab}
            css={currentTab === tab ? activeTabCss : inActiveTabCss}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </li>
    </ul>
  );
}

const tabWrapperCss = css`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const tabContainerCss = css`
  display: flex;

  ${mediaQuery('mobile')} {
    gap: 8px;
  }
`;

const tabCss = css`
  ${theme.typosV2.pretendard.semibold16};
  padding: 16px 20px;
  color: ${theme.colors.grey[300]};
`;

const activeTabCss = css`
  ${tabCss};
  color: ${theme.colors.grey[900]};
  text-decoration: underline;
  text-underline-offset: 8px;
`;

const inActiveTabCss = css`
  ${tabCss};
  color: '#555';
`;
