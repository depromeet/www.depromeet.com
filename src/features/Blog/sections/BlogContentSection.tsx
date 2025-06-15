import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import { AllBlog, DEEPER_BLOG_LIST, OFFICIAL_BLOG_LIST } from '~/constant/blog';
import { sectionGridBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { BlogPaginationSection } from './BlogPaginationSection';

const OFFICIAL_SUB_TABS = [
  { key: 'entire', name: '전체' },
  { key: 'session', name: '세션' },
  { key: 'interview', name: '인터뷰' },
  { key: 'etc', name: '기타' },
];

const DEEPER_SUB_TABS = [
  { key: 'entire', name: '전체' },
  { key: 'project', name: '프로젝트' },
  { key: 'review', name: '활동 후기' },
];

const mainTabs = {
  OFFICIAL: {
    name: '디프만 공식 블로그',
    subTabs: OFFICIAL_SUB_TABS,
  },
  DEEPER: {
    name: '디퍼들의 이야기',
    subTabs: DEEPER_SUB_TABS,
  },
} as const;

type MainTabsKeys = keyof typeof mainTabs;

export const BlogContentSection = () => {
  const [currentMainTab, setCurrentMainTab] = useState<MainTabsKeys>('OFFICIAL');
  const mainTab = mainTabs[currentMainTab];
  const [currentSubTab, setCurrentSubTab] = useState(mainTab.subTabs[0]);
  const activeTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const getTabKeyByName = (name: string): MainTabsKeys => {
    return (
      (Object.entries(mainTabs).find(([, value]) => value.name === name)?.[0] as MainTabsKeys) ??
      'OFFICIAL'
    );
  };

  const handleClickMainTab = (name: string) => {
    const key = getTabKeyByName(name);
    setCurrentMainTab(key);
  };

  const handleClickSubTab = (name: string) => {
    const matched = mainTab.subTabs.find(tab => tab.name === name);
    setCurrentSubTab(matched ?? mainTab.subTabs[0]);
  };

  // 언더라인 길이 조정
  useEffect(() => {
    const activeButton = activeTabRefs.current[currentSubTab.name];
    if (activeButton) {
      // 텍스트 길이 측정을 위한 임시 span 생성
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

      // CSS 변수로 텍스트 너비 설정
      activeButton.style.setProperty('--text-width', `${textWidth}px`);
    }
  }, [currentSubTab]);

  useEffect(() => {
    setCurrentSubTab(mainTab.subTabs[0]);
  }, [mainTab.subTabs]);

  const blogList = currentMainTab === 'OFFICIAL' ? OFFICIAL_BLOG_LIST : DEEPER_BLOG_LIST;
  const filteredBlogList =
    currentSubTab.key === 'entire'
      ? blogList
      : (blogList as AllBlog[]).filter(({ type }) => type === currentSubTab.key);

  return (
    <section css={sectionCss}>
      <div css={tabContainerCss}>
        {/* 메인 탭 */}
        <div css={mainTabWrapperCss}>
          {Object.values(mainTabs).map(({ name }) => (
            <button
              key={name}
              css={[mainTabItemCss, mainTab.name === name && mainTabItemActiveCss]}
              onClick={() => handleClickMainTab(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* 서브 탭 */}
        <div css={subTabWrapperCss}>
          {mainTab.subTabs.map(({ name }) => (
            <button
              key={name}
              ref={el => {
                activeTabRefs.current[name] = el;
              }}
              css={[subTabItemCss, currentSubTab.name === name && subTabItemActiveCss]}
              onClick={() => handleClickSubTab(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <BlogPaginationSection
        key={`${currentMainTab}-${currentSubTab.key}-${filteredBlogList.length}`}
        blogList={filteredBlogList}
      />
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${sectionGridBg};
  padding: 80px 0;
  gap: 36px;

  ${mediaQuery('tablet')} {
    padding: 80px 48px;
  }
  ${mediaQuery('mobile')} {
    padding: 80px 20px;
    gap: 32px;
  }
`;

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
    flex-direction: column;
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

  &:hover {
    background-color: #d1d5db;
  }

  ${mediaQuery('mobile')} {
    padding: 14px 20px;
    ${theme.typosV2.pretendard.medium14};

    &:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid #d1d5db;
    }
  }
`;

const mainTabItemActiveCss = css`
  background-color: #478af4;
  color: white;

  &:hover {
    background-color: #2563eb;
  }
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
    padding: 0 12px;
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

  &:hover {
    color: black;
  }

  ${mediaQuery('mobile')} {
    padding: 14px 12px;
    ${theme.typosV2.pretendard.medium13};
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
