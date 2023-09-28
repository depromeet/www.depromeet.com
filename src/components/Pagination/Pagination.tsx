import { useId } from 'react';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type PaginationProps = {
  handlePageClick: (clickedPage: number) => void;
  numberOfPages: number;
  currentPage: number;
};

export function Pagination({ handlePageClick, numberOfPages, currentPage }: PaginationProps) {
  const id = useId();

  return (
    <>
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
      <div css={buttonWrapperCss}>
        {numberOfPages !== currentPage && (
          <button css={moreCss} onClick={() => handlePageClick(currentPage + 1)}>
            더보기
          </button>
        )}
      </div>
    </>
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
  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const buttonWrapperCss = css`
  display: flex;
  justify-content: center;
`;

const moreCss = css`
  display: none;
  font-size: 0.9rem;
  color: ${theme.colors.yellow500};
  padding: 8px 24px;
  margin-top: 30px;
  font-weight: 700;
  ${mediaQuery('mobile')} {
    display: block;
  }
`;

const listItemCss = (selected: boolean) => css`
  padding: 10px;
  color: ${selected ? theme.colors.yellow500 : theme.colors.white};
`;
