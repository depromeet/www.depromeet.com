import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { CONTENT_WIDTH, SECTION_TOP_PADDING } from '~/constant/layout';
import { PROJECT_LIST, TAB_LIST } from '~/constant/project';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

import { ProjectPaginationSection } from './ProjectPaginationSection';
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
      <div css={contentWrapperCss}>
        <ProjectTitleSection />

        <ProjectTabNavigation currentTab={currentTab} tabs={TAB_LIST} onTabClick={handleClickTab} />

        <ProjectPaginationSection
          key={`${currentTab}-${selectedProjectList.length}`}
          projectList={selectedProjectList}
        />
      </div>
    </section>
  );
};

const contentWrapperCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  @media (min-width: 1280px) {
    width: ${CONTENT_WIDTH.desktop}px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: ${CONTENT_WIDTH.tablet}px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: ${CONTENT_WIDTH.mobile}px;
  }

  @media (max-width: 359px) {
    width: 100%;
    max-width: ${CONTENT_WIDTH.mobile}px;
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
