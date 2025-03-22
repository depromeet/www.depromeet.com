import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function ProjectSubTabItem({
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
  padding: 8px 20px;
  border-radius: 50px;
  color: ${theme.colors.grey[900]};

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold15};
    line-height: 150%;
    padding: 6.5px 12px;
  }
`;

const activeTabCss = css`
  ${tabCss};
  background-color: #e6e9ec;
`;

const inActiveTabCss = css`
  ${tabCss};
  ${mediaQuery('mobile')} {
    color: ${theme.colors.grey[300]};
  }
`;
