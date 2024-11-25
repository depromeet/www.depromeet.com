import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { Pagination } from '~/components/Pagination';
import { ProjectTab } from '~/components/ProjectTab';
import { SEO } from '~/components/SEO';
import { Thumbnail } from '~/components/Thumbnail';
import { Link } from '~/components/Thumbnail/Thumbnail';
import { staggerHalf } from '~/constant/motion';
import { PROJECT_LIST } from '~/constant/project';
import { IntroSection } from '~/features/Common/sections/IntroSection';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import {
  getCurrentProjects,
  getTenUnderProjects,
  MOBILE_PAGE_SIZE,
  PC_PAGE_SIZE,
  sliceByPage,
  TABLET_PAGE_SIZE,
} from '~/utils/pagination';

const FIRST_PAGE = 1;
const ALL_TAB = '전체';
const TEN_UNDER_TAB = '~10기';

export default function ProjectPage() {
  const [currentTab, setCurrentTab] = useState(ALL_TAB);
  const [selectedProjectList, setSelectedProjectList] = useState(PROJECT_LIST);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  useEffect(() => {
    setCurrentPage(1);
    if (currentTab === ALL_TAB) {
      return setSelectedProjectList(PROJECT_LIST);
    }

    if (currentTab === TEN_UNDER_TAB) {
      return setSelectedProjectList(getTenUnderProjects(PROJECT_LIST));
    }

    const selectedProjects = getCurrentProjects(PROJECT_LIST, currentTab);
    setSelectedProjectList(selectedProjects);
  }, [currentTab]);

  const onClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const getNumberOfPages = () => {
    if (isMobileSize) {
      return MOBILE_PAGE_SIZE;
    }
    if (isTabletSize) {
      return TABLET_PAGE_SIZE;
    }
    return PC_PAGE_SIZE;
  };

  return (
    <>
      <SEO title="디프만 - Project" />
      <main>
        <IntroSection
          defaultImgUrl="/images/16th/project/project.svg"
          mobileImgUrl="/images/16th/project/project_m.svg"
        />
        <section css={sectionCss}>
          <ProjectTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              css={projectContainerCss}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={staggerHalf}
            >
              {sliceByPage(selectedProjectList, currentPage, isTabletSize, isMobileSize).map(
                project => (
                  <Thumbnail
                    key={project.title}
                    img={`/images/project/${project.subTitle}/${project.title}.png`}
                    title={project.title}
                    subTitle={project.subTitle}
                    description={project.description}
                    links={project.links as Link[]}
                  />
                )
              )}
            </m.div>
          </AnimatePresence>
          <Pagination
            numberOfPages={Math.ceil(selectedProjectList.length / getNumberOfPages())}
            currentPage={currentPage}
            handlePageClick={onClickPage}
          />
        </section>
      </main>
    </>
  );
}

const sectionCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 80px 0;

  ${mediaQuery('tablet')} {
    padding: 80px 32px;
  }
  ${mediaQuery('mobile')} {
    padding: 80px 16px;
  }
`;

const projectContainerCss = css`
  width: 100%;
  max-width: 960px;
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
