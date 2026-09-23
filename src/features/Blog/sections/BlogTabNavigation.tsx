import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
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
  gap: 12px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) {
    gap: 28px;
  }

  @media (min-width: 1280px) {
    gap: 36px;
  }
`;

const mainTabWrapperCss = css`
  display: flex;
  gap: 12px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: auto;
    overflow-x: visible;
    padding-bottom: 0;
  }
`;

/* Figma: 1280~ 212x60, 768~1279 166x46, ~767 112x34 */
const mainTabItemCss = css`
  width: 112px;
  height: 34px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.v19.white100};
  color: ${colors.v19.blue500};
  border: 1px solid ${colors.v19.blue500};
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;

  @media (min-width: 768px) {
    width: 166px;
    height: 46px;
    padding: 12px 24px;
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    width: 212px;
    height: 60px;
    padding: 16px 32px;
    font-size: 20px;
  }
`;

const mainTabItemActiveCss = css`
  background-color: ${colors.v19.blue500};
  color: ${colors.v19.white100};
  border-color: ${colors.v19.blue500};
`;

/* Figma: 서브 탭 - 텍스트만, 선택: 언더라인+진한글씨, 비선택: 회색글씨 */
const subTabWrapperCss = css`
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    overflow-x: visible;
    width: auto;
    padding-bottom: 0;
  }
`;

const subTabItemCss = css`
  padding: 16px 20px;
  background: transparent;
  color: ${colors.v19.coolGray500};
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  ${theme.typosV2.pretendard.semibold14};
  white-space: nowrap;

  @media (min-width: 768px) {
    ${theme.typosV2.pretendard.semibold16};
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
    background-color: ${colors.v19.coolGray900};
  }
`;

const subTabItemActiveCss = css`
  color: ${colors.v19.coolGray900};
`;
