import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';

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
  const activeTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const currentMainTabData = Object.values(mainTabs).find(tab => tab.name === currentMainTab);

  // 언더라인 길이 조정
  useEffect(() => {
    const activeButton = activeTabRefs.current[currentSubTab.name];
    if (activeButton) {
      const span = document.createElement('span');
      span.textContent = currentSubTab.name;
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.fontSize = '16px';
      span.style.fontFamily = 'Pretendard';
      span.style.fontWeight = '600';
      document.body.appendChild(span);

      const textWidth = span.offsetWidth;
      document.body.removeChild(span);

      activeButton.style.setProperty('--text-width', `${textWidth}px`);
    }
  }, [currentSubTab]);

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
            ref={el => {
              activeTabRefs.current[name] = el;
            }}
            css={[subTabItemCss, currentSubTab.name === name && subTabItemActiveCss]}
            onClick={() => onSubTabClick(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

const tabContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;

const mainTabWrapperCss = css`
  display: flex;
  width: 578px;
  border-radius: 0;
  overflow: hidden;
  border: 1px solid #478af4;

  ${mediaQuery('tablet')} {
    width: 100%;
    max-width: 500px;
  }
  ${mediaQuery('mobile')} {
    flex-direction: row;
    width: 100%;
    max-width: 400px;
  }
`;

const mainTabItemCss = css`
  flex: 1;
  padding: 16px 24px;
  background-color: #e5e7eb;
  color: black;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  ${theme.typosV2.pretendard.medium16};

  &:not(:last-child) {
    border-right: 1px solid #d1d5db;
  }

  ${mediaQuery('mobile')} {
    padding: 14px 20px;
    ${theme.typosV2.pretendard.medium16};

    &:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid #d1d5db;
    }
  }
`;

const mainTabItemActiveCss = css`
  background-color: #478af4;
  color: white;
`;

const subTabWrapperCss = css`
  display: flex;
  width: 578px;
  background-color: #e3e5ea;
  padding: 0 48px;
  justify-content: center;
  gap: 10px;

  ${mediaQuery('tablet')} {
    width: 100%;
    max-width: 500px;
    padding: 0 24px;
  }
  ${mediaQuery('mobile')} {
    padding: 0 34px;
    overflow-x: auto;
    width: 100%;
    max-width: 400px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const subTabItemCss = css`
  padding: 16px 20px;
  background: #e3e5ea;
  color: #9595a1;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  ${theme.typosV2.pretendard.semibold16};
  white-space: nowrap;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQuery('mobile')} {
    padding: 16px 18.5px;
    ${theme.typosV2.pretendard.semibold16};
    flex-shrink: 0;
  }
`;

const subTabItemActiveCss = css`
  color: ${theme.colors.grey['900']};
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: var(--text-width, 40px);
    height: 2px;
    background-color: ${theme.colors.grey['900']};
    transition: width 0.2s ease;

    ${mediaQuery('mobile')} {
      bottom: 12px;
    }
  }
`;
