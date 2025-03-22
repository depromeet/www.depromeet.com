import { css } from '@emotion/react';

import { theme } from '~/styles/theme';

export function ProjectTabItem({
  tab,
  isActive,
  onClickTab,
}: {
  tab: string;
  isActive: boolean;
  onClickTab: () => void;
}) {
  return (
    <button key={tab} css={isActive ? activeTabCss : inActiveTabCss} onClick={onClickTab}>
      {tab}
    </button>
  );
}

const tabCss = css`
  ${theme.typosV2.pretendard.semibold16};
  line-height: 150%;

  padding: 16px 20px;
  color: ${theme.colors.grey[300]};
`;

const activeTabCss = css`
  ${tabCss};
  color: ${theme.colors.grey[900]};
  text-decoration: underline 2px;
  text-underline-offset: 8px;
`;

const inActiveTabCss = css`
  ${tabCss};
  color: '#555';
`;
