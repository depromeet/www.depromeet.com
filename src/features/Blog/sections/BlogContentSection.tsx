import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { ProjectSubTabItem } from '~/components/ProjectTab/ProjectSubTabItem';
import { ProjectTabItem } from '~/components/ProjectTab/ProjectTabItem';
import { AllBlog, DEEPER_BLOG_LIST, OFFICIAL_BLOG_LIST } from '~/constant/blog';
import { sectionGridBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';

import { BlogPaginationSection } from './BlogPaginationSection';

const OFFICIAL_SUB_TABS = [
  { key: 'entire', name: '전체' },
  { key: 'session', name: '세션 이야기' },
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
      <div css={tabContainerCss}>
        <div css={mainTabWrapperCss}>
          {Object.values(mainTabs).map(({ name }) => (
            <ProjectTabItem
              key={name}
              tab={name}
              isActive={mainTab.name === name}
              onClickTab={() => handleClickMainTab(name)}
            />
          ))}
        </div>

        <div css={subTabWrapperCss}>
          {mainTab.subTabs.map(({ name }) => (
            <ProjectSubTabItem
              key={name}
              tab={name}
              isActive={currentSubTab.name === name}
              onClickTab={() => handleClickSubTab(name)}
            />
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
  gap: 24px;

  ${mediaQuery('tablet')} {
    padding: 80px 48px;
  }
  ${mediaQuery('mobile')} {
    padding: 80px 20px;
    gap: 20px;
  }
`;

const tabContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-self: flex-start;

  ${mediaQuery('mobile')} {
    gap: 4px;
  }
`;

const sharedTabWrapperCss = css`
  display: flex;
  > button {
    flex-shrink: 0;
  }

  ${mediaQuery('mobile')} {
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const mainTabWrapperCss = css`
  ${sharedTabWrapperCss};
  ${mediaQuery('mobile')} {
    gap: 4px;
  }
`;

const subTabWrapperCss = css`
  ${sharedTabWrapperCss};
  gap: 4px;

  ${mediaQuery('mobile')} {
    padding: 10px 0;
  }
`;
