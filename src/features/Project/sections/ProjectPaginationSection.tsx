import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { Pagination } from '~/components/Pagination';
import { ProjectThumbnail } from '~/components/Project';
import { staggerHalf } from '~/constant/motion';
import { Project } from '~/constant/project';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';

// 새로운 페이지 사이즈 상수들 (2행 3열 = 6개)
const PC_PAGE_SIZE = 6;
const TABLET_PAGE_SIZE = 6;
const MOBILE_PAGE_SIZE = 3;

// 페이지별로 데이터를 슬라이스하는 함수
const sliceByPage = (
  projectList: Project[],
  currentPage: number,
  isTabletSize: boolean,
  isMobileSize: boolean
) => {
  let pageSize = PC_PAGE_SIZE;
  if (isMobileSize) {
    pageSize = MOBILE_PAGE_SIZE;
  } else if (isTabletSize) {
    pageSize = TABLET_PAGE_SIZE;
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return projectList.slice(startIndex, endIndex);
};

export function ProjectPaginationSection({ projectList }: { projectList: Project[] }) {
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  const [currentPage, setCurrentPage] = useState(1);

  const getNumberOfPages = () => {
    if (isMobileSize) {
      return MOBILE_PAGE_SIZE;
    }
    if (isTabletSize) {
      return TABLET_PAGE_SIZE;
    }
    return PC_PAGE_SIZE;
  };

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        <m.div
          css={projectContainerCss}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerHalf}
        >
          {sliceByPage(projectList, currentPage, isTabletSize, isMobileSize).map(project => (
            <ProjectThumbnail key={project.title} {...project} />
          ))}
        </m.div>
      </AnimatePresence>

      <Pagination
        numberOfPages={Math.ceil(projectList.length / getNumberOfPages())}
        currentPage={currentPage}
        handlePageClick={handleClickPage}
      />
    </>
  );
}

const projectContainerCss = css`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  justify-items: stretch;
  align-items: stretch;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    max-width: 800px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 12px;
    max-width: 400px;
  }
`;
