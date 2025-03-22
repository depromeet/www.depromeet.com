import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { BlogPostThumbnail } from '~/components/Blog';
import { Pagination } from '~/components/Pagination';
import { AllBlog } from '~/constant/blog';
import { staggerHalf } from '~/constant/motion';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { MOBILE_PAGE_SIZE, PC_PAGE_SIZE, sliceByPage, TABLET_PAGE_SIZE } from '~/utils/pagination';

export function BlogPaginationSection({ key, blogList }: { key: string; blogList: AllBlog[] }) {
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
          key={key}
          css={blogContainerCss}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerHalf}
        >
          {sliceByPage(blogList, currentPage, isTabletSize, isMobileSize).map(blog => (
            <BlogPostThumbnail key={blog.title} {...blog} />
          ))}
        </m.div>
      </AnimatePresence>

      <Pagination
        numberOfPages={Math.ceil(blogList.length / getNumberOfPages())}
        currentPage={currentPage}
        handlePageClick={handleClickPage}
      />
    </>
  );
}

const blogContainerCss = css`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  justify-items: center;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;
