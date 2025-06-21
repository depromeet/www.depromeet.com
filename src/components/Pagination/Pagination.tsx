import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { theme } from '~/styles/theme';

type PaginationProps = {
  handlePageClick: (clickedPage: number) => void;
  numberOfPages: number;
  currentPage: number;
};

export function Pagination({ handlePageClick, numberOfPages, currentPage }: PaginationProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && numberOfPages > 3) {
      const maxVisiblePages = 3;
      let startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(numberOfPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      setVisiblePages(pages);
    } else {
      const pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      setVisiblePages(pages);
    }
  }, [currentPage, numberOfPages, isMobile]);

  useEffect(() => {
    if (containerRef.current && !isMobile) {
      const container = containerRef.current;
      const ulElement = container.querySelector('ul');

      if (ulElement) {
        const containerWidth = container.offsetWidth;
        const ulWidth = ulElement.scrollWidth;

        setIsCentered(ulWidth <= containerWidth);
      }
    }
  }, [numberOfPages, isMobile]);

  useEffect(() => {
    if (containerRef.current && !isMobile) {
      const activeItem = containerRef.current.querySelector(`li[data-page="${currentPage}"]`);
      if (activeItem) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const itemLeft = (activeItem as HTMLElement).offsetLeft;
        const itemWidth = (activeItem as HTMLElement).offsetWidth;

        container.scrollTo({
          left: itemLeft - containerWidth / 2 + itemWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [currentPage, isMobile]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < numberOfPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const showArrows = isMobile && numberOfPages > 3;

  return (
    <div css={[containerCss, isCentered && !showArrows && centeredListCss]} ref={containerRef}>
      {showArrows && (
        <button
          css={arrowButtonCss(currentPage === 1)}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <Image
            src={
              currentPage === 1
                ? '/images/pagination/left-arrow-disabled.svg'
                : '/images/pagination/left-arrow.svg'
            }
            alt="이전"
            width="16"
            height="16"
            css={arrowIconCss}
          />
        </button>
      )}

      <ul css={[listCss, showArrows && mobileListCss]}>
        {visiblePages.map(pageNumber => {
          return (
            <li
              onClick={() => handlePageClick(pageNumber)}
              css={listItemCss(currentPage === pageNumber)}
              key={`page-${id}-${pageNumber}`}
              data-page={pageNumber}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>

      {showArrows && (
        <button
          css={arrowButtonCss(currentPage === numberOfPages)}
          onClick={handleNext}
          disabled={currentPage === numberOfPages}
        >
          <Image
            src={
              currentPage === numberOfPages
                ? '/images/pagination/right-arrow-disabled.svg'
                : '/images/pagination/right-arrow.svg'
            }
            alt="다음"
            width="16"
            height="16"
            css={arrowIconCss}
          />
        </button>
      )}
    </div>
  );
}

const containerCss = css`
  width: 100%;
  margin: 0 20px;
  display: flex;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    justify-content: center;
    overflow-x: visible;
  }
`;

const listCss = css`
  display: flex;
  ${theme.typosV2.pretendard.regular16};
  line-height: 150%;

  &:hover {
    cursor: pointer;
  }
`;

const mobileListCss = css`
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
    max-width: 150px;
  }
`;

const centeredListCss = css`
  justify-content: center;
`;

const listItemCss = (selected: boolean) => css`
  ${theme.typosV2.pretendard.medium16};
  line-height: 170%;
  letter-spacing: -1px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${selected ? theme.colors.grey[900] : theme.colors.grey[500]};
`;

const arrowButtonCss = (disabled: boolean) => css`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.3 : 1};
  transition: opacity 0.2s ease;

  &:disabled {
    pointer-events: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const arrowIconCss = css`
  width: 16px;
  height: 16px;
`;
