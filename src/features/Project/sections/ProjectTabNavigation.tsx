import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface ProjectTabNavigationProps {
  currentTab: string;
  tabs: string[];
  onTabClick: (name: string) => void;
}

export const ProjectTabNavigation = ({
  currentTab,
  tabs,
  onTabClick,
}: ProjectTabNavigationProps) => {
  const activeTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // 언더라인 길이 조정
  useEffect(() => {
    const activeButton = activeTabRefs.current[currentTab];
    if (activeButton) {
      const span = document.createElement('span');
      span.textContent = currentTab;
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
  }, [currentTab]);

  return (
    <div css={tabContainerCss}>
      {/* 탭 */}
      <div css={tabWrapperCss}>
        {tabs.map(tab => (
          <button
            key={tab}
            ref={el => {
              activeTabRefs.current[tab] = el;
            }}
            css={[tabItemCss, currentTab === tab && tabItemActiveCss]}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

const tabContainerCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;

const tabWrapperCss = css`
  display: flex;
  width: auto;
  background-color: #e3e5ea;
  padding: 0;
  justify-content: center;
  gap: 10px;

  ${mediaQuery('tablet')} {
    width: 100%;
    max-width: 500px;
    padding: 0 24px;
  }
  ${mediaQuery('mobile')} {
    padding: 0 12px;
    overflow-x: auto;
    width: 100%;
    max-width: 400px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const tabItemCss = css`
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

  &:hover {
    color: black;
  }

  ${mediaQuery('mobile')} {
    padding: 14px 12px;
    ${theme.typosV2.pretendard.medium13};
    flex-shrink: 0;
  }
`;

const tabItemActiveCss = css`
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
