import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

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
  align-items: center;

  @media (min-width: 1920px) {
    width: 1280px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 880px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 688px;
  }

  ${mediaQuery('mobile')} {
    max-width: 320px;
    width: 100%;
  }
`;

const tabWrapperCss = css`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  height: 56px;

  ${mediaQuery('mobile')} {
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const tabItemCss = css`
  padding: 16px 20px;
  background: transparent;
  color: ${colors.grey18['500']};
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${colors.grey18['900']};
  }

  ${mediaQuery('mobile')} {
    padding: 16px 20px;
  }
`;

const tabItemActiveCss = css`
  color: ${colors.grey18['900']};
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: var(--text-width, 40px);
    height: 2px;
    background-color: ${colors.grey18['900']};
    transition: width 0.2s ease;

    ${mediaQuery('mobile')} {
      bottom: 12px;
    }
  }
`;
