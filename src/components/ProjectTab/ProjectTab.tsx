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
`;

const tabContainerCss = css`
  display: flex;
`;

const tabCss = css`
  ${theme.typos.pretendard.subTitle2};
  padding: 16px 24px;
  ${mediaQuery('mobile')} {
    ${theme.typos.pretendard.body2};
    padding: 8px 16px;
  }
`;

const activeTabCss = css`
  ${tabCss};
  color: ${theme.colors.yellow500};
`;

const inActiveTabCss = css`
  ${tabCss};
  color: ${theme.colors.white};
`;
