import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { AllBlog, DEEPER_BLOG_LIST, OFFICIAL_BLOG_LIST } from '~/constant/blog';
import { mediaQuery } from '~/styles/media';

import { BlogPaginationSection } from './BlogPaginationSection';
import { BlogRulerDecoration } from './BlogRulerDecoration';
import { BlogTabNavigation } from './BlogTabNavigation';
import { BlogTitleSection } from './BlogTitleSection';

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

      <BlogRulerDecoration />
    </section>
  );
};

const sectionCss = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/images/project/17기/17th-project-background.png');
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 56px 0;
  gap: 36px;

  ${mediaQuery('tablet')} {
    padding: 56px 48px;
    background-size: 1200px auto;
  }
  ${mediaQuery('mobile')} {
    padding: 56px 20px;
    gap: 32px;
    background-size: 700px auto;
  }
`;
