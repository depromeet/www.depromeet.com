import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
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
  ${theme.typosV2.pretendard.semibold20};
  line-height: 150%;

  padding: 16px 20px;
  color: ${theme.colors.grey[300]};

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold16};
    padding: 12px;
  }
`;

const activeTabCss = css`
  ${tabCss};
  color: ${theme.colors.grey[900]};
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;

  ${mediaQuery('mobile')} {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 14px;
  }
`;

const inActiveTabCss = css`
  ${tabCss};
  color: '#555';
`;
