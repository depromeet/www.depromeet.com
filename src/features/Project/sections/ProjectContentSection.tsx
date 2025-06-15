import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { PROJECT_LIST, TAB_LIST } from '~/constant/project';
import { sectionGridBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';

import { ProjectPaginationSection } from './ProjectPaginationSection';
import { ProjectRulerDecoration } from './ProjectRulerDecoration';
import { ProjectTabNavigation } from './ProjectTabNavigation';
import { ProjectTitleSection } from './ProjectTitleSection';

const ALL_TAB = '전체';
const TEN_UNDER_TAB = '~10기';

// 10기 이하 프로젝트 필터링
const getTenUnderProjects = (projects: any[]) => {
  return projects.filter(project => {
    const generation = parseInt(project.subTitle.replace('기', ''));
    return generation <= 10;
  });
};

// 현재 탭에 맞는 프로젝트 필터링
const getCurrentProjects = (projects: any[], currentTab: string) => {
  return projects.filter(project => project.subTitle === currentTab);
};

export const ProjectContentSection = () => {
  const [currentTab, setCurrentTab] = useState(ALL_TAB);
  const [selectedProjectList, setSelectedProjectList] = useState(PROJECT_LIST);

  const handleClickTab = (tabName: string) => {
    setCurrentTab(tabName);
  };

  useEffect(() => {
    if (currentTab === ALL_TAB) {
      return setSelectedProjectList(PROJECT_LIST);
    }

    if (currentTab === TEN_UNDER_TAB) {
      return setSelectedProjectList(getTenUnderProjects(PROJECT_LIST));
    }

    const selectedProjects = getCurrentProjects(PROJECT_LIST, currentTab);
    setSelectedProjectList(selectedProjects);
  }, [currentTab]);

  return (
    <section css={sectionCss}>
      <ProjectTitleSection />

      <ProjectTabNavigation currentTab={currentTab} tabs={TAB_LIST} onTabClick={handleClickTab} />

      <ProjectPaginationSection
        _key={`${currentTab}-${selectedProjectList.length}`}
        projectList={selectedProjectList}
      />

      <ProjectRulerDecoration />
    </section>
  );
};

const sectionCss = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${sectionGridBg};
  padding: 56px 0;
  gap: 36px;

  ${mediaQuery('tablet')} {
    padding: 56px 48px;
  }
  ${mediaQuery('mobile')} {
    padding: 56px 20px;
    gap: 32px;
  }
`;
