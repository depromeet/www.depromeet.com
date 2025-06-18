import { useEffect, useId, useRef, useState } from 'react';
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

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const ulElement = container.querySelector('ul');

      if (ulElement) {
        const containerWidth = container.offsetWidth;
        const ulWidth = ulElement.scrollWidth;

        setIsCentered(ulWidth <= containerWidth);
      }
    }
  }, [numberOfPages]);

  useEffect(() => {
    if (containerRef.current) {
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
  }, [currentPage]);

  return (
    <div css={[containerCss, isCentered && centeredListCss]} ref={containerRef}>
      <ul css={listCss}>
        {[...new Array(numberOfPages)].map((_, i) => {
          return (
            <li
              onClick={() => handlePageClick(i + 1)}
              css={listItemCss(currentPage === i + 1)}
              key={`page-${id}-${i + 1}`}
              data-page={i + 1}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>
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
`;

const listCss = css`
  display: flex;
  ${theme.typosV2.pretendard.regular16};
  line-height: 150%;

  &:hover {
    cursor: pointer;
  }
`;

const centeredListCss = css`
  justify-content: center;
`;

const listItemCss = (selected: boolean) => css`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${selected ? theme.colors.grey[900] : theme.colors.grey[500]};
`;
