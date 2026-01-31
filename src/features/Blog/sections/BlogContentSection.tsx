import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { AllBlog, DEEPER_BLOG_LIST, OFFICIAL_BLOG_LIST } from '~/constant/blog';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

import { BlogPaginationSection } from './BlogPaginationSection';
import { BlogTabNavigation } from './BlogTabNavigation';
import { BlogTitleSection } from './BlogTitleSection';
import { BLOG_CONTENT_WIDTH } from '../constants/layout';

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
      <div css={contentWrapperCss}>
        <BlogTitleSection />

        <BlogTabNavigation
          currentMainTab={mainTab.name}
          currentSubTab={currentSubTab}
          mainTabs={mainTabs}
          onMainTabClick={handleClickMainTab}
          onSubTabClick={handleClickSubTab}
        />

        <BlogPaginationSection
          key={`${currentMainTab}-${currentSubTab.key}-${filteredBlogList.length}`}
          blogList={filteredBlogList}
        />
      </div>
    </section>
  );
};

const SECTION_TOP_PADDING = 172;

const contentWrapperCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  @media (min-width: 1280px) {
    width: ${BLOG_CONTENT_WIDTH.desktop}px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: ${BLOG_CONTENT_WIDTH.tablet}px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: ${BLOG_CONTENT_WIDTH.mobile}px;
  }

  @media (max-width: 359px) {
    width: 100%;
    max-width: ${BLOG_CONTENT_WIDTH.mobile}px;
  }

  ${mediaQuery('tablet')} {
    gap: 32px;
  }
`;

const sectionCss = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: ${SECTION_TOP_PADDING}px 0 80px 0;
  background-color: ${colors.white};

  ${mediaQuery('tablet')} {
    padding: ${SECTION_TOP_PADDING}px 0 64px 0;
  }
  ${mediaQuery('mobile')} {
    padding: ${SECTION_TOP_PADDING}px 0 64px 0;
  }

  @media (max-width: 359px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
