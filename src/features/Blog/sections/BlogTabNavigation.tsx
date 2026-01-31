import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface TabNavigationProps {
  currentMainTab: string;
  currentSubTab: { key: string; name: string };
  mainTabs: { [key: string]: { name: string; subTabs: Array<{ key: string; name: string }> } };
  onMainTabClick: (name: string) => void;
  onSubTabClick: (name: string) => void;
}

export const BlogTabNavigation = ({
  currentMainTab,
  currentSubTab,
  mainTabs,
  onMainTabClick,
  onSubTabClick,
}: TabNavigationProps) => {
  const currentMainTabData = Object.values(mainTabs).find(tab => tab.name === currentMainTab);

  return (
    <div css={tabContainerCss}>
      {/* 메인 탭 */}
      <div css={mainTabWrapperCss}>
        {Object.values(mainTabs).map(({ name }) => (
          <button
            key={name}
            css={[mainTabItemCss, currentMainTab === name && mainTabItemActiveCss]}
            onClick={() => onMainTabClick(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* 서브 탭 */}
      <div css={subTabWrapperCss}>
        {currentMainTabData?.subTabs.map(({ name }) => (
          <button
            key={name}
            css={[subTabItemCss, currentSubTab.name === name && subTabItemActiveCss]}
            data-active={currentSubTab.name === name || undefined}
            onClick={() => onSubTabClick(name)}
          >
            <span css={subTabTextCss}>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const tabContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1279px) {
    gap: 28px;
  }

  ${mediaQuery('mobile')} {
    gap: 12px;
  }
`;

/* Figma: 메인 탭 - Pill shaped, 선택: 파란배경+흰글씨, 비선택: 흰배경+파란테두리+파란글씨 */
const mainTabWrapperCss = css`
  display: flex;
  gap: 12px;

  ${mediaQuery('tablet')} {
    width: 100%;
  }
  ${mediaQuery('mobile')} {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

/* Figma: 1280~ 212x60, 768~1279 166x46, ~767 112x34 */
const mainTabItemCss = css`
  width: 212px;
  height: 60px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  color: ${colors.primary18.normal};
  border: 1px solid ${colors.primary18.normal};
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 166px;
    height: 46px;
    padding: 12px 24px;
    font-size: 16px;
  }

  ${mediaQuery('mobile')} {
    width: 112px;
    height: 34px;
    padding: 8px 12px;
    font-size: 12px;
  }
`;

const mainTabItemActiveCss = css`
  background-color: ${colors.primary18.normal};
  color: ${colors.white};
  border-color: ${colors.primary18.normal};
`;

/* Figma: 서브 탭 - 텍스트만, 선택: 언더라인+진한글씨, 비선택: 회색글씨 */
const subTabWrapperCss = css`
  display: flex;

  ${mediaQuery('mobile')} {
    overflow-x: auto;
    width: 100%;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const subTabItemCss = css`
  padding: 16px 20px;
  background: transparent;
  color: ${colors.grey18['500']};
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  ${theme.typosV2.pretendard.semibold16};
  white-space: nowrap;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold14};
  }
`;

const subTabTextCss = css`
  display: inline-block;
  position: relative;

  button[data-active] &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.grey18['900']};
  }
`;

const subTabItemActiveCss = css`
  color: ${colors.grey18['900']};
`;
