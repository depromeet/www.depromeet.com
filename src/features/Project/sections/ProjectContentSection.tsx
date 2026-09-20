import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { CONTENT_WIDTH, SECTION_TOP_PADDING } from '~/constant/layout';
import { Project, PROJECT_LIST, TAB_LIST } from '~/constant/project';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

import { ProjectPaginationSection } from './ProjectPaginationSection';
import { ProjectTabNavigation } from './ProjectTabNavigation';
import { ProjectTitleSection } from './ProjectTitleSection';

export const ALL_TAB = '전체';

// project.subTitle(예: '12기')에서 기수 숫자를 파싱한다.
const parseProjectGeneration = (subTitle: string) => parseInt(subTitle.replace('기', ''), 10);

// '~N기' 형태의 탭 라벨에서 N을 파싱한다. 형식이 다르면 null.
export const parseUnderGenerationTab = (tab: string): number | null => {
  const match = tab.match(/^~(\d+)기$/);
  return match ? Number(match[1]) : null;
};

// 현재 탭에 맞는 프로젝트만 필터링한다.
// - 전체: 모든 프로젝트
// - ~N기: N기 이하인 프로젝트
// - 그 외: subTitle이 정확히 일치하는 프로젝트
export const filterProjectsByTab = (projects: Project[], tab: string): Project[] => {
  if (tab === ALL_TAB) {
    return projects;
  }

  const underGeneration = parseUnderGenerationTab(tab);
  if (underGeneration !== null) {
    return projects.filter(project => parseProjectGeneration(project.subTitle) <= underGeneration);
  }

  return projects.filter(project => project.subTitle === tab);
};

export const ProjectContentSection = () => {
  const [currentTab, setCurrentTab] = useState(ALL_TAB);
  const [selectedProjectList, setSelectedProjectList] = useState(PROJECT_LIST);

  const handleClickTab = (tabName: string) => {
    setCurrentTab(tabName);
  };

  useEffect(() => {
    setSelectedProjectList(filterProjectsByTab(PROJECT_LIST, currentTab));
  }, [currentTab]);

  return (
    <section css={sectionCss} data-gnb-theme="light">
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
