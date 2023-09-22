import { useId } from 'react';
import { css } from '@emotion/react';

import { theme } from '~/styles/theme';

type PaginationProps = {
  handlePageClick: (clickedPage: number) => void;
  numberOfPages: number;
  currentPage: number;
};

export function Pagination({ handlePageClick, numberOfPages, currentPage }: PaginationProps) {
  const id = useId();
  return (
    <ul css={listCss}>
      {[...new Array(numberOfPages)].map((_, i) => {
        return (
          <li
            onClick={() => handlePageClick(i + 1)}
            css={listItemCss(currentPage === i + 1)}
            key={`page-${id}-${i + 1}`}
          >
            {i + 1}
          </li>
        );
      })}
    </ul>
  );
}

const listCss = css`
  margin-top: 70px;
  display: flex;
  gap: 28px;
  justify-content: center;
  ${theme.typos.pretendard.subTitle2};
  &:hover {
    cursor: pointer;
  }
`;

const listItemCss = (selected: boolean) => css`
  padding: 10px;
  color: ${selected ? theme.colors.yellow500 : theme.colors.white};
`;
