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
      {isActive && <div css={underlineCss} />}
    </button>
  );
}

const tabCss = css`
  position: relative;
  ${theme.typosV2.pretendard.semibold20};
  line-height: 150%;

  padding: 16px 20px;
  color: ${theme.colors.grey[300]};

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold16};
    padding: 12px;
  }
`;

const underlineCss = css`
  position: absolute;
  bottom: 14px;
  width: calc(100% - 40px);
  height: 2px;
  background-color: ${theme.colors.grey[900]};

  ${mediaQuery('mobile')} {
    bottom: 0;
    width: calc(100% - 24px);
  }
`;

const activeTabCss = css`
  ${tabCss};
  color: ${theme.colors.grey[900]};
`;

const inActiveTabCss = css`
  ${tabCss};
  color: '#555';
`;
